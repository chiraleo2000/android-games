# Full-Stack Dev Workflow Rules

## Presentation Format

### Phase Completion Format

```markdown
## ✅ Phase {N}: {Phase Name} Complete

### 📋 Summary
{Brief summary of what was accomplished}

### 📊 Metrics
- **{Metric 1}**: {Value}
- **{Metric 2}**: {Value}
- **{Metric 3}**: {Value}

### 📁 Generated Files
- `{file1}` — {description}
- `{file2}` — {description}

### 💻 Generated Code
- `{code1}` — {description}
- `{code2}` — {description}

### 🔗 Quick Links
- [View Specs]({specs_path})
- [View Prototypes]({prototypes_path})
- [Test Interactive Demo]({demo_path})

### 🎯 Next Steps
{What happens in the next phase}

---

🔲 **Your turn**: Review the {artifacts} above. Say "approved" to continue to Phase {N+1}, or let me know what changes you'd like.
```

### Code Presentation Format

When showing generated code, always include:

```markdown
### 💻 Generated Code: {Component/File Name}

**File**: `{file_path}`

```{language}
{code_content}
```

**Features**:
- {feature1}
- {feature2}
- {feature3}

**Usage**:
```{language}
{usage_example}
```
```

### Visual Mockup Presentation

When showing UI designs:

```markdown
### 🎨 UI Design: {Screen/Component Name}

**Wireframe**: `{wireframe_path}`

**Key Elements**:
- {element1} — {description}
- {element2} — {description}

**Interactions**:
- {interaction1} — {behavior}
- {interaction2} — {behavior}

**Responsive Behavior**:
- **Mobile**: {mobile_behavior}
- **Tablet**: {tablet_behavior}
- **Desktop**: {desktop_behavior}

[🔗 View Interactive Demo]({demo_link})
```

## Phase-Specific Rules

### Phase 1: Tech Analysis
- Show detected technology stack in a table
- Include setup commands that can be copy-pasted
- Provide architecture diagram if complex
- List all generated setup scripts

### Phase 2: Feature Design
- Show wireframes visually (describe layout)
- Include user flow diagrams
- Provide interactive mockup links
- List all UI components needed

### Phase 3: UI Architecture
- Show component hierarchy
- Include design system tokens
- Provide component code examples
- Show responsive behavior examples

### Phase 4: API Architecture
- Show API endpoint documentation
- Include data model diagrams
- Provide example requests/responses
- Show database schema

### Phase 5: Full-Stack Implementation
- Show working code examples
- Include test results
- Provide deployment instructions
- Show feature demo

### Phase 6: Integration & Deployment
- Show deployment status
- Include monitoring setup
- Provide CI/CD pipeline status
- Show live application links

## Code Quality Standards

### File Organization
```
{PROTOTYPES_DIR}/{feature}/
├── ui/
│   ├── wireframes/          # Static HTML wireframes
│   ├── components/          # Interactive components
│   ├── styles/              # CSS/SCSS files
│   └── assets/              # Images, icons, fonts
├── api/
│   ├── endpoints/           # API route handlers
│   ├── models/              # Data models
│   ├── schemas/             # Validation schemas
│   └── tests/               # API tests
├── database/
│   ├── migrations/          # Database migrations
│   ├── seeds/               # Test data
│   └── schemas/             # Database schemas
├── tests/
│   ├── unit/                # Unit tests
│   ├── integration/         # Integration tests
│   └── e2e/                 # End-to-end tests
└── deployment/
    ├── docker/              # Docker configurations
    ├── ci-cd/               # CI/CD pipelines
    └── infrastructure/      # Infrastructure as code
```

### Code Comments
- Include header comments in all generated files
- Explain complex logic and algorithms
- Document API endpoints and parameters
- Include usage examples in comments

### Testing Requirements
- Generate unit tests for all functions
- Create integration tests for API endpoints
- Include E2E tests for user flows
- Provide test data and fixtures

## Error Handling

### Phase Failures
```markdown
## ❌ Phase {N} Error

### 🚨 Issue
{Description of what went wrong}

### 🔍 Diagnosis
{Analysis of the problem}

### 🛠️ Resolution Options
1. **Retry**: {retry_description}
2. **Modify**: {modification_description}
3. **Rollback**: {rollback_description}

### 📋 Next Steps
{What the user should do}
```

### Code Generation Failures
```markdown
## ⚠️ Code Generation Issue

### 📁 Affected Files
- `{file1}` — {issue1}
- `{file2}` — {issue2}

### 🔧 Fixes Applied
- {fix1}
- {fix2}

### ✅ Verification
- {verification1}
- {verification2}
```

## User Interaction Rules

### Approval Signals
Accept these as approval to continue:
- "approved", "looks good", "proceed", "continue"
- "yes", "ok", "good", "next"
- "implement this", "build it", "let's go"

### Change Requests
Handle these as requests for modifications:
- "change {specific_thing}"
- "modify {component}"
- "use {different_approach}"
- "add {new_feature}"

### Clarification Requests
Ask for clarification when:
- User request is ambiguous
- Multiple implementation approaches are possible
- Technical constraints conflict with requirements
- Dependencies are unclear

## Metrics Tracking

### Phase 1 Metrics
- **Stack Complexity**: Simple/Medium/Complex
- **Setup Time**: Estimated minutes to get running
- **Integration Points**: Number of external services
- **Technical Debt**: Low/Medium/High

### Phase 2 Metrics
- **Screens Count**: Number of UI screens/views
- **Components Needed**: Number of reusable components
- **Interaction Complexity**: Simple/Medium/Complex
- **Responsive Breakpoints**: Number of breakpoints

### Phase 3 Metrics
- **Components Generated**: Number of UI components
- **Design Tokens**: Number of design system tokens
- **CSS Lines**: Lines of CSS generated
- **Accessibility Score**: WCAG compliance level

### Phase 4 Metrics
- **API Endpoints**: Number of endpoints created
- **Data Models**: Number of database models
- **Schema Complexity**: Simple/Medium/Complex
- **Security Features**: Number of security measures

### Phase 5 Metrics
- **Code Files**: Number of implementation files
- **Test Coverage**: Percentage of code covered
- **Performance Score**: Lighthouse/similar score
- **Feature Completeness**: Percentage of requirements met

### Phase 6 Metrics
- **Deployment Time**: Minutes to deploy
- **Test Pass Rate**: Percentage of tests passing
- **Monitoring Coverage**: Number of metrics tracked
- **Documentation Coverage**: Percentage documented

## Silent Operations

NEVER mention to the user:
- Workflow state updates
- Audit trail updates
- Template file reads
- Internal file operations
- Error recovery attempts (unless they fail)

## Success Criteria

Each phase is considered complete when:
- All required artifacts are generated
- All code compiles and runs without errors
- All tests pass
- User approves the output
- Metrics meet minimum thresholds
- Next phase prerequisites are satisfied