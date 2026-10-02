import { v4 as uuidv4 } from 'uuid';
import {
  Activity, ActivityType, PlayerRole, ActivityContent, SolutionData,
  Hint, SkillRequirements, StepByStepGuide, EducationalMeta,
  SkillCategory, PlayerProfile,
} from '@game/shared';

/**
 * Educational Content Generator
 * Creates dynamic activities focused on AI-era skills:
 * - Software & logical skills
 * - Soft skills & collaboration
 * - Business & presentation skills
 * - AI literacy & prompt engineering
 */

// Activity templates organized by category
const ACTIVITY_TEMPLATES: Record<SkillCategory, ActivityTemplate[]> = {
  [SkillCategory.SOFTWARE]: [
    {
      type: ActivityType.CODE_CHALLENGE,
      titleTemplate: 'Code Together: {topic}',
      topics: ['Build a Calculator', 'Sort the Treasure Chest', 'Web Page Builder', 'API Explorer', 'Database Quest'],
      baseSteps: 4,
    },
    {
      type: ActivityType.DEBUGGING_QUEST,
      titleTemplate: 'Bug Hunters: {topic}',
      topics: ['The Broken Robot', 'Missing Semicolons', 'Logic Loop Trap', 'Memory Leak Monster', 'The Null Island'],
      baseSteps: 3,
    },
    {
      type: ActivityType.SYSTEM_DESIGN,
      titleTemplate: 'Architect Academy: {topic}',
      topics: ['Design a Chat App', 'Build a Game Server', 'School Library System', 'Pet Adoption Platform', 'Music Streaming Service'],
      baseSteps: 5,
    },
  ],
  [SkillCategory.LOGICAL]: [
    {
      type: ActivityType.LOGIC_PUZZLE,
      titleTemplate: 'Brain Benders: {topic}',
      topics: ['The River Crossing', 'Tower of Hanoi', 'The Magic Square', 'Circuit Board Maze', 'The Encryption Key'],
      baseSteps: 3,
    },
    {
      type: ActivityType.PATTERN_RECOGNITION,
      titleTemplate: 'Pattern Patrol: {topic}',
      topics: ['Sequence Detective', 'Shape Shifter Code', 'Data Pattern Hunt', 'Musical Code Breaker', 'The Hidden Algorithm'],
      baseSteps: 3,
    },
    {
      type: ActivityType.ALGORITHM_ADVENTURE,
      titleTemplate: 'Algorithm Quest: {topic}',
      topics: ['Sorting Race', 'Search Party', 'Graph Explorer', 'Dynamic Dungeon', 'Greedy Dragon'],
      baseSteps: 4,
    },
  ],
  [SkillCategory.SOFT_SKILLS]: [
    {
      type: ActivityType.COMMUNICATION_CHALLENGE,
      titleTemplate: 'Word Wizards: {topic}',
      topics: ['Telephone Game 2.0', 'Explain Like I\'m Five', 'Silent Instructions', 'Emoji Translator', 'Feedback Art'],
      baseSteps: 3,
    },
    {
      type: ActivityType.TEAM_COORDINATION,
      titleTemplate: 'Team Titans: {topic}',
      topics: ['Project Sprint', 'Assembly Line', 'Rescue Mission', 'Event Planner', 'Space Station Repair'],
      baseSteps: 4,
    },
    {
      type: ActivityType.NEGOTIATION_SCENARIO,
      titleTemplate: 'Deal Makers: {topic}',
      topics: ['Resource Trade', 'The Compromise Bridge', 'Startup Funding Round', 'Treaty of Teamwork', 'Fair Share Problem'],
      baseSteps: 3,
    },
  ],
  [SkillCategory.BUSINESS]: [
    {
      type: ActivityType.BUSINESS_PITCH,
      titleTemplate: 'Junior Dragon\'s Den: {topic}',
      topics: ['Lemonade Stand 2.0', 'App Idea Pitch', 'Eco-Friendly Invention', 'School Improvement Plan', 'Community Service Startup'],
      baseSteps: 5,
    },
    {
      type: ActivityType.RESOURCE_MANAGEMENT,
      titleTemplate: 'Budget Boss: {topic}',
      topics: ['Event Budget', 'Game Economy Design', 'School Store Manager', 'Virtual City Builder', 'Space Colony Resources'],
      baseSteps: 4,
    },
    {
      type: ActivityType.STARTUP_SIMULATION,
      titleTemplate: 'Startup Sprint: {topic}',
      topics: ['Build Your MVP', 'Customer Discovery', 'Growth Hacking', 'Pivot or Persist', 'The Launch Day'],
      baseSteps: 5,
    },
  ],
  [SkillCategory.PRESENTATION]: [
    {
      type: ActivityType.PRESENTATION_CHALLENGE,
      titleTemplate: 'Stage Stars: {topic}',
      topics: ['60-Second Pitch', 'Show and Tell Pro', 'Data Storytelling', 'The Demo Day', 'TED Talk Jr.'],
      baseSteps: 4,
    },
  ],
  [SkillCategory.AI_LITERACY]: [
    {
      type: ActivityType.AI_PROMPT_CRAFT,
      titleTemplate: 'Prompt Masters: {topic}',
      topics: ['AI Art Director', 'The Perfect Prompt', 'Chatbot Trainer', 'AI Story Writer', 'Prompt vs Prompt Battle'],
      baseSteps: 3,
    },
    {
      type: ActivityType.AI_ETHICS_SCENARIO,
      titleTemplate: 'AI Ethics Lab: {topic}',
      topics: ['Bias Detective', 'Privacy Guardian', 'AI Decision Maker', 'Deepfake Spotter', 'The Responsible AI'],
      baseSteps: 4,
    },
    {
      type: ActivityType.DATA_DETECTIVE,
      titleTemplate: 'Data Detectives: {topic}',
      topics: ['Chart Reading Challenge', 'Survey Analysis', 'Trend Finder', 'Data Cleaning Crew', 'Visualization Wizards'],
      baseSteps: 3,
    },
  ],
};

