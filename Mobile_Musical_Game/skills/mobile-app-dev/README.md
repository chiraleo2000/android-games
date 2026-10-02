# Mobile App Dev Skill

## Architecture

```
┌─────────────────────────────────────────────┐
│         SKILL.md                            │
│         YOU are the Mobile Product Manager  │
│                                             │
│  Your Responsibilities:                     │
│  - Research-to-code workflow management     │
│  - Market and user research coordination    │
│  - Mobile-specific technical decisions      │
│  - App store deployment preparation         │
│  - Business model integration               │
│                                             │
│  Phase Execution:                           │
│  - Research phases generate insights + data │
│  - Design phases create specs + prototypes  │
│  - Development phases build working apps    │
│  - Deployment phases prepare store releases │
└──────────────────┬──────────────────────────┘
                   │ reads instructions from
                   ▼
┌─────────────────────────────────────────────┐
│  Phase Instructions (references/)           │
│                                             │
│  - market-researcher.md    (Phase 1)        │
│  - user-researcher.md      (Phase 2)        │
│  - product-designer.md     (Phase 3)        │
│  - mobile-architect.md     (Phase 4)        │
│  - ui-ux-designer.md       (Phase 5)        │
│  - mobile-developer.md     (Phase 6)        │
│  - devops-engineer.md      (Phase 7)        │
│                                             │
│  Each file provides:                        │
│  - Research or technical persona            │
│  - Data collection + code generation        │
│  - Mobile-specific best practices           │
│  - Integration with business objectives     │
└─────────────────────────────────────────────┘
```

## Installation

### Kiro IDE / CLI

```bash
cp -r skills/mobile-app-dev/ .kiro/skills/mobile-app-dev/
```

### Claude Code

```bash
cp -r skills/mobile-app-dev/ .claude/skills/mobile-app-dev/
```

### Other AI Assistants

```bash
cp -r skills/mobile-app-dev/ .ai/skills/mobile-app-dev/
```

## Path Variables

Paths adapt based on detected platform:

### Kiro

| Variable | Path |
|----------|------|
| SPECS_DIR | `.kiro/specs` |
| STEERING_DIR | `.kiro/steering` |
| SKILL_DIR | `.kiro/skills/mobile-app-dev` |
| WORKFLOW_DIR | `.mobile-app/workflow` |
| RESEARCH_DIR | `.mobile-app/research` |
| PROTOTYPES_DIR | `.mobile-app/prototypes` |
| TEMPLATES_DIR | `{SKILL_DIR}/assets` |
| GUIDES_DIR | `{SKILL_DIR}/references/guides` |
| SHARED_DIR | `{SKILL_DIR}/references/shared` |
| PHASE_PROMPTS_DIR | `{SKILL_DIR}/references/phase-prompts` |

### Claude Code

| Variable | Path |
|----------|------|
| SPECS_DIR | `.claude/specs` |
| STEERING_DIR | `.claude/steering` |
| SKILL_DIR | `.claude/skills/mobile-app-dev` |
| WORKFLOW_DIR | `.mobile-app/workflow` |
| RESEARCH_DIR | `.mobile-app/research` |
| PROTOTYPES_DIR | `.mobile-app/prototypes` |

## File Locations

### Research Artifacts
```
{RESEARCH_DIR}/{app}/
├── market-analysis.md
├── competitive-analysis.md
├── user-research.md
├── personas.md
├── market-data/
│   ├── competitor-features.json
│   ├── pricing-analysis.json
│   └── market-trends.json
└── user-data/
    ├── interview-transcripts/
    ├── survey-results.json
    └── user-journey-maps/
```

### Spec Artifacts
```
{SPECS_DIR}/{app}/
├── app-concept.md
├── tech-stack.md
├── platform-strategy.md
├── design-system.md
├── features/
│   ├── feature-1-spec.md
│   ├── feature-2-spec.md
│   └── ...
├── ui/
│   ├── wireframes/
│   ├── mockups/
│   └── design-tokens/
├── implementation.md
└── deployment.md
```

### Generated Code & Prototypes
```
{PROTOTYPES_DIR}/{app}/
├── research-tools/
│   ├── market-scraper.js
│   ├── competitor-analyzer.py
│   └── survey-generator.html
├── wireframes/
│   ├── interactive-prototype/
│   └── static-mockups/
├── mobile-app/
│   ├── src/
│   │   ├── components/
│   │   ├── screens/
│   │   ├── navigation/
│   │   └── services/
│   ├── assets/
│   ├── tests/
│   └── platform-specific/
│       ├── ios/
│       └── android/
├── backend/
│   ├── api/
│   ├── database/
│   └── cloud-functions/
└── deployment/
    ├── ci-cd/
    ├── app-store-assets/
    └── beta-testing/
```

### Workflow Files
```
{WORKFLOW_DIR}/{app}/
├── audit.md
└── workflow-state.json
```

## Phase Overview

### Phase 1: Market Research
**Persona**: Market Researcher  
**Focus**: Market analysis, competition, opportunities  
**Output**: Market analysis + competitive analysis + data collection scripts  
**Research**: App store analysis, market sizing, competitor feature mapping  
**Code**: Market data scrapers, competitor analysis tools

### Phase 2: User Research
**Persona**: User Researcher  
**Focus**: User needs, behaviors, personas  
**Output**: User research + personas + user journey maps  
**Research**: User interviews, surveys, behavioral analysis  
**Code**: Survey tools, interview guides, user journey prototypes

### Phase 3: Product Design
**Persona**: Product Designer  
**Focus**: App concept, feature prioritization  
**Output**: App concept + feature specifications + wireframes  
**Research**: Feature validation, user story mapping  
**Code**: Interactive wireframes, user flow prototypes

