import { v4 as uuidv4 } from 'uuid';
import { ChatMessage, MessageType } from '@game/shared';
import { WebSocketManager } from './webSocketManager';
import { redisClient } from '../db/redis';

const MAX_MESSAGE_LENGTH = 500;
const RATE_LIMIT_WINDOW = 10; // seconds
const RATE_LIMIT_MAX = 10;    // messages per window
const HISTORY_TTL = 86400 * 90; // 90 days in seconds

// Simple profanity filter word list (kid-safe)
const BLOCKED_WORDS = [
  // Using a small set; in production use a maintained library
  'damn', 'hell', 'crap', 'stupid', 'idiot', 'dumb', 'hate',
];

export class ChatService {
  private wsManager?: WebSocketManager;

  setWebSocketManager(wsManager: WebSocketManager) {
    this.wsManager = wsManager;
  }

  /**
   * Send a message from a player to the session chat
   */
  async sendMessage(
    sessionId: string,
    playerId: string,
    content: string,
  ): Promise<ChatMessage | { error: string; retryAfter?: number }> {
    // Validate content length
    if (!content || content.length === 0) {
      return { error: 'Message cannot be empty' };
    }
    if (content.length > MAX_MESSAGE_LENGTH) {
      return { error: `Message exceeds maximum length of ${MAX_MESSAGE_LENGTH} characters` };
    }

    // Check rate limit
    const rateLimitResult = await this.checkRateLimit(sessionId, playerId);
    if (!rateLimitResult.allowed) {
      return { error: 'Rate limit exceeded', retryAfter: rateLimitResult.retryAfter };
    }

    // Filter content
    const filteredContent = this.filterContent(content);
    const isFiltered = filteredContent !== content;

    const message: ChatMessage = {
      id: uuidv4(),
      sessionId,
      playerId,
      content: filteredContent,
      type: MessageType.PLAYER_MESSAGE,
      timestamp: new Date(),
      isFiltered,
      metadata: {},
    };

    // Store message in Redis
    await this.storeMessage(message);

    // Broadcast to session
    if (this.wsManager) {
      this.wsManager.broadcastToSession(sessionId, 'chat_message', message);
    }

    return message;
  }

  /**
   * Send a system message (game events, hints, notifications)
   */
  async sendSystemMessage(
    sessionId: string,
    content: string,
    type: MessageType = MessageType.SYSTEM_MESSAGE,
    metadata: Record<string, string> = {},
  ): Promise<ChatMessage> {
    const message: ChatMessage = {
      id: uuidv4(),
      sessionId,
      content,
      type,
      timestamp: new Date(),
      isFiltered: false,
      metadata,
    };

    await this.storeMessage(message);

    if (this.wsManager) {
      this.wsManager.broadcastToSession(sessionId, 'chat_message', message);
    }

    return message;
  }

  /**
   * Get message history for a session
   */
  async getHistory(sessionId: string, limit: number = 50, before?: string): Promise<ChatMessage[]> {
    const key = `chat:${sessionId}`;
    const raw = await redisClient.get(key);
    if (!raw) return [];

    let messages: ChatMessage[] = JSON.parse(raw);

    if (before) {
      const beforeIndex = messages.findIndex(m => m.id === before);
      if (beforeIndex > -1) {
        messages = messages.slice(0, beforeIndex);
      }
    }

    return messages.slice(-limit);
  }

  /**
   * Send typing indicator
   */
  sendTypingIndicator(sessionId: string, playerId: string, isTyping: boolean) {
    if (this.wsManager) {
      this.wsManager.broadcastToSession(sessionId, 'typing_indicator', {
        playerId,
        isTyping,
      }, playerId);
    }
  }

  // --- Private helpers ---

  private async checkRateLimit(sessionId: string, playerId: string): Promise<{ allowed: boolean; retryAfter?: number }> {
    const key = `ratelimit:chat:${sessionId}:${playerId}`;
    const count = await redisClient.incr(key);

    if (count === 1) {
      // First message in window, set expiration
      await redisClient.set(key, '1', RATE_LIMIT_WINDOW);
    }

    if (count > RATE_LIMIT_MAX) {
      const ttl = await redisClient.ttl(key);
      return { allowed: false, retryAfter: Math.max(ttl, 1) };
    }

    return { allowed: true };
  }

  private filterContent(content: string): string {
    let filtered = content;
    for (const word of BLOCKED_WORDS) {
      const regex = new RegExp(String.raw`\b${word}\b`, 'gi');
      filtered = filtered.replace(regex, '*'.repeat(word.length));
    }
    // Basic XSS prevention: strip HTML tags
    filtered = filtered.replaceAll(/<[^>]*>/g, '');
    return filtered;
  }

  private async storeMessage(message: ChatMessage): Promise<void> {
    const key = `chat:${message.sessionId}`;
    const raw = await redisClient.get(key);
    const messages: ChatMessage[] = raw ? JSON.parse(raw) : [];

    messages.push(message);

    // Keep max 1000 messages per session
    const trimmed = messages.slice(-1000);
    await redisClient.set(key, JSON.stringify(trimmed), HISTORY_TTL);
  }
}

export const chatService = new ChatService();