interface ActivityTemplate {
  type: ActivityType;
  titleTemplate: string;
  topics: string[];
  baseSteps: number;
}

const COOP_ROLES: Record<number, string[]> = {
  2: ['Leader', 'Analyst'],
  3: ['Leader', 'Analyst', 'Designer'],
  4: ['Leader', 'Analyst', 'Designer', 'Presenter'],
  5: ['Leader', 'Analyst', 'Designer', 'Presenter', 'QA Tester'],
};

const ROLE_DESCRIPTIONS: Record<string, { description: string; capabilities: string[]; restrictions: string[] }> = {
  Leader: {
    description: 'Coordinates the team, makes final decisions, and keeps everyone on track',
    capabilities: ['submit_final_answer', 'assign_subtasks', 'call_vote'],
    restrictions: ['cannot_see_hidden_clues'],
  },
  Analyst: {
    description: 'Examines data, finds patterns, and provides research to the team',
    capabilities: ['view_all_data', 'run_analysis', 'generate_reports'],
    restrictions: ['cannot_submit_final_answer'],
  },
  Designer: {
    description: 'Creates visual solutions, diagrams, and creative approaches',
    capabilities: ['create_diagrams', 'design_ui', 'visual_brainstorm'],
    restrictions: ['cannot_run_analysis'],
  },
  Presenter: {
    description: 'Communicates solutions, creates presentations, and explains concepts',
    capabilities: ['create_presentation', 'explain_solution', 'public_speak'],
    restrictions: ['cannot_view_raw_data'],
  },
  'QA Tester': {
    description: 'Tests solutions, finds edge cases, and ensures quality',
    capabilities: ['run_tests', 'find_bugs', 'validate_solution'],
    restrictions: ['cannot_create_diagrams'],
  },
};

