# Workflow Rules

## 1. Language Rule

Detect from user's first message. Store as ISO 639-1 in `workflow-state.json`.

ALL chat messages, markdown files, questions, labels → user's language.

**Keep in English**: File paths, code, API paths, HTTP methods, tech names, identifiers, DB schema, config keys, Story/Task IDs, version numbers.

Detection priority: 1. Explicit user spec 2. First message language 3. Conversation context 4. State file 5. Default English.

User can switch anytime → update state, confirm in new language, offer to regenerate current phase.

## 2. Presentation Format

```
📍 [Phase Name]: [Sub-phase] ([X] of 6 phases)

[Summary]

- **[Metric 1]**: [Value]
- **[Metric 2]**: [Value]

Artifact at `[path]`.

---
🔲 **Your turn**:
- ✅ "proceed" — move to [next]
- ✏️ "change [what]" — request edits
```

Decision gate format adds: "📝 Open `[path]`, fill answers, say 'done'" and "🤖 'use recommendations'"

Phase 6 format adds: files changed, test status, progress %, testable endpoints, test commands, next task info.

### Phase Metrics Quick Reference
- P1: Project Type, Stack, Architecture, Impact, Recommendations
- P2-decisions: Decision topic count
- P2-personas: Persona count/names
- P2-requirements: Total Stories, Priority breakdown, Areas, Entities
- P3-decisions: Decision topic count
- P3-units: Unit count/names, story counts, dependencies, pattern
- P4-decisions: Decision topic count
- P4-design: Components, entities, endpoints, integrations, stack, NFR/PBT
- P5-decisions: Decision topic count
- P5-tasks: Total tasks/sub-tasks, effort, coverage
- P6: Task progress, files, tests, next task

## 3. File Paths

Use backticks: `` `{SPECS_DIR}/{feature}/context.md` ``. See `path-resolution.md` for variables.

## 4. Tool Compatibility

**Environment-aware tool usage** — adapt based on detected platform:

### File Operations
- **Kiro**: `fsWrite` (new), `fsAppend` (large files)
- **Claude Code**: `Write` (new), `Edit` (modify)
- **Other**: `Write` (new), `Edit` (modify)

### Batch Reading
- **Kiro**: `readMultipleFiles([paths])`
- **Claude Code**: Multiple `Read` in parallel
- **Other**: Multiple `Read` (sequential if needed)

### Sub-Agents
- **Kiro**: `invokeSubAgent`
- **Claude Code**: `Agent` with `subagent_type`
- **Other**: Sequential execution

### Task Tracking
- **Kiro**: `taskStatus` tool
- **Claude Code**: `TaskUpdate` or `Edit`
- **Other**: `Edit` checkboxes

Platform detection occurs at initialization and is stored in `workflow-state.json`.

## 5. Templates

ALWAYS read from `{TEMPLATES_DIR}` before generating. Do NOT guess structures.

## 6. Validation

Before presenting: ✅ Complete ✅ Consistent with decisions ✅ References previous artifacts ✅ Follows template ✅ No placeholders/TODOs ✅ In user's language.

## 7. User Approval

Defined in SKILL.md — User Approval section. Do not duplicate here.

## 8. Silent Operations

NEVER mention: audit.md updates, workflow-state.json updates, steering updates, template reads, validation steps, platform detection.

Audit trail: append after each phase/gate/approval/task. Include summary, details, impact.

## 9. Design No-Assumptions Rule

ONLY use D3 choices. Use `[TBD - not decided in D3]` for missing. CAN include: direct consequences of decided tech, industry standards (marked "recommended"), patterns from D2/D3, data models from requirements.

## 10. Phase 6 Implementation Format

### Standard Mode (per task)

```
📍 Implementation: Task {X.Y} complete ({Z}% overall)

- **Files changed**: [count]
- **Tests**: [new] new, [total] total, all passing: [yes/no]
- **Testable now**: [endpoints/features ready to test]

---
🔲 **Your turn**:
- ✅ "next" — proceed to task {next}
- ✏️ "fix [what]" — adjust before moving on
```

### Parallel Mode — Wave Plan (before execution)

```
📍 Implementation: Wave {N} of {total} ({X}% complete)

- **Tasks in this wave**: {list task IDs and titles}
- **Execution**: {Sequential (1 task) / Parallel (X sub-agents)}

---
🔲 **Your turn**:
- ✅ "go" — execute this wave
- ✏️ "change [what]" — adjust before executing
```
