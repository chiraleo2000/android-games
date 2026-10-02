export enum SessionState {
  WAITING = 'WAITING',
  READY = 'READY',
  IN_PROGRESS = 'IN_PROGRESS',
  PAUSED = 'PAUSED',
  COMPLETED = 'COMPLETED',
  ABANDONED = 'ABANDONED'
}

export interface SessionPlayer {
  playerId: string;
  joinedAt: Date;
  isConnected: boolean;
  currentRole: string;
  score: number;
}

export interface GameSettings {
  minPlayers: number;
  maxPlayers: number;
  difficulty: number;
  activityTypes: string[];
  timeLimit?: number;
  allowHints: boolean;
}

export interface GameSession {
  id: string;
  joinCode: string;
  hostPlayerId: string;
  players: SessionPlayer[];
  state: SessionState;
  settings: GameSettings;
  currentActivity?: string;
  activityHistory: string[];
  createdAt: Date;
  startedAt?: Date;
  endedAt?: Date;
}