export class ContentGenerator {
  /**
   * Generate a new activity appropriate for the session
   */
  generateActivity(
    playerCount: number,
    playerProfiles: PlayerProfile[],
    difficulty: number,
    completedActivityTypes: ActivityType[] = [],
  ): Activity {
    const category = this.selectCategory(playerProfiles, completedActivityTypes);
    const template = this.selectTemplate(category, completedActivityTypes);
    const topic = this.selectTopic(template);
    const adjustedDifficulty = this.clampDifficulty(difficulty);

    const roles = this.generateRoles(playerCount);
    const steps = this.generateSteps(template, adjustedDifficulty, roles);
    const content = this.generateContent(template, topic, adjustedDifficulty, playerCount);
    const solution = this.generateSolution(template.type, adjustedDifficulty, playerCount);
    const hints = this.generateHints(adjustedDifficulty);
    const skills = this.generateSkillRequirements(category, adjustedDifficulty);
    const eduMeta = this.generateEducationalMeta(category, template.type, topic);

    const activity: Activity = {
      id: uuidv4(),
      type: template.type,
      title: template.titleTemplate.replace('{topic}', topic),
      description: this.generateDescription(template.type, topic, adjustedDifficulty),
      difficulty: adjustedDifficulty,
      requiredPlayers: playerCount,
      roles,
      content,
      solution,
      hints,
      timeEstimate: this.estimateTime(adjustedDifficulty, template.baseSteps),
      skillsRequired: skills,
      steps,
      educationalMeta: eduMeta,
      createdAt: new Date(),
    };

    return activity;
  }

  /**
   * Increase difficulty after success
   */
  adaptDifficultyUp(currentDifficulty: number): number {
    return Math.min(5, currentDifficulty + 1);
  }

  /**
   * Decrease difficulty after failures
   */
  adaptDifficultyDown(currentDifficulty: number): number {
    return Math.max(1, currentDifficulty - 1);
  }

  private selectCategory(profiles: PlayerProfile[], completedTypes: ActivityType[]): SkillCategory {
    // Balance between categories, favoring areas where players need growth
    const categories = Object.values(SkillCategory);

    // Count how many activities of each category have been completed
    const categoryCounts = new Map<SkillCategory, number>();
    for (const cat of categories) {
      const catTypes = new Set(ACTIVITY_TEMPLATES[cat].map((t: ActivityTemplate) => t.type));
      const count = completedTypes.filter((t: ActivityType) => catTypes.has(t)).length;
      categoryCounts.set(cat, count);
    }

    // Find weakest skill areas across player profiles
    const avgTechnical = profiles.reduce((s: number, p: PlayerProfile) => s + p.technicalSkillLevel, 0) / profiles.length;
    const avgSoft = profiles.reduce((s: number, p: PlayerProfile) => s + p.softSkillLevel, 0) / profiles.length;
    const avgBusiness = profiles.reduce((s: number, p: PlayerProfile) => s + (p.businessSkillLevel ?? 1), 0) / profiles.length;
    const avgAI = profiles.reduce((s: number, p: PlayerProfile) => s + (p.aiLiteracyLevel ?? 1), 0) / profiles.length;

    // Weighted selection: lower skill = higher weight
    const weights: [SkillCategory, number][] = [
      [SkillCategory.SOFTWARE, (11 - avgTechnical) * 2],
      [SkillCategory.LOGICAL, (11 - avgTechnical) * 1.5],
      [SkillCategory.SOFT_SKILLS, (11 - avgSoft) * 2],
      [SkillCategory.BUSINESS, (11 - avgBusiness) * 2],
      [SkillCategory.PRESENTATION, (11 - avgSoft + 11 - avgBusiness) * 1],
      [SkillCategory.AI_LITERACY, (11 - avgAI) * 2.5], // boost AI-era skills
    ];

    // Reduce weight for over-represented categories
    for (const [cat, count] of categoryCounts) {
      const w = weights.find(([c]) => c === cat);
      if (w) w[1] = Math.max(1, w[1] - count * 2);
    }

    // Weighted random selection
    const totalWeight = weights.reduce((s, [, w]) => s + w, 0);
    let random = Math.random() * totalWeight;
    for (const [cat, weight] of weights) {
      random -= weight;
      if (random <= 0) return cat;
    }
    return categories[0];
  }

