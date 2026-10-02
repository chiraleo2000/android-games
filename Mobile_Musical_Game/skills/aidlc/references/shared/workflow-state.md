# Workflow State Management

## Resume Detection

Execute at start of every spec session:

1. Check if `{WORKFLOW_DIR}` and `{SPECS_DIR}` exist. Neither → fresh start.
2. Scan `{WORKFLOW_DIR}` for `workflow-state.json` files.
3. 1 found → validate (Step 4). Multiple → ask user. 0 → fallback scan (Step 5).
4. **Validate**: Check referenced files exist, verify completed phases have artifacts. Incremental: show all units.
5. **Fallback** (no state file but dirs exist): Detect from artifacts:
   - context.md → Context done
   - decisions-requirements.md filled → D1 done
   - personas.md → Personas done
   - requirements.md → Requirements done
   - decisions-units.md filled → D2 done
   - units.md → Units done
   - foundation.md → Foundation done. Next: select-unit
   - units.md but no foundation and no decisions-design → ask-design-approach
   - decisions-design.md filled → D3 done
   - design.md → Design done
   - decisions-tasks.md filled → D4 done
   - tasks.md → Tasks done
   - tasks.md has `[x]` → Implementation in progress
   - Check for `{SPECS_DIR}/{feature}-{unit}/` folders to detect incremental mode
6. Present resume prompt in user's language.

## State File Schema

Location: `{WORKFLOW_DIR}/{feature}/workflow-state.json`

```json
{
  "feature": "name",
  "language": "en",
  "platform": "claude-code",
  "type": "main",
  "currentPhase": "design",
  "completedPhases": ["context", "d1", "requirements"],
  "nextAction": "design-decisions",
  "mode": null,
  "implementationMode": null,
  "units": [{"name": "unit", "status": "not-started"}],
  "implementation": { "totalTasks": 0, "completedTasks": 0, "currentTask": null, "currentWave": null },
  "lastUpdated": "ISO-timestamp"
}
```

Unit state at `{WORKFLOW_DIR}/{feature}-{unit}/workflow-state.json`:
```json
{
  "feature": "name", "language": "en", "platform": "claude-code", "unit": "unit-name",
  "type": "unit", "parentFeature": "name",
  "currentPhase": "design", "completedPhases": ["d3"],
  "nextAction": "generate-tasks-decisions", "lastUpdated": "ISO"
}
```

**Platform values:** `"kiro-ide"`, `"kiro-cli"`, `"claude-code"`, `"cursor"`, `"windsurf"`, `"generic"`

`mode` is null until user chooses incremental/comprehensive after units. `implementationMode` is null until user chooses standard/parallel after tasks. `foundation` in completedPhases when foundation.md is generated or skipped (comprehensive mode).

## Context Recovery Strategy

**Kiro:** Relies on `inclusion: always` YAML front-matter in steering files for automatic re-injection after context compaction

**Claude Code:** Relies on `CLAUDE.md` at project root + `workflow-state.json` + Claude Code's memory system

**Other platforms:** Manual resume via `workflow-state.json`

After context compaction/overflow:
1. Detect platform from workflow-state.json
2. For Claude Code: Update `CLAUDE.md` with current phase/state after each phase completion
3. For Kiro: Steering files auto-inject (no action needed)
4. Always update workflow-state.json with nextAction

## Next Action Map

| nextAction | Do |
|---|---|
| requirements-decisions | Generate D1 |
| validate-d1-decisions | Validate D1 |
| generate-requirements | Generate requirements.md |
| routing-decision | Analyze complexity → Phase 3 or 4 |
| units-decisions | Generate D2 |
| validate-d2-decisions | Validate D2 |
| generate-units | Generate units.md |
| ask-design-approach | Ask incremental/comprehensive |
| foundation-decisions | Generate DF Foundation Decisions |
| validate-df-decisions | Validate DF answers |
| generate-foundation | Generate foundation.md |
| select-unit | Present units for selection (infra units first) |
| design-decisions | Generate D3 |
| validate-d3-decisions | Validate D3 |
| generate-design | Generate design.md + design/* |
| tasks-decisions | Generate D4 |
| validate-d4-decisions | Validate D4 |
| generate-tasks | Generate tasks.md |
| complete | Offer implementation mode (standard/parallel) |
| implementing-wave-{N} | Resume wave N in parallel mode |
| implementing-task-{N} | Resume task N in standard mode |
| implementation-complete | All done |
