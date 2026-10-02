# AI-DLC Skill

## Architecture

```
┌─────────────────────────────────────────────┐
│         SKILL.md                            │
│         YOU are the orchestrator            │
│                                             │
│  Your Responsibilities:                     │
│  - Workflow state management                │
│  - Resume detection                         │
│  - Phase sequencing & routing               │
│  - Direct phase execution (persona switch)  │
│  - Audit trail updates                      │
│  - User communication & approval            │
│                                             │
│  Phase Execution:                           │
│  - Read phase instructions from references  │
│  - Adopt specialist persona                 │
│  - Execute phase logic directly             │
│  - Generate spec artifacts directly         │
│  - Parallel task execution via sub-agents   │
└──────────────────┬──────────────────────────┘
                   │ reads instructions from
                   ▼
┌─────────────────────────────────────────────┐
│  Phase Instructions (references/)           │
│                                             │
│  - business-analyst.md     (Phase 1)        │
│  - product-owner.md        (Phase 2)        │
│  - solution-architect.md   (Phase 3)        │
│  - software-architect.md   (Phase 4)        │
│  - tech-lead.md            (Phase 5)        │
│  - software-engineer.md    (Phase 6)        │
│  - decision-validator.md   (Validation)     │
│  - architecture-reviewer.md (Review)        │
│                                             │
│  Each file provides:                        │
│  - Persona to adopt                         │
│  - Step-by-step execution logic             │
│  - Templates to use                         │
│  - Validation checklist                     │
│  - Output format                            │
└─────────────────────────────────────────────┘
```

## Installation

The skill auto-detects your environment and adapts automatically.

### Kiro IDE / CLI

```bash
cp -r skills/aidlc/ .kiro/skills/aidlc/
```

### Claude Code

```bash
cp -r skills/aidlc/ .claude/skills/aidlc/
```

### Other AI Assistants

```bash
cp -r skills/aidlc/ .ai/skills/aidlc/
```

## Path Variables

Paths adapt based on detected platform:

### Kiro

| Variable | Path |
|----------|------|
| SPECS_DIR | `.kiro/specs` |
| STEERING_DIR | `.kiro/steering` |
| SKILL_DIR | `.kiro/skills/aidlc` |
| WORKFLOW_DIR | `.aidlc/workflow` |
| TEMPLATES_DIR | `{SKILL_DIR}/assets` |
| GUIDES_DIR | `{SKILL_DIR}/references/guides` |
| SHARED_DIR | `{SKILL_DIR}/references/shared` |
| PHASE_PROMPTS_DIR | `{SKILL_DIR}/references/phase-prompts` |

### Claude Code

| Variable | Path |
|----------|------|
| SPECS_DIR | `.claude/specs` |
| STEERING_DIR | `.claude/steering` |
| SKILL_DIR | `.claude/skills/aidlc` |
| WORKFLOW_DIR | `.aidlc/workflow` |
| TEMPLATES_DIR | `{SKILL_DIR}/assets` |
| GUIDES_DIR | `{SKILL_DIR}/references/guides` |
| SHARED_DIR | `{SKILL_DIR}/references/shared` |
| PHASE_PROMPTS_DIR | `{SKILL_DIR}/references/phase-prompts` |

**Additional:** `CLAUDE.md` at project root

### Other Platforms

| Variable | Path |
|----------|------|
| SPECS_DIR | `.ai/specs` |
| STEERING_DIR | `.ai/steering` |
| SKILL_DIR | `.ai/skills/aidlc` |
| WORKFLOW_DIR | `.aidlc/workflow` (common) |

## File Locations

### Spec Artifacts
```
{SPECS_DIR}/{feature}/
├── context.md
├── personas.md (conditional)
├── requirements.md
├── units.md (conditional)
├── foundation.md (conditional, incremental mode only)
├── design.md
├── design/
│   ├── components.md
│   ├── data-model.md
│   ├── api-spec.md
│   ├── integration.md
│   ├── implementation.md
│   ├── correctness.md (conditional)
│   └── nfr.md (conditional)
└── tasks.md
```

### Workflow Files
```
{WORKFLOW_DIR}/{feature}/
├── decisions-requirements.md (D1)
├── decisions-units.md (D2, conditional)
├── decisions-foundation.md (DF, conditional)
├── decisions-design.md (D3)
├── decisions-tasks.md (D4)
├── audit.md
└── workflow-state.json
```

### Steering Files
```
{STEERING_DIR}/
├── product.md
├── tech.md
├── structure.md
└── aidlc-workflow.md
```

### Incremental Mode (Per Unit)

Unit folders contain only unit-specific outputs. Parent artifacts are referenced from `{SPECS_DIR}/{feature}/` — not copied.

```
{SPECS_DIR}/{feature}-{unit}/
├── design.md
├── design/ (same structure as above)
└── tasks.md

{WORKFLOW_DIR}/{feature}-{unit}/
├── decisions-design.md (D3)
├── decisions-tasks.md (D4)
├── audit.md
└── workflow-state.json
```

## Credits

- [AI-DLC Methodology](https://github.com/awslabs/aidlc-workflows)
- [EARS Notation](https://www.iaria.org/conferences2015/filesICCGI15/ICCGI_2015_Tutorial_EARS.pdf)

## License

MIT
