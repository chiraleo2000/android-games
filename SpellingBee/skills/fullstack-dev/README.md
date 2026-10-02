# Full-Stack Dev Skill

## Architecture

```
┌─────────────────────────────────────────────┐
│         SKILL.md                            │
│         YOU are the Lead Full-Stack Dev     │
│                                             │
│  Your Responsibilities:                     │
│  - Feature-driven workflow management       │
│  - Code generation in every phase           │
│  - UI/UX and backend coordination           │
│  - Rapid prototyping and iteration          │
│  - Technical implementation focus           │
│                                             │
│  Phase Execution:                           │
│  - Generate specs AND working code          │
│  - Create prototypes early and often        │
│  - Focus on feature properties              │
│  - Iterate with real implementations        │
└──────────────────┬──────────────────────────┘
                   │ reads instructions from
                   ▼
┌─────────────────────────────────────────────┐
│  Phase Instructions (references/)           │
│                                             │
│  - tech-analyst.md         (Phase 1)        │
│  - feature-designer.md     (Phase 2)        │
│  - ui-architect.md         (Phase 3)        │
│  - api-architect.md        (Phase 4)        │
│  - fullstack-engineer.md   (Phase 5)        │
│  - integration-engineer.md (Phase 6)        │
│                                             │
│  Each file provides:                        │
│  - Technical persona to adopt               │
│  - Code generation instructions             │
│  - Templates for specs AND code            │
│  - Testing and validation approach          │
│  - Integration with other phases            │
└─────────────────────────────────────────────┘
```

## Installation

### Kiro IDE / CLI

```bash
cp -r skills/fullstack-dev/ .kiro/skills/fullstack-dev/
```

### Claude Code

```bash
cp -r skills/fullstack-dev/ .claude/skills/fullstack-dev/
```

### Other AI Assistants

```bash
cp -r skills/fullstack-dev/ .ai/skills/fullstack-dev/
```

## Path Variables

Paths adapt based on detected platform:

### Kiro

| Variable | Path |
|----------|------|
| SPECS_DIR | `.kiro/specs` |
| STEERING_DIR | `.kiro/steering` |
| SKILL_DIR | `.kiro/skills/fullstack-dev` |
| WORKFLOW_DIR | `.fullstack/workflow` |
| PROTOTYPES_DIR | `.fullstack/prototypes` |
| TEMPLATES_DIR | `{SKILL_DIR}/assets` |
| GUIDES_DIR | `{SKILL_DIR}/references/guides` |
| SHARED_DIR | `{SKILL_DIR}/references/shared` |
| PHASE_PROMPTS_DIR | `{SKILL_DIR}/references/phase-prompts` |

### Claude Code

| Variable | Path |
|----------|------|
| SPECS_DIR | `.claude/specs` |
| STEERING_DIR | `.claude/steering` |
| SKILL_DIR | `.claude/skills/fullstack-dev` |
| WORKFLOW_DIR | `.fullstack/workflow` |
| PROTOTYPES_DIR | `.fullstack/prototypes` |

## File Locations

### Spec Artifacts
```
{SPECS_DIR}/{feature}/
├── tech-context.md
├── feature-spec.md
├── ui/
│   ├── wireframes/
│   ├── component-spec.md
│   └── design-system.md
├── api/
│   ├── api-spec.md
│   └── data-model.md
├── implementation.md
└── deployment.md
```

### Generated Code & Prototypes
```
{PROTOTYPES_DIR}/{feature}/
├── ui/
│   ├── wireframes/          # HTML/CSS mockups
│   ├── components/          # React/Vue components
│   └── design-system/       # CSS/SCSS design tokens
├── api/
│   ├── schemas/             # Database schemas
│   ├── endpoints/           # API endpoint code
│   └── models/              # Data models
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
└── deployment/
    ├── docker/
    ├── ci-cd/
    └── infrastructure/
```

### Workflow Files
```
{WORKFLOW_DIR}/{feature}/
├── audit.md
└── workflow-state.json
```

## Phase Overview

### Phase 1: Tech Analysis
**Persona**: Tech Analyst  
**Focus**: Stack detection, architecture assessment  
**Output**: Tech context + environment setup scripts  
**Code**: Stack detection, dev environment setup

### Phase 2: Feature Design
**Persona**: Feature Designer  
**Focus**: Feature properties, UI/UX wireframes  
**Output**: Feature specs + UI wireframes  
**Code**: HTML/CSS mockups, basic interactions

### Phase 3: UI Architecture
**Persona**: UI Architect  
**Focus**: Component architecture, design system  
**Output**: Component specs + design system  
**Code**: Component library, design tokens, responsive layouts

### Phase 4: API Architecture
**Persona**: API Architect  
**Focus**: Backend architecture, data modeling  
**Output**: API specs + data models  
**Code**: API endpoints, database schemas, data validation

### Phase 5: Full-Stack Implementation
**Persona**: Full-Stack Engineer  
**Focus**: Complete implementation with tests  
**Output**: Implementation guide  
**Code**: Full working application with tests

### Phase 6: Integration & Deployment
**Persona**: Integration Engineer  
**Focus**: Testing, CI/CD, deployment  
**Output**: Deployment guide  
**Code**: Integration tests, deployment scripts, monitoring

## Key Differences from AIDLC

### Code-First Approach
- Every phase generates working code, not just specifications
- Prototypes are created early and iterated upon
- Focus on technical implementation over business analysis

### Feature-Driven
- Start with feature properties, not business requirements
- UI/UX design is integrated into the workflow
- Rapid iteration and prototyping

### Full-Stack Integration
- UI and backend are designed together
- API contracts are defined early
- End-to-end testing is built in

### Rapid Prototyping Mode
- Optional accelerated workflow for MVPs
- 2-hour turnaround from idea to deployed prototype
- Perfect for hackathons, proof-of-concepts

## Usage Examples

### Web Application
```
Feature: "User Dashboard with Real-time Analytics"
→ Phase 1: Detect React + Node.js stack
→ Phase 2: Design dashboard wireframes + analytics widgets
→ Phase 3: Create React components + design system
→ Phase 4: Build analytics API + real-time WebSocket endpoints
→ Phase 5: Implement full dashboard with live data
→ Phase 6: Deploy with monitoring and CI/CD
```

### Mobile App
```
Feature: "Social Media Feed with Image Sharing"
→ Phase 1: Detect React Native + Firebase stack
→ Phase 2: Design feed UI + image upload flow
→ Phase 3: Create mobile components + responsive design
→ Phase 4: Build image storage API + social features backend
→ Phase 5: Implement full mobile app with offline support
→ Phase 6: Deploy to app stores with analytics
```

### API Service
```
Feature: "Payment Processing Microservice"
→ Phase 1: Detect microservices architecture
→ Phase 2: Design payment flow + admin interface
→ Phase 3: Create admin UI components
→ Phase 4: Build payment API + webhook system
→ Phase 5: Implement service with security + validation
→ Phase 6: Deploy with monitoring + compliance checks
```

## Customization Points

### Tech Stack Templates
- Modify `assets/tech-context-template.md` for your preferred stacks
- Add custom stack detection in `references/phase-prompts/tech-analyst.md`

### UI/UX Patterns
- Customize `assets/ui-wireframe-template.md` for your design system
- Add custom UI patterns in `references/guides/ui-patterns.md`

### API Patterns
- Modify `assets/api-spec-template.md` for your API standards
- Add custom API patterns in `references/guides/api-patterns.md`

### Deployment Strategies
- Customize deployment templates for your infrastructure
- Add custom deployment guides for your platform

## License

MIT