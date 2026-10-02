# GIF Animation System Guide

## Overview

The GIF Animation System provides lazy-loaded, cached animations throughout the Career Quest application. It includes automatic fallback handling and performance optimization.

## Components

### 1. GIF Asset Configuration (`src/data/gifAssets.js`)

Defines all GIF assets organized by category:

- **career_start**: Career-specific start animations (5 per career group)
- **feedback_positive**: Success/positive feedback animations (5 variations)
- **feedback_negative**: Mistake/negative feedback animations (5 variations)
- **feedback_neutral**: Neutral feedback animations (5 variations)
- **celebration**: Celebration animations for results (5 variations)
- **thinking**: Loading/thinking animations (3 variations)

### 2. GIFLoader Service (`src/services/GIFLoader.js`)

Core service that handles:

- **Lazy Loading**: GIFs are only loaded when needed
- **Caching**: Up to 50 GIFs cached in memory (FIFO eviction)
- **Timeout Handling**: 5-second timeout for loading
- **Fallback Management**: Automatic fallback to static images on failure
- **Random Selection**: Helper methods to get random GIFs from categories

#### Key Methods

```javascript
// Load a single GIF
const url = await gifLoader.load('success_1');

// Preload multiple GIFs
await gifLoader.preload(['success_1', 'success_2', 'success_3']);

// Get random GIF from category
const gifId = gifLoader.getRandomFromCategory('feedback_positive');

// Get random career-specific GIF
const careerGifId = gifLoader.getRandomCareerGIF('tech');

// Clear cache
gifLoader.clearCache();

// Get cache size
const size = gifLoader.getCacheSize();
```

### 3. GIFDisplay Component (`src/components/GIFDisplay.jsx`)

React component for displaying GIFs with:

- Loading spinner during load
- Fade-in animation on successful load
- Error badge when fallback is used
- Lazy loading attribute for images

#### Usage

```jsx
import GIFDisplay from './components/GIFDisplay.jsx';

<GIFDisplay 
  gifId="success_1"
  category="feedback"
  fallback="/custom/fallback.png"
  className="my-gif"
  onLoad={() => console.log('Loaded!')}
  onError={(error) => console.error('Failed:', error)}
/>
```

## Integration Points

### GameScreen Component

Shows feedback GIFs based on answer consequences:

- Positive feedback → `feedback_positive` category
- Negative feedback → `feedback_negative` category
- Neutral feedback → `feedback_neutral` category

The system automatically detects feedback sentiment from text content.

### ResultScreen Component

Shows celebration GIFs when a career simulation completes.

### CareerSelection Component

Can show career start GIFs when a career is selected (optional enhancement).

## File Structure

```
public/
└── assets/
    ├── gifs/
    │   ├── tech/           (5 GIFs: start_1.gif to start_5.gif)
    │   ├── healthcare/     (5 GIFs: start_1.gif to start_5.gif)
    │   ├── business/       (5 GIFs: start_1.gif to start_5.gif)
    │   ├── creative/       (5 GIFs: start_1.gif to start_5.gif)
    │   ├── education/      (5 GIFs: start_1.gif to start_5.gif)
    │   ├── feedback/       (15 GIFs: success_*, mistake_*, neutral_*)
    │   ├── celebration/    (5 GIFs: celebrate_1.gif to celebrate_5.gif)
    │   └── thinking/       (3 GIFs: thinking_1.gif to thinking_3.gif)
    └── images/
        ├── career_placeholder.png
        ├── success_placeholder.png
        ├── mistake_placeholder.png
        ├── neutral_placeholder.png
        ├── celebration_placeholder.png
        └── thinking_placeholder.png
```

## Performance Considerations

1. **Lazy Loading**: GIFs are only loaded when displayed
2. **Cache Limit**: Maximum 50 GIFs in memory to prevent memory bloat
3. **Timeout**: 5-second timeout prevents hanging on slow connections
4. **Fallback**: Static images ensure UI never breaks
5. **File Size**: GIFs should be under 2MB each

## Testing

Unit tests are located in `src/services/__tests__/GIFLoader.test.js` and cover:

- Loading and caching
- Cache reuse
- Fallback handling
- Preloading
- Cache size limits
- Random selection
- Timeout handling

Run tests with:
```bash
npm test
```

## Adding New GIFs

1. Place GIF files in appropriate directory following naming convention
2. Update `gifAssets.js` if adding new categories
3. Ensure file sizes are under 2MB
4. Test loading in the application
5. Verify fallback works if GIF is removed

## Troubleshooting

### GIF Not Loading

1. Check file path in `gifAssets.js` matches actual file location
2. Verify file size is under 2MB
3. Check browser console for errors
4. Ensure GIF file is valid (test in browser directly)

### Fallback Always Showing

1. Check network tab to see if GIF request is failing
2. Verify GIF file exists at specified path
3. Check for CORS issues if loading from external URL
4. Increase timeout if on slow connection

### Cache Issues

1. Clear cache with `gifLoader.clearCache()`
2. Check cache size with `gifLoader.getCacheSize()`
3. Verify cache limit (50) isn't being exceeded too quickly
4. Check for memory leaks in browser dev tools

## Future Enhancements

- [ ] Add GIF preloading on app start for common animations
- [ ] Implement progressive loading for large GIFs
- [ ] Add WebP animation support as fallback
- [ ] Implement service worker caching for offline support
- [ ] Add analytics for GIF load performance
- [ ] Support for animated WebP and AVIF formats
