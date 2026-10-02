export enum ActivityType {
  // Software & Technical Skills
  TECHNICAL_PUZZLE = 'TECHNICAL_PUZZLE',
  CODE_CHALLENGE = 'CODE_CHALLENGE',
  SYSTEM_DESIGN = 'SYSTEM_DESIGN',
  DEBUGGING_QUEST = 'DEBUGGING_QUEST',
  // AI-Era Skills
  AI_PROMPT_CRAFT = 'AI_PROMPT_CRAFT',
  AI_ETHICS_SCENARIO = 'AI_ETHICS_SCENARIO',
  DATA_DETECTIVE = 'DATA_DETECTIVE',
  // Logical & Problem-Solving Skills
  LOGIC_PUZZLE = 'LOGIC_PUZZLE',
  PATTERN_RECOGNITION = 'PATTERN_RECOGNITION',
  ALGORITHM_ADVENTURE = 'ALGORITHM_ADVENTURE',
  // Soft Skills
  COMMUNICATION_CHALLENGE = 'COMMUNICATION_CHALLENGE',
  NEGOTIATION_SCENARIO = 'NEGOTIATION_SCENARIO',
  TEAM_COORDINATION = 'TEAM_COORDINATION',
  // Business & Presentation Skills
  BUSINESS_PITCH = 'BUSINESS_PITCH',
  RESOURCE_MANAGEMENT = 'RESOURCE_MANAGEMENT',
  PRESENTATION_CHALLENGE = 'PRESENTATION_CHALLENGE',
  STARTUP_SIMULATION = 'STARTUP_SIMULATION',
  // Adventure
  ADVENTURE_SCENARIO = 'ADVENTURE_SCENARIO'
}

export enum SkillCategory {
  SOFTWARE = 'SOFTWARE',
  LOGICAL = 'LOGICAL',
  SOFT_SKILLS = 'SOFT_SKILLS',
  BUSINESS = 'BUSINESS',
  PRESENTATION = 'PRESENTATION',
  AI_LITERACY = 'AI_LITERACY'
}

export interface PlayerRole {
  roleId: string;
  name: string;
  description: string;
  capabilities: string[];
  restrictions: string[];
  assignedPlayerId?: string;
}

export interface ActivityContent {
  scenario: string;
  objectives: string[];
  resources: Record<string, any>;
  constraints: string[];
  visualAssets: string[];
}

export interface ValidationRule {
  type: string;
  rule: any;
}

export interface SolutionData {
  type: 'TEXT' | 'CODE' | 'CHOICE' | 'SEQUENCE' | 'COLLABORATIVE';
  expectedAnswer: any;
  validationRules: ValidationRule[];
  requiresAllPlayers: boolean;
}

export interface Hint {
  level: number;
  content: string;
  unlockAfterAttempts: number;
}

export interface SkillRequirements {
  technicalSkills: string[];
  softSkills: string[];
  minimumSkillLevel: number;
}

export interface StepByStepGuide {
  stepNumber: number;
  title: string;
  description: string;
  coopRequirement: string; // which roles must collaborate
  estimatedTime: number; // seconds
}

export interface EducationalMeta {
  skillCategories: SkillCategory[];
  learningObjectives: string[];
  realWorldApplication: string;
  aiEraRelevance: string;
  assessmentCriteria: string[];
}

export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  description: string;
  difficulty: number;
  requiredPlayers: number;
  roles: PlayerRole[];
  content: ActivityContent;
  solution: SolutionData;
  hints: Hint[];
  timeEstimate: number;
  skillsRequired: SkillRequirements;
  steps: StepByStepGuide[];
  educationalMeta: EducationalMeta;
  createdAt: Date;
}
