import {
  PlayerProgress, SkillBreakdown, Achievement, AchievementRarity,
  Activity, SkillCategory,
} from '@game/shared';
import { postgresClient } from '../db/postgres';
import { redisClient } from '../db/redis';

const PROGRESS_CACHE_TTL = 3600; // 1 hour

// Achievement definitions
const ACHIEVEMENT_DEFS: {
  id: string; name: string; description: string; rarity: AchievementRarity;
  condition: (p: PlayerProgress) => boolean;
}[] = [
  { id: 'first_activity', name: 'First Steps', description: 'Complete your first activity', rarity: 'COMMON', condition: p => p.activitiesCompleted >= 1 },
  { id: 'team_player_5', name: 'Team Player', description: 'Complete 5 activities', rarity: 'COMMON', condition: p => p.activitiesCompleted >= 5 },
  { id: 'team_player_25', name: 'Super Collaborator', description: 'Complete 25 activities', rarity: 'RARE', condition: p => p.activitiesCompleted >= 25 },
  { id: 'team_player_100', name: 'Legendary Team', description: 'Complete 100 activities', rarity: 'EPIC', condition: p => p.activitiesCompleted >= 100 },
  { id: 'ai_pioneer', name: 'AI Pioneer', description: 'Score 50+ in AI Literacy', rarity: 'RARE', condition: p => p.aiLiteracyScore >= 50 },
  { id: 'ai_master', name: 'AI Master', description: 'Score 90+ in AI Literacy', rarity: 'LEGENDARY', condition: p => p.aiLiteracyScore >= 90 },
  { id: 'coder_beginner', name: 'Code Apprentice', description: 'Coding skill reaches 30', rarity: 'COMMON', condition: p => p.skillBreakdown.coding >= 30 },
  { id: 'coder_pro', name: 'Code Master', description: 'Coding skill reaches 80', rarity: 'EPIC', condition: p => p.skillBreakdown.coding >= 80 },
  { id: 'business_mind', name: 'Business Mind', description: 'Business strategy reaches 50', rarity: 'RARE', condition: p => p.skillBreakdown.businessStrategy >= 50 },
  { id: 'presenter', name: 'Stage Star', description: 'Public speaking reaches 50', rarity: 'RARE', condition: p => p.skillBreakdown.publicSpeaking >= 50 },
  { id: 'well_rounded', name: 'Renaissance Kid', description: 'All skills above 30', rarity: 'EPIC', condition: p => Object.values(p.skillBreakdown).every(v => v >= 30) },
  { id: 'playtime_10h', name: 'Dedicated Learner', description: 'Play for 10 hours total', rarity: 'RARE', condition: p => p.totalPlayTime >= 36000 },
  { id: 'leader', name: 'Born Leader', description: 'Leadership skill reaches 60', rarity: 'RARE', condition: p => p.skillBreakdown.leadership >= 60 },
  { id: 'communicator', name: 'Word Wizard', description: 'Communication skill reaches 70', rarity: 'EPIC', condition: p => p.skillBreakdown.communication >= 70 },
];

function defaultSkillBreakdown(): SkillBreakdown {
  return {
    coding: 0, systemDesign: 0, debugging: 0,
    problemSolving: 0, patternRecognition: 0, algorithmicThinking: 0,
    communication: 0, leadership: 0, collaboration: 0,
    businessStrategy: 0, resourceManagement: 0,
    publicSpeaking: 0, storyTelling: 0,
    aiLiteracy: 0, promptEngineering: 0, dataAnalysis: 0,
  };
}

function defaultProgress(playerId: string): PlayerProgress {
  return {
    playerId,
    technicalScore: 0,
    softSkillScore: 0,
    businessScore: 0,
    aiLiteracyScore: 0,
    skillBreakdown: defaultSkillBreakdown(),
    activitiesCompleted: 0,
    totalPlayTime: 0,
    achievements: [],
    lastUpdated: new Date(),
  };
}

export class ProgressTracker {
  /**
   * Get or create player progress
   */
  async getProgress(playerId: string): Promise<PlayerProgress> {
    const cached = await redisClient.get(`progress:${playerId}`);
    if (cached) return JSON.parse(cached);

    const result = await postgresClient.query(
      `SELECT progress_data FROM player_progress WHERE player_id = $1`,
      [playerId]
    );

    if (result.rows.length > 0 && result.rows[0].progress_data) {
      const progress = result.rows[0].progress_data as PlayerProgress;
      await this.cacheProgress(progress);
      return progress;
    }

    // Create default progress
    const progress = defaultProgress(playerId);
    await this.saveProgress(progress);
    return progress;
  }

