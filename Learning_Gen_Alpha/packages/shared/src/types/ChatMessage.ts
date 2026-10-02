export enum MessageType {
  PLAYER_MESSAGE = 'PLAYER_MESSAGE',
  SYSTEM_MESSAGE = 'SYSTEM_MESSAGE',
  ACTIVITY_HINT = 'ACTIVITY_HINT',
  ACHIEVEMENT_NOTIFICATION = 'ACHIEVEMENT_NOTIFICATION',
  PLAYER_JOINED = 'PLAYER_JOINED',
  PLAYER_LEFT = 'PLAYER_LEFT'
}

export interface ChatMessage {
  id: string;
  sessionId: string;
  playerId?: string;
  content: string;
  type: MessageType;
  timestamp: Date;
  isFiltered: boolean;
  metadata: Record<string, string>;
}
