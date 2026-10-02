# Mobile App Dev Workflow Rules

## Presentation Format

### Phase Completion Format

```markdown
## ✅ Phase {N}: {Phase Name} Complete

### 📋 Summary
{Brief summary of research findings or development progress}

### 📊 Key Metrics
- **{Research Metric 1}**: {Value} (e.g., Participants: 12, Market Size: $2.4B)
- **{Research Metric 2}**: {Value} (e.g., Pain Points: 8, Features Validated: 15)
- **{Technical Metric 1}**: {Value} (e.g., Components: 25, Test Coverage: 85%)

### 📁 Generated Research
- `{research_file1}` — {description}
- `{research_file2}` — {description}

### 📱 Generated Code/Prototypes
- `{code_file1}` — {description}
- `{prototype1}` — {description}

### 🔍 Key Insights
- **{Insight 1}**: {Description}
- **{Insight 2}**: {Description}
- **{Insight 3}**: {Description}

### 🎯 Recommendations
- **{Recommendation 1}**: {Action item}
- **{Recommendation 2}**: {Action item}

### 🔗 Quick Links
- [View Research]({research_path})
- [View Prototypes]({prototypes_path})
- [Test Interactive Demo]({demo_path})

### 🚀 Next Steps
{What happens in the next phase}

---

🔲 **Your turn**: Review the {artifacts} above. Say "approved" to continue to Phase {N+1}, or let me know what changes you'd like.
```

### Research Presentation Format

When showing research findings:

```markdown
### 📊 Research Findings: {Research Type}

**Methodology**: {research_methods}  
**Sample Size**: {participant_count}  
**Confidence Level**: {confidence_level}

#### Key Insights
1. **{Insight Title}**: {Description with supporting data}
2. **{Insight Title}**: {Description with supporting data}
3. **{Insight Title}**: {Description with supporting data}

#### Supporting Evidence
- **Quote**: "{Participant quote that illustrates key point}"
- **Data Point**: {Quantitative finding with context}
- **Behavioral Pattern**: {Observed behavior with implications}

#### Implications for Product
- **Design**: {How this affects UI/UX decisions}
- **Features**: {How this affects feature prioritization}
- **Strategy**: {How this affects go-to-market approach}
```

### Mobile Code Presentation Format

When showing mobile app code:

```markdown
### 📱 Mobile Implementation: {Component/Feature Name}

**Platform**: {iOS/Android/Cross-platform}  
**Framework**: {React Native/Flutter/Native}  
**File**: `{file_path}`

```{language}
{code_content}
```

#### Mobile-Specific Features
- **Touch Interactions**: {gesture_support}
- **Responsive Design**: {screen_size_support}
- **Performance**: {optimization_details}
- **Offline Support**: {offline_capabilities}

#### Platform Adaptations
- **iOS**: {ios_specific_features}
- **Android**: {android_specific_features}

#### Testing
```{language}
{test_code_example}
```

[🔗 View Interactive Demo]({demo_link}) | [📱 Test on Device]({device_test_link})
```

### User Persona Presentation Format

When showing user personas:

```markdown
### 👤 User Persona: {Persona Name}

**Demographics**: {age}, {location}, {occupation}  
**Tech Profile**: {device}, {tech_comfort_level}  
**Usage Context**: {when_where_how_they_use_mobile_apps}

#### Goals & Motivations
- **Primary Goal**: {main_objective}
- **Key Motivations**: {what_drives_them}

#### Pain Points
- **Current Problem**: {main_frustration}
- **Mobile-Specific Issues**: {mobile_pain_points}

#### Mobile Behavior
- **Session Length**: {typical_usage_duration}
- **Usage Context**: {when_where_they_use_apps}
- **Multitasking**: {how_they_handle_interruptions}

#### Quote
> "{Authentic quote that captures their perspective}"

#### Journey Highlights
- **Discovery**: {how_they_find_new_apps}
- **Evaluation**: {how_they_decide_to_download}
- **Adoption**: {how_they_integrate_into_routine}
```

## Phase-Specific Rules

### Phase 1: Market Research
- Show market size with visual context (charts, comparisons)
- Include competitor analysis with feature matrices
- Provide monetization model recommendations with data
- List all generated market research tools and scripts

### Phase 2: User Research
- Show user personas with behavioral patterns
- Include user journey maps with pain points highlighted
- Provide feature validation results with priorities
- Display accessibility requirements and inclusive design needs

### Phase 3: Product Design
- Show app concept with feature prioritization
- Include interactive wireframes and user flows
- Provide technical feasibility assessment
- Display business model integration points

### Phase 4: Mobile Architecture
- Show platform strategy with technical rationale
- Include tech stack decisions with performance implications
- Provide setup scripts and boilerplate code
- Display architecture diagrams and component relationships

### Phase 5: UI/UX Design
- Show design system with mobile-specific components
- Include interactive prototypes for multiple screen sizes
- Provide accessibility compliance checklist
- Display platform-specific design adaptations

### Phase 6: Mobile Development
- Show working mobile app with feature demonstrations
- Include test results and performance metrics
- Provide deployment-ready code and assets
- Display cross-platform compatibility status

### Phase 7: DevOps & Deployment
- Show CI/CD pipeline status and deployment metrics
- Include app store assets and submission readiness
- Provide monitoring and analytics setup
- Display beta testing results and user feedback

## Mobile-Specific Presentation Elements

### Platform Compatibility Matrix
```markdown
| Feature | iOS | Android | Cross-Platform |
|---------|-----|---------|----------------|
| {Feature 1} | ✅ Native | ✅ Native | ✅ Shared |
| {Feature 2} | ✅ Native | ⚠️ Limited | ✅ Shared |
| {Feature 3} | ❌ Not Available | ✅ Native | ⚠️ iOS Limited |
```

### Performance Metrics Display
```markdown
#### Performance Benchmarks
- **App Launch Time**: {launch_time}ms (Target: <2000ms)
- **Screen Transition**: {transition_time}ms (Target: <300ms)
- **Memory Usage**: {memory_usage}MB (Target: <100MB)
- **Battery Impact**: {battery_score}/100 (Target: >80)
- **Bundle Size**: {bundle_size}MB (Target: <50MB)
```

### App Store Readiness Checklist
```markdown
#### App Store Submission Status
- ✅ **Metadata**: App name, description, keywords optimized
- ✅ **Assets**: Icons, screenshots, preview videos ready
- ✅ **Compliance**: Privacy policy, age rating, content guidelines
- ⏳ **Testing**: Beta testing in progress (TestFlight/Play Console)
- ❌ **Review**: Pending app store review submission
```

## Research Quality Standards

### Market Research Validation
- Multiple data sources cited and cross-referenced
- Market size calculations with methodology explained
- Competitor analysis with feature comparison matrices
- Monetization model validation with industry benchmarks

### User Research Validation
- Diverse participant representation documented
- Multiple research methods employed and triangulated
- Mobile-specific behaviors and contexts captured
- Accessibility requirements identified and documented

### Technical Validation
- Platform-specific considerations addressed
- Performance benchmarks established and measured
- Security and privacy requirements implemented
- App store guidelines compliance verified

## Error Handling Presentation

### Research Phase Issues
```markdown
## ⚠️ Research Limitation Identified

### 🔍 Issue
{Description of research limitation or bias}

### 📊 Impact Assessment
- **Confidence Level**: Reduced from {original}% to {adjusted}%
- **Affected Insights**: {list_of_affected_findings}
- **Mitigation Strategy**: {how_to_address_limitation}

### 🎯 Recommendations
1. **Additional Research**: {specific_research_needed}
2. **Validation Approach**: {how_to_validate_findings}
3. **Risk Mitigation**: {how_to_proceed_despite_limitations}
```

### Technical Implementation Issues
```markdown
## 🚨 Technical Challenge Identified

### ⚙️ Issue
{Description of technical limitation or platform constraint}

### 📱 Platform Impact
- **iOS**: {ios_specific_impact}
- **Android**: {android_specific_impact}
- **Cross-Platform**: {shared_impact}

### 🛠️ Solution Options
1. **Native Approach**: {native_solution_description}
2. **Cross-Platform Workaround**: {workaround_description}
3. **Feature Modification**: {alternative_approach}

### 💡 Recommendation
{Recommended approach with rationale}
```

## User Interaction Guidelines

### Research Phase Approvals
Accept these as approval to continue:
- "research looks good", "findings approved", "proceed with design"
- "personas are accurate", "insights are valuable", "continue to next phase"

### Research Iteration Requests
Handle these as requests for additional research:
- "need more participants", "research different segment", "validate with surveys"
- "interview more users", "test different markets", "expand competitive analysis"

### Technical Phase Approvals
Accept these as approval to continue:
- "architecture approved", "tech stack looks good", "proceed with development"
- "design system approved", "prototypes work well", "ready for implementation"

### Technical Iteration Requests
Handle these as requests for modifications:
- "change platform strategy", "use different framework", "modify design system"
- "add accessibility features", "improve performance", "enhance security"

## Metrics Tracking

### Research Phase Metrics
- **Market Research**: Market Size, Competitor Count, Opportunity Score, Revenue Potential
- **User Research**: Participants, Pain Points, Feature Validation Score, Accessibility Coverage

### Technical Phase Metrics
- **Architecture**: Platform Coverage, Performance Score, Security Rating, Scalability Index
- **Design**: Component Count, Accessibility Score, Platform Consistency, User Testing Score
- **Development**: Feature Completeness, Test Coverage, Performance Benchmarks, Code Quality
- **Deployment**: App Store Readiness, CI/CD Health, Monitoring Coverage, User Feedback Score

## Silent Operations

NEVER mention to the user:
- Workflow state updates and audit trail maintenance
- Template file reads and internal file operations
- Research tool generation and data processing scripts
- Error recovery attempts (unless they fail completely)
- Internal validation checks and quality assurance steps

## Success Criteria

Each phase is considered complete when:
- All required research or technical artifacts are generated
- Quality standards are met (research validity, code quality, etc.)
- Mobile-specific requirements are addressed
- User approves the output and insights/implementation
- Metrics meet minimum thresholds for the phase
- Next phase prerequisites are satisfied and documented