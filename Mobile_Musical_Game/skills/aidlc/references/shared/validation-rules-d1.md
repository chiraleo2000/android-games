# D1 Validation Rules (Requirements Decisions)

### Rule: Scope vs Timeline Mismatch

**Trigger**: When scope is large AND timeline is short

**Conflict Type**: Planning | **Severity**: Medium

**Detection Logic**:
- Feature scope = "Full product" OR "Enterprise"
- Timeline = "< 3 months" OR "Urgent"
- Story count > 15

**Clarifying Questions**:
1. Is this timeline realistic given the scope?
2. Can we prioritize features for phased delivery?

**Resolution Options**:
1. Reduce scope to MVP for initial release
2. Extend timeline to match scope
3. Increase team size (if feasible)
4. Keep current plan (requires justification)

---

### Rule: Complex Features Without Personas

**Trigger**: When multiple user types exist but personas not generated

**Conflict Type**: Requirements Quality | **Severity**: Low

**Detection Logic**:
- User types count >= 3
- Personas generation = "No"
- Requirements include varied user workflows

**Clarifying Questions**:
1. Do different user types have significantly different needs?
2. Would personas help clarify requirements?

**Resolution Options**:
1. Generate personas to clarify user needs
2. Skip personas (requirements are clear enough)
