export interface SkillBreakdown {
  // Software skills
  coding: number;           // 0-100
  systemDesign: number;     // 0-100
  debugging: number;        // 0-100
  // Logical skills
  problemSolving: number;   // 0-100
  patternRecognition: number; // 0-100
  algorithmicThinking: number; // 0-100
  // Soft skills
  communication: number;    // 0-100
  leadership: number;       // 0-100
  collaboration: number;    // 0-100
  // Business skills
  businessStrategy: number; // 0-100
  resourceManagement: number; // 0-100
  // Presentation skills
  publicSpeaking: number;   // 0-100
  storyTelling: number;     // 0-100
  // AI-era skills
  aiLiteracy: number;       // 0-100
  promptEngineering: number; // 0-100
  dataAnalysis: number;     // 0-100
}

export type AchievementRarity = 'COMMON' | 'RARE' | 'EPIC' | 'LEGENDARY';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  iconUrl: string;
  unlockedAt: Date;
  rarity: AchievementRarity;
}

export interface PlayerProgress {
  playerId: string;
  technicalScore: number;
  softSkillScore: number;
  businessScore: number;
  aiLiteracyScore: number;
  skillBreakdown: SkillBreakdown;
  activitiesCompleted: number;
  totalPlayTime: number; // seconds
  achievements: Achievement[];
  lastUpdated: Date;
}
