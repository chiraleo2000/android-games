export interface Player {
  id: string;
  username: string;
  email: string;
  passwordHash: string;
  profile: PlayerProfile;
  createdAt: Date;
  lastLoginAt: Date;
}

export interface PlayerProfile {
  displayName: string;
  avatarUrl: string;
  technicalSkillLevel: number;
  softSkillLevel: number;
  businessSkillLevel: number;
  aiLiteracyLevel: number;
  preferredRoles: string[];
  achievements: string[];
  totalGamesPlayed: number;
  totalGamesWon: number;
}
