# GIF Assets Directory

This directory contains GIF animations for the Career Quest application.

## Directory Structure

```
gifs/
├── tech/           - Technology career start animations (5 GIFs)
├── healthcare/     - Healthcare career start animations (5 GIFs)
├── business/       - Business career start animations (5 GIFs)
├── creative/       - Creative career start animations (5 GIFs)
├── education/      - Education career start animations (5 GIFs)
├── feedback/       - Feedback animations (15 GIFs: 5 positive, 5 negative, 5 neutral)
├── celebration/    - Celebration animations (5 GIFs)
└── thinking/       - Thinking/loading animations (3 GIFs)
```

## File Naming Convention

### Career Start GIFs
- `tech/start_1.gif` through `tech/start_5.gif`
- `healthcare/start_1.gif` through `healthcare/start_5.gif`
- `business/start_1.gif` through `business/start_5.gif`
- `creative/start_1.gif` through `creative/start_5.gif`
- `education/start_1.gif` through `education/start_5.gif`

### Feedback GIFs
- `feedback/success_1.gif` through `feedback/success_5.gif` (positive feedback)
- `feedback/mistake_1.gif` through `feedback/mistake_5.gif` (negative feedback)
- `feedback/neutral_1.gif` through `feedback/neutral_5.gif` (neutral feedback)

### Celebration GIFs
- `celebration/celebrate_1.gif` through `celebration/celebrate_5.gif`

### Thinking GIFs
- `thinking/thinking_1.gif` through `thinking/thinking_3.gif`

## Requirements

- **File Format**: GIF (animated)
- **Max File Size**: 2MB per GIF
- **Recommended Dimensions**: 300x200 to 600x400 pixels
- **Optimization**: Use tools like gifsicle or ezgif.com to optimize file sizes

## Fallback Images

If GIF files are missing or fail to load, the system will automatically use fallback images located in `/assets/images/`:

- `career_placeholder.png` - For career start animations
- `success_placeholder.png` - For positive feedback
- `mistake_placeholder.png` - For negative feedback
- `neutral_placeholder.png` - For neutral feedback
- `celebration_placeholder.png` - For celebration animations
- `thinking_placeholder.png` - For thinking/loading animations

## Adding New GIFs

1. Place your GIF files in the appropriate directory following the naming convention
2. Ensure file sizes are under 2MB
3. Test the GIF loads correctly in the app
4. The GIFLoader service will automatically cache and serve the new GIFs

## Performance Notes

- GIFs are lazy-loaded only when needed
- The system caches up to 50 GIFs in memory
- Timeout is set to 5 seconds for loading
- Failed loads automatically fall back to static images