  private selectTemplate(category: SkillCategory, completedTypes: ActivityType[]): ActivityTemplate {
    const templates = ACTIVITY_TEMPLATES[category];
    // Prefer templates not recently used
    const unused = templates.filter(t => !completedTypes.includes(t.type));
    const pool = unused.length > 0 ? unused : templates;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  private selectTopic(template: ActivityTemplate): string {
    return template.topics[Math.floor(Math.random() * template.topics.length)];
  }

  private clampDifficulty(d: number): number {
    return Math.max(1, Math.min(5, Math.round(d)));
  }

  private generateRoles(playerCount: number): PlayerRole[] {
    const roleNames = COOP_ROLES[playerCount] || COOP_ROLES[2];
    return roleNames.map((name, i) => {
      const roleDef = ROLE_DESCRIPTIONS[name] || ROLE_DESCRIPTIONS['Leader'];
      return {
        roleId: `role_${i + 1}`,
        name,
        description: roleDef.description,
        capabilities: roleDef.capabilities,
        restrictions: roleDef.restrictions,
      };
    });
  }

  private generateSteps(
    template: ActivityTemplate,
    difficulty: number,
    roles: PlayerRole[],
  ): StepByStepGuide[] {
    const stepCount = template.baseSteps + Math.floor(difficulty / 2);
    const stepTemplates = this.getStepTemplatesForType(template.type, stepCount, roles);
    return stepTemplates;
  }

  private getStepTemplatesForType(
    type: ActivityType,
    stepCount: number,
    roles: PlayerRole[],
  ): StepByStepGuide[] {
    const steps: StepByStepGuide[] = [];
    const roleNames = roles.map(r => r.name);

    // Generic co-op step patterns
    const coopPatterns = [
      { title: 'Understand the Challenge', coop: 'All players', time: 60 },
      { title: 'Discuss Strategy', coop: `${roleNames[0]} + ${roleNames[1] || 'All'}`, time: 90 },
      { title: 'Research & Analyze', coop: roleNames.includes('Analyst') ? 'Analyst leads, all contribute' : 'All players', time: 120 },
      { title: 'Design Solution', coop: roleNames.includes('Designer') ? 'Designer leads, Leader approves' : 'All players collaborate', time: 120 },
      { title: 'Build & Implement', coop: 'All players', time: 180 },
      { title: 'Test & Validate', coop: roleNames.includes('QA Tester') ? 'QA Tester leads' : 'All players', time: 90 },
      { title: 'Present Solution', coop: roleNames.includes('Presenter') ? 'Presenter leads' : 'Leader presents', time: 90 },
      { title: 'Review & Reflect', coop: 'All players', time: 60 },
    ];

    for (let i = 0; i < Math.min(stepCount, coopPatterns.length); i++) {
      const pattern = coopPatterns[i];
      steps.push({
        stepNumber: i + 1,
        title: pattern.title,
        description: this.getStepDescription(type, i, pattern.title),
        coopRequirement: pattern.coop,
        estimatedTime: pattern.time,
      });
    }

    return steps;
  }

  private getStepDescription(type: ActivityType, stepIndex: number, title: string): string {
    const descriptions: Record<string, string[]> = {
      [ActivityType.CODE_CHALLENGE]: [
        'Read the problem statement together and make sure everyone understands the requirements.',
        'Discuss possible approaches. Each player shares one idea. Vote on the best strategy.',
        'The Analyst researches similar patterns. Share findings with the team.',
        'The Designer sketches out the solution structure or pseudocode.',
        'Work together to write the code. Each player handles a part of the solution.',
        'Run test cases. The QA Tester identifies edge cases to verify.',
        'The Presenter explains the solution approach to a simulated audience.',
        'Reflect on what was learned and how the team collaborated.',
      ],
      [ActivityType.BUSINESS_PITCH]: [
        'Read the business scenario. Identify the problem you are solving.',
        'Brainstorm ideas as a team. The Leader helps organize discussion.',
        'Research the target market. The Analyst finds key facts and numbers.',
        'Design the product or service. Create a simple visual prototype.',
        'Build your pitch deck: problem, solution, market, team, ask.',
        'Practice the pitch. Give each other feedback.',
        'Deliver the final pitch to the virtual judges.',
        'Discuss feedback and what you would improve next time.',
      ],
      [ActivityType.AI_PROMPT_CRAFT]: [
        'Learn about AI prompts: what makes a good vs bad prompt?',
        'Discuss strategies for crafting effective prompts as a team.',
        'Experiment with different prompt styles and compare results.',
        'Refine your best prompts based on team feedback.',
        'Present your prompt crafting approach and results.',
        'Reflect on how AI tools can be used responsibly.',
      ],
    };

    const typeDescs = descriptions[type] || descriptions[ActivityType.CODE_CHALLENGE];
    return typeDescs[stepIndex] || `Complete step: ${title}`;
  }

  private generateContent(
    template: ActivityTemplate,
    topic: string,
    difficulty: number,
    playerCount: number,
  ): ActivityContent {
    return {
      scenario: `Welcome to "${topic}"! Your team of ${playerCount} players must work together to complete this ${template.type.replaceAll('_', ' ').toLowerCase()} challenge at difficulty level ${difficulty}. Each team member has a unique role with special abilities. Use the chat to coordinate and the step-by-step guide to progress.`,
      objectives: [
        `Complete the ${topic} challenge`,
        'Demonstrate effective teamwork and communication',
        'Apply critical thinking to solve the problem',
        `Use each team member's unique role abilities`,
      ],
      resources: {
        difficulty,
        playerCount,
        topic,
        activityType: template.type,
      },
      constraints: [
        `Time limit based on difficulty: ${this.estimateTime(difficulty, template.baseSteps)} seconds`,
        'All team members must contribute to the final solution',
        'Hints are available if the team gets stuck',
      ],
      visualAssets: [],
    };
  }

  private generateSolution(type: ActivityType, difficulty: number, playerCount: number): SolutionData {
    const requiresAll = playerCount >= 2;
    return {
      type: requiresAll ? 'COLLABORATIVE' : 'TEXT',
      expectedAnswer: { type, difficulty, validSolution: true },
      validationRules: [
        { type: 'required_fields', rule: { fields: ['answer', 'explanation'] } },
        { type: 'min_length', rule: { field: 'explanation', minLength: 20 } },
        { type: 'collaboration_check', rule: { minContributors: Math.max(2, playerCount) } },
      ],
      requiresAllPlayers: requiresAll,
    };
  }

  private generateHints(difficulty: number): Hint[] {
    return [
      { level: 1, content: 'Try breaking the problem into smaller parts. What is the first thing you need to figure out?', unlockAfterAttempts: 3 },
      { level: 2, content: 'Think about which team member\'s role can best help here. Have you used everyone\'s abilities?', unlockAfterAttempts: 5 },
      { level: 3, content: 'Here is a big hint: Look at the constraints carefully and work backwards from the goal.', unlockAfterAttempts: 7 },
    ];
  }

  private generateSkillRequirements(category: SkillCategory, difficulty: number): SkillRequirements {
    const skillMap: Record<SkillCategory, { technical: string[]; soft: string[] }> = {
      [SkillCategory.SOFTWARE]: { technical: ['coding', 'debugging', 'system-design'], soft: ['collaboration'] },
      [SkillCategory.LOGICAL]: { technical: ['problem-solving', 'pattern-recognition', 'algorithms'], soft: ['critical-thinking'] },
      [SkillCategory.SOFT_SKILLS]: { technical: [], soft: ['communication', 'leadership', 'teamwork', 'empathy'] },
      [SkillCategory.BUSINESS]: { technical: ['data-analysis'], soft: ['negotiation', 'strategy', 'planning'] },
      [SkillCategory.PRESENTATION]: { technical: [], soft: ['public-speaking', 'storytelling', 'visual-communication'] },
      [SkillCategory.AI_LITERACY]: { technical: ['prompt-engineering', 'data-analysis', 'ai-concepts'], soft: ['ethics', 'critical-thinking'] },
    };

    const skills = skillMap[category] || skillMap[SkillCategory.SOFTWARE];
    return {
      technicalSkills: skills.technical,
      softSkills: skills.soft,
      minimumSkillLevel: Math.max(1, difficulty - 1),
    };
  }

  private generateEducationalMeta(category: SkillCategory, type: ActivityType, topic: string): EducationalMeta {
    const realWorldMap: Record<SkillCategory, string> = {
      [SkillCategory.SOFTWARE]: 'Professional software developers solve these kinds of problems daily using teamwork and technical skills.',
      [SkillCategory.LOGICAL]: 'Logical thinking is used by scientists, engineers, and data analysts to solve complex real-world problems.',
      [SkillCategory.SOFT_SKILLS]: 'Communication and teamwork are the #1 skills employers look for in every industry.',
      [SkillCategory.BUSINESS]: 'Entrepreneurs and business leaders use these skills to create companies and products that change the world.',
      [SkillCategory.PRESENTATION]: 'Being able to present ideas clearly is essential for leaders, teachers, salespeople, and creators.',
      [SkillCategory.AI_LITERACY]: 'Understanding AI is one of the most important skills for the future. AI tools are changing every industry.',
    };

    const aiRelevanceMap: Record<SkillCategory, string> = {
      [SkillCategory.SOFTWARE]: 'AI can help write code, but understanding the logic and architecture is still a human superpower.',
      [SkillCategory.LOGICAL]: 'AI models use algorithms and patterns — understanding these helps you work WITH AI more effectively.',
      [SkillCategory.SOFT_SKILLS]: 'AI cannot replace human empathy, creativity, and leadership. These skills become MORE valuable in the AI era.',
      [SkillCategory.BUSINESS]: 'AI is creating new business models. Understanding business fundamentals helps you leverage AI opportunities.',
      [SkillCategory.PRESENTATION]: 'AI can help create presentations, but the human ability to tell stories and persuade is irreplaceable.',
      [SkillCategory.AI_LITERACY]: 'Learning to use AI tools effectively and ethically is like learning to read — essential for the future.',
    };

    return {
      skillCategories: [category],
      learningObjectives: [
        `Understand key concepts in ${category.toLowerCase().replaceAll('_', ' ')}`,
        'Practice collaborative problem-solving',
        `Apply skills through the "${topic}" challenge`,
        'Develop critical thinking and communication',
      ],
      realWorldApplication: realWorldMap[category],
      aiEraRelevance: aiRelevanceMap[category],
      assessmentCriteria: [
        'Quality of the solution',
        'Team collaboration effectiveness',
        'Individual contribution to team effort',
        'Creative problem-solving approach',
        'Clear communication of ideas',
      ],
    };
  }

  private generateDescription(type: ActivityType, topic: string, difficulty: number): string {
    const difficultyLabel = ['', 'Beginner', 'Easy', 'Medium', 'Hard', 'Expert'][difficulty];
    return `[${difficultyLabel}] Work together with your team to tackle "${topic}". This ${type.replaceAll('_', ' ').toLowerCase()} will challenge your thinking, teamwork, and creativity. Follow the steps, use your role abilities, and communicate with your team!`;
  }

  private estimateTime(difficulty: number, baseSteps: number): number {
    return (baseSteps * 60) + (difficulty * 30); // seconds
  }
}

export const contentGenerator = new ContentGenerator();