  /**
   * Update player progress after completing an activity
   */
  async updateProgress(playerId: string, activity: Activity): Promise<PlayerProgress> {
    const progress = await this.getProgress(playerId);

    // Determine skill gains based on activity type and educational meta
    const skillGains = this.calculateSkillGains(activity);

    // Apply gains (only increase, never decrease — monotonic progress)
    const bd = progress.skillBreakdown;
    for (const [key, gain] of Object.entries(skillGains)) {
      const k = key as keyof SkillBreakdown;
      bd[k] = Math.min(100, bd[k] + gain);
    }

    progress.activitiesCompleted += 1;
    progress.lastUpdated = new Date();

    // Recalculate aggregate scores
    progress.technicalScore = Math.round(
      (bd.coding + bd.systemDesign + bd.debugging + bd.problemSolving + bd.algorithmicThinking) / 5
    );
    progress.softSkillScore = Math.round(
      (bd.communication + bd.leadership + bd.collaboration) / 3
    );
    progress.businessScore = Math.round(
      (bd.businessStrategy + bd.resourceManagement + bd.publicSpeaking + bd.storyTelling) / 4
    );
    progress.aiLiteracyScore = Math.round(
      (bd.aiLiteracy + bd.promptEngineering + bd.dataAnalysis) / 3
    );

    // Check achievements
    const newAchievements = this.checkAchievements(progress);
    if (newAchievements.length > 0) {
      progress.achievements.push(...newAchievements);
    }

    await this.saveProgress(progress);
    return progress;
  }

  /**
   * Add play time
   */
  async addPlayTime(playerId: string, seconds: number): Promise<void> {
    const progress = await this.getProgress(playerId);
    progress.totalPlayTime += seconds;
    progress.lastUpdated = new Date();
    await this.saveProgress(progress);
  }

  /**
   * Increment games played counter
   */
  async incrementGamesPlayed(playerId: string): Promise<void> {
    await postgresClient.query(
      `UPDATE players SET total_games_played = total_games_played + 1 WHERE id = $1`,
      [playerId]
    );
  }

  /**
   * Get stats summary
   */
  async getStats(playerId: string): Promise<{
    progress: PlayerProgress;
    level: number;
    nextLevelXP: number;
    currentXP: number;
  }> {
    const progress = await this.getProgress(playerId);
    const totalScore = progress.technicalScore + progress.softSkillScore +
                       progress.businessScore + progress.aiLiteracyScore;
    const level = Math.floor(totalScore / 25) + 1;
    const currentXP = totalScore % 25;
    const nextLevelXP = 25;

    return { progress, level, nextLevelXP, currentXP };
  }

  // --- Private helpers ---

  private calculateSkillGains(activity: Activity): Partial<SkillBreakdown> {
    const gains: Partial<SkillBreakdown> = {};
    const baseGain = activity.difficulty * 2; // 2-10 points based on difficulty

    const categoryGainMap: Record<SkillCategory, (keyof SkillBreakdown)[]> = {
      [SkillCategory.SOFTWARE]: ['coding', 'systemDesign', 'debugging'],
      [SkillCategory.LOGICAL]: ['problemSolving', 'patternRecognition', 'algorithmicThinking'],
      [SkillCategory.SOFT_SKILLS]: ['communication', 'leadership', 'collaboration'],
      [SkillCategory.BUSINESS]: ['businessStrategy', 'resourceManagement'],
      [SkillCategory.PRESENTATION]: ['publicSpeaking', 'storyTelling'],
      [SkillCategory.AI_LITERACY]: ['aiLiteracy', 'promptEngineering', 'dataAnalysis'],
    };

    // Primary skill gains
    for (const category of activity.educationalMeta.skillCategories) {
      const skills = categoryGainMap[category] || [];
      for (const skill of skills) {
        gains[skill] = (gains[skill] || 0) + baseGain;
      }
    }

    // All activities give some collaboration and communication bonus
    gains.collaboration = (gains.collaboration || 0) + Math.ceil(baseGain / 2);
    gains.communication = (gains.communication || 0) + Math.ceil(baseGain / 3);

    return gains;
  }

  private checkAchievements(progress: PlayerProgress): Achievement[] {
    const newAchievements: Achievement[] = [];
    const earnedIds = new Set(progress.achievements.map(a => a.id));

    for (const def of ACHIEVEMENT_DEFS) {
      if (!earnedIds.has(def.id) && def.condition(progress)) {
        newAchievements.push({
          id: def.id,
          name: def.name,
          description: def.description,
          iconUrl: `/assets/achievements/${def.id}.png`,
          unlockedAt: new Date(),
          rarity: def.rarity,
        });
      }
    }

    return newAchievements;
  }

  private async saveProgress(progress: PlayerProgress): Promise<void> {
    await postgresClient.query(
      `INSERT INTO player_progress (player_id, progress_data, updated_at)
       VALUES ($1, $2, NOW())
       ON CONFLICT (player_id) DO UPDATE SET progress_data = $2, updated_at = NOW()`,
      [progress.playerId, JSON.stringify(progress)]
    );
    await this.cacheProgress(progress);
  }

  private async cacheProgress(progress: PlayerProgress): Promise<void> {
    await redisClient.set(`progress:${progress.playerId}`, JSON.stringify(progress), PROGRESS_CACHE_TTL);
  }
}

export const progressTracker = new ProgressTracker();