### Phase 4: Mobile Architecture
**Persona**: Mobile Architect  
**Focus**: Platform strategy, tech stack selection  
**Output**: Tech stack + platform strategy + architecture docs  
**Research**: Technology evaluation, performance benchmarking  
**Code**: Project boilerplate, setup scripts, architecture templates

### Phase 5: UI/UX Design
**Persona**: UI/UX Designer  
**Focus**: Design system, interactive prototypes  
**Output**: Design system + high-fidelity prototypes  
**Research**: Design pattern analysis, accessibility guidelines  
**Code**: Design system components, interactive prototypes

### Phase 6: Mobile Development
**Persona**: Mobile Developer  
**Focus**: Full app implementation with tests  
**Output**: Complete mobile application  
**Research**: Development best practices, performance optimization  
**Code**: Full mobile app with features, tests, and documentation

### Phase 7: DevOps & Deployment
**Persona**: DevOps Engineer  
**Focus**: CI/CD, app store deployment  
**Output**: Deployment pipeline + app store packages  
**Research**: App store guidelines, deployment strategies  
**Code**: CI/CD pipelines, app store assets, monitoring setup

## Key Differences from Other Skills

### vs AIDLC (Business-Focused)
- **Similarities**: Market research, user analysis, business validation
- **Differences**: Mobile-specific research, faster iteration, code generation throughout

### vs Full-Stack Dev (Code-Focused)
- **Similarities**: Technical implementation, working prototypes, deployment
- **Differences**: Market research first, mobile-specific patterns, app store focus

### Unique Mobile Focus
- **Platform Strategy**: iOS vs Android vs Cross-platform decisions
- **Mobile UX**: Touch interactions, mobile-first design, performance constraints
- **App Store Optimization**: ASO, review guidelines, beta testing
- **Device Integration**: Camera, GPS, push notifications, offline functionality
- **Business Models**: Freemium, in-app purchases, subscription models

## Usage Examples

### Consumer Mobile App
```
App: "Fitness Tracking with Social Features"
→ Phase 1: Analyze fitness app market, identify gaps in social features
→ Phase 2: Interview fitness enthusiasts, create user personas
→ Phase 3: Design social fitness features, prioritize MVP
→ Phase 4: Choose React Native + Firebase for cross-platform
→ Phase 5: Create fitness-focused design system + prototypes
→ Phase 6: Build app with workout tracking + social features
→ Phase 7: Deploy to both app stores with ASO optimization
```

### Enterprise Mobile App
```
App: "Field Service Management for Technicians"
→ Phase 1: Research enterprise mobility market, B2B competitors
→ Phase 2: Interview field technicians, understand workflow pain points
→ Phase 3: Design offline-first workflow management features
→ Phase 4: Choose native development for performance + security
→ Phase 5: Create enterprise-grade UI with accessibility focus
→ Phase 6: Build app with offline sync + enterprise integrations
→ Phase 7: Deploy through enterprise app stores + MDM systems
```

### E-commerce Mobile App
```
App: "Local Marketplace with AR Product Preview"
→ Phase 1: Analyze local commerce + AR adoption trends
→ Phase 2: Research shopping behaviors, AR usage patterns
→ Phase 3: Design AR-enhanced shopping experience
→ Phase 4: Choose native iOS/Android for AR capabilities
→ Phase 5: Create commerce-focused design with AR integration
→ Phase 6: Build marketplace with AR preview + payments
→ Phase 7: Deploy with commerce analytics + conversion tracking
```

## Rapid Prototyping Mode

Perfect for:
- **Hackathons**: 6-hour turnaround from idea to beta
- **Startup MVPs**: Validate ideas quickly with real users
- **Proof of Concepts**: Demonstrate feasibility to stakeholders
- **Client Pitches**: Show working prototypes in meetings

**Accelerated Timeline**:
- Market scan: 30 minutes
- User personas: 30 minutes  
- Core wireframes: 45 minutes
- Tech selection: 15 minutes
- UI prototypes: 60 minutes
- MVP implementation: 3 hours
- Beta deployment: 30 minutes

## Platform Specializations

### iOS Development
- Swift/SwiftUI code generation
- iOS Human Interface Guidelines compliance
- App Store Connect integration
- TestFlight beta distribution
- iOS-specific features (Siri, Shortcuts, Widgets)

### Android Development
- Kotlin/Jetpack Compose code generation
- Material Design 3 implementation
- Google Play Console integration
- Play Store beta testing
- Android-specific features (Widgets, Intents, Services)

### Cross-Platform Development
- React Native or Flutter implementation
- Platform-specific adaptations
- Shared business logic with native UI
- Dual app store deployment
- Performance optimization for both platforms

## Business Model Integration

### Research-Driven Monetization
- Market analysis informs pricing strategy
- User research validates payment willingness
- Competitor analysis reveals monetization gaps
- A/B testing framework for revenue optimization

### Technical Implementation
- Payment gateway integration (Stripe, PayPal, Apple Pay)
- Subscription management (RevenueCat, native stores)
- Analytics and conversion tracking
- Freemium feature gating and upgrade flows

## Customization Points

### Research Methods
- Modify market research templates for your industry
- Add custom user research techniques
- Include domain-specific competitive analysis
- Customize persona templates for your target users

### Technical Stack
- Add support for additional mobile frameworks
- Customize architecture patterns for your needs
- Include enterprise-specific security requirements
- Add custom deployment strategies

### Design Systems
- Customize UI patterns for your brand
- Add accessibility requirements for your market
- Include platform-specific design guidelines
- Customize component libraries

### App Store Optimization
- Add market-specific ASO strategies
- Include localization and internationalization
- Customize review and rating strategies
- Add custom analytics and tracking

## License

MIT