# UI Patterns Guide

## Common UI Patterns for Full-Stack Applications

### Navigation Patterns

#### Primary Navigation
- **Header Navigation**: Horizontal navigation bar at the top
- **Sidebar Navigation**: Vertical navigation panel on the left/right
- **Tab Navigation**: Horizontal tabs for section switching
- **Breadcrumb Navigation**: Hierarchical path navigation

#### Mobile Navigation
- **Hamburger Menu**: Collapsible menu for mobile devices
- **Bottom Tab Bar**: Navigation tabs at the bottom (mobile apps)
- **Drawer Navigation**: Slide-out navigation panel

### Layout Patterns

#### Page Layouts
- **Single Column**: Simple linear layout for content
- **Two Column**: Sidebar + main content area
- **Three Column**: Sidebar + main + secondary sidebar
- **Grid Layout**: Card-based grid system
- **Dashboard Layout**: Widget-based dashboard with panels

#### Content Layouts
- **Hero Section**: Large banner with call-to-action
- **Feature Sections**: Alternating content blocks
- **Card Layouts**: Content organized in card components
- **List Layouts**: Vertical list of items with actions

### Form Patterns

#### Form Types
- **Single Step Forms**: All fields on one page
- **Multi-Step Forms**: Wizard-style forms with steps
- **Inline Editing**: Edit content directly in place
- **Modal Forms**: Forms displayed in overlay modals

#### Form Components
- **Input Groups**: Related inputs grouped together
- **Field Validation**: Real-time validation with error messages
- **Auto-Complete**: Search-as-you-type functionality
- **File Upload**: Drag-and-drop file upload areas

### Data Display Patterns

#### Tables
- **Basic Tables**: Simple data tables with sorting
- **Paginated Tables**: Large datasets with pagination
- **Filterable Tables**: Tables with search and filter options
- **Expandable Rows**: Tables with collapsible detail rows

#### Lists
- **Simple Lists**: Basic list of items
- **Card Lists**: List items displayed as cards
- **Infinite Scroll**: Continuously loading list content
- **Virtual Lists**: Performance-optimized large lists

### Interactive Patterns

#### Feedback Patterns
- **Loading States**: Spinners, skeletons, progress bars
- **Success States**: Confirmation messages and animations
- **Error States**: Error messages with recovery options
- **Empty States**: Helpful content when no data exists

#### Action Patterns
- **Primary Actions**: Main call-to-action buttons
- **Secondary Actions**: Supporting action buttons
- **Bulk Actions**: Actions that apply to multiple items
- **Contextual Actions**: Actions that appear on hover/focus

### Responsive Patterns

#### Breakpoint Strategy
```css
/* Mobile First Approach */
/* Base: 320px+ (mobile) */
.container { width: 100%; padding: 1rem; }

/* Small: 576px+ (large mobile) */
@media (min-width: 576px) {
  .container { max-width: 540px; margin: 0 auto; }
}

/* Medium: 768px+ (tablet) */
@media (min-width: 768px) {
  .container { max-width: 720px; }
  .grid { display: grid; grid-template-columns: repeat(2, 1fr); }
}

/* Large: 992px+ (desktop) */
@media (min-width: 992px) {
  .container { max-width: 960px; }
  .grid { grid-template-columns: repeat(3, 1fr); }
}

/* Extra Large: 1200px+ (large desktop) */
@media (min-width: 1200px) {
  .container { max-width: 1140px; }
  .grid { grid-template-columns: repeat(4, 1fr); }
}
```

#### Component Adaptation
- **Navigation**: Hamburger menu on mobile, full nav on desktop
- **Tables**: Horizontal scroll or card layout on mobile
- **Forms**: Stacked inputs on mobile, side-by-side on desktop
- **Grids**: Single column on mobile, multi-column on desktop

### Accessibility Patterns

#### Keyboard Navigation
- **Tab Order**: Logical tab sequence through interactive elements
- **Focus Management**: Visible focus indicators and focus trapping
- **Keyboard Shortcuts**: Common shortcuts for power users
- **Skip Links**: Navigation shortcuts for screen readers

#### Screen Reader Support
- **Semantic HTML**: Proper use of headings, landmarks, and roles
- **ARIA Labels**: Descriptive labels for complex interactions
- **Live Regions**: Dynamic content announcements
- **Alternative Text**: Descriptive alt text for images and icons

### Performance Patterns

#### Loading Optimization
- **Lazy Loading**: Load content as needed
- **Image Optimization**: Responsive images with proper formats
- **Code Splitting**: Load JavaScript bundles on demand
- **Caching**: Browser and CDN caching strategies

#### Rendering Optimization
- **Virtual Scrolling**: Efficient rendering of large lists
- **Debounced Search**: Reduce API calls during typing
- **Optimistic Updates**: Update UI before server confirmation
- **Skeleton Screens**: Show content structure while loading

## Implementation Examples

### React Component Patterns

#### Compound Components
```jsx
// Flexible component composition
<Card>
  <Card.Header>
    <Card.Title>User Profile</Card.Title>
  </Card.Header>
  <Card.Body>
    <Card.Content>User information here</Card.Content>
  </Card.Body>
  <Card.Footer>
    <Card.Actions>
      <Button>Edit</Button>
      <Button variant="secondary">Cancel</Button>
    </Card.Actions>
  </Card.Footer>
</Card>
```

#### Render Props Pattern
```jsx
// Flexible data sharing between components
<DataProvider>
  {({ data, loading, error }) => (
    <div>
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage error={error} />}
      {data && <DataDisplay data={data} />}
    </div>
  )}
</DataProvider>
```

#### Custom Hooks Pattern
```jsx
// Reusable stateful logic
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
```

### CSS Architecture Patterns

#### BEM Methodology
```css
/* Block */
.card { }

/* Element */
.card__header { }
.card__body { }
.card__footer { }

/* Modifier */
.card--featured { }
.card__header--large { }
```

#### CSS Custom Properties (Variables)
```css
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
  --border-radius: 0.375rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
}

.button {
  background-color: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
}
```

## Best Practices

### Design Consistency
- Use a consistent design system across all components
- Maintain consistent spacing, typography, and color usage
- Follow established interaction patterns within your application
- Document design decisions and component usage guidelines

### User Experience
- Provide clear feedback for all user actions
- Design for accessibility from the beginning
- Test with real users and iterate based on feedback
- Consider performance impact of design decisions

### Technical Implementation
- Keep components focused and single-purpose
- Use composition over inheritance for flexibility
- Implement proper error boundaries and fallbacks
- Write comprehensive tests for interactive components

### Maintenance
- Document component APIs and usage examples
- Use TypeScript or PropTypes for type safety
- Implement visual regression testing for UI components
- Keep dependencies up to date and minimize bundle size