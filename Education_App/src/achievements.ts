export interface AchievementDef {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const ACHIEVEMENTS: AchievementDef[] = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Complete level 1',
    icon: '🏁'
  },
  {
    id: 'battery-saver',
    name: 'Battery Saver',
    description: 'Win a level with at least 95% battery left',
    icon: '🔋'
  },
  {
    id: 'efficiency-expert',
    name: 'Efficiency Expert',
    description: 'Earn 60 stars',
    icon: '⭐'
  },
  {
    id: 'loop-learner',
    name: 'Loop Learner',
    description: 'Win a level using a loop',
    icon: '🔁'
  },
  {
    id: 'persistent',
    name: 'Persistent',
    description: 'Complete 5 levels on one difficulty',
    icon: '📚'
  }
];
