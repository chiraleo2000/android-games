# Implementation Plan: Career Quest Enhancements

## Overview

This implementation plan covers five major enhancements to the Career Quest mobile application:

1. **Google Play Store Deployment Configuration** - Build pipeline, signing, ProGuard, and release automation
2. **Light/Dark Theme System** - React Context-based theming with persistent storage
3. **Enhanced Progress Saving** - Dual-storage strategy with validation and auto-save
4. **GIF Animation Integration** - Lazy-loaded, cached animation system with fallback handling
5. **Improved MBTI Testing** - 60-question bank with comprehensive results (career/personal/learning/AI guidance)

The implementation follows a modular approach, building core infrastructure first, then adding features incrementally with testing checkpoints.

## Tasks

- [x] 1. Set up core infrastructure and storage services
  - [x] 1.1 Create StorageService with dual-storage support (localStorage + Capacitor Preferences)
    - Implement get/set/remove/clear methods with retry logic
    - Add validation and error handling
    - Include exponential backoff for failed operations
    - _Requirements: 3.7, 3.8, 7.5, 7.6_

  - [x] 1.2 Write unit tests for StorageService
    - Test store and retrieve operations
    - Test retry logic on failures
    - Test serialization error handling
    - Test null handling for non-existent keys
    - _Requirements: 3.7, 3.8_

  - [x] 1.3 Create ProgressManager service
    - Implement saveProgress, loadProgress, clearProgress, hasProgress methods
    - Add progress validation logic
    - Implement staleness check (7-day expiry)
    - Add auto-save on visibility change
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.9, 3.10_

  - [x] 1.4 Write unit tests for ProgressManager
    - Test save and load progress flow
    - Test progress structure validation
    - Test stale progress detection and clearing
    - Test version compatibility checks
    - _Requirements: 3.9, 7.4_

- [x] 2. Implement theme system
  - [x] 2.1 Create ThemeContext with React Context API
    - Implement ThemeProvider component
    - Add theme state management (light/dark)
    - Implement loadTheme, setTheme, toggleTheme methods
    - Integrate with StorageService for persistence
    - Add loading state during theme initialization
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.9_

  - [x] 2.2 Update CSS with theme variables
    - Define CSS custom properties for light theme in index.css
    - Define CSS custom properties for dark theme with [data-theme="light"] selector
    - Include colors for backgrounds, text, accents, shadows
    - Ensure WCAG AA contrast ratios (4.5:1 for normal text)
    - _Requirements: 2.1, 2.5, 2.6, 2.7_

  - [x] 2.3 Create ThemeToggle component
    - Add toggle button to NavBar
    - Implement smooth transition animations
    - Add visual feedback on theme change
    - _Requirements: 2.3, 2.8_

  - [x] 2.4 Apply theme to all existing components
    - Update App.jsx to wrap with ThemeProvider
    - Update NavBar, HomeScreen, CareerSelection, GameScreen, ResultScreen
    - Update PersonalityTest and PersonalityResult screens
    - Update modal components (SettingsModal, ResumeModal)
    - _Requirements: 2.5, 2.10_

  - [ ] 2.5 Write integration tests for theme persistence
    - Test theme persists across app restarts
    - Test theme syncs between localStorage and Capacitor Preferences
    - Test theme toggle updates all UI components
    - _Requirements: 2.4, 2.9_

- [x] 3. Checkpoint - Verify storage and theme systems
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Implement GIF animation system
  - [x] 4.1 Create GIF asset structure and data files
    - Create gifAssets.js with GIF_CATEGORIES and gifAssets object
    - Define at least 5 GIFs per category (career_start, feedback_positive, feedback_negative, feedback_neutral, celebration, thinking)
    - Add fallbackImages mapping for each category
    - Organize GIF files in public/assets/gifs/ directory structure
    - _Requirements: 4.1, 4.2, 4.3, 4.9_

  - [x] 4.2 Create GIFLoader service
    - Implement load method with caching
    - Implement preload method for multiple GIFs
    - Add timeout handling (5 seconds)
    - Implement cache size limit enforcement (50 GIFs max)
    - Add findAsset, getFallback, getRandomFromCategory helper methods
    - _Requirements: 4.1, 4.4, 4.5, 4.7, 4.8_

  - [x] 4.3 Create GIFDisplay component
    - Implement lazy loading with loading spinner
    - Add error handling with fallback images
    - Implement fade-in animation on load
    - Add error badge for fallback display
    - _Requirements: 4.2, 4.3, 4.4, 4.6_

  - [x] 4.4 Integrate GIFDisplay into game screens
    - Add GIF display to CareerSelection screen (career start animations)
    - Add GIF display to GameScreen (feedback animations based on consequence)
    - Add GIF display to ResultScreen (celebration animations)
    - Implement random GIF selection from appropriate categories
    - _Requirements: 4.2, 4.3, 4.6_

  - [x] 4.5 Write unit tests for GIFLoader
    - Test GIF loading and caching
    - Test cache reuse on second load
    - Test fallback on load failure
    - Test cache size limit enforcement
    - Test cache clearing
    - _Requirements: 4.5, 4.7_

- [x] 5. Implement enhanced MBTI testing system
  - [x] 5.1 Create MBTI question bank with 60 questions
    - Create mbtiQuestionBank.js with MBTI_DIMENSIONS and LIKERT_SCALE constants
    - Add 15 questions per dimension (E/I, N/S, F/T, P/J)
    - Ensure balanced polarity for each dimension
    - Add category tags for each question
    - Implement getShuffledQuestions function to interleave dimensions
    - _Requirements: 5.1, 5.2, 5.3_

  - [x] 5.2 Create MBTI scoring engine
    - Implement calculateMBTIType function
    - Calculate dimension scores from Likert scale responses
    - Determine MBTI type from dimension scores
    - Calculate confidence percentages for each dimension
    - _Requirements: 5.4, 5.5_

  - [x] 5.3 Create comprehensive MBTI results data
    - Create mbtiResults.js with data for all 16 MBTI types
    - Include name, description, strengths, weaknesses for each type
    - Add 8+ career recommendations per type with match percentages
    - Add personal growth section (relationships, stress management, communication)
    - Add learning style section (preferences, strategies)
    - Add AI era strategies section (opportunities, skill development, adaptation tips)
    - _Requirements: 5.6, 5.7, 5.8, 5.9, 5.10_

  - [x] 5.4 Update PersonalityTest component
    - Integrate shuffled 60-question bank
    - Update progress indicator to show X/60
    - Implement Likert scale response UI (5 options)
    - Save answers to progress state
    - Calculate MBTI dimensions on completion
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

  - [x] 5.5 Update PersonalityResult component
    - Display MBTI type with confidence percentages
    - Show dimension breakdown with visual indicators
    - Display career recommendations section (8+ jobs)
    - Display personal growth section (relationships, stress, communication)
    - Display learning style section
    - Display AI era strategies section
    - Add save and share functionality
    - _Requirements: 5.5, 5.6, 5.7, 5.8, 5.9, 5.10, 5.11, 5.12_

  - [x] 5.6 Write unit tests for MBTI scoring engine
    - Test INTJ calculation with I/N/T/J preferences
    - Test ENFP calculation with E/N/F/P preferences
    - Test neutral response handling
    - Test confidence percentage calculation
    - Test percentage sums equal 100%
    - _Requirements: 5.4, 5.5_

- [x] 6. Checkpoint - Verify GIF and MBTI systems
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Configure Google Play Store deployment
  - [x] 7.1 Update Android build.gradle configuration
    - Set namespace, compileSdk (34), minSdkVersion (22), targetSdkVersion (34)
    - Configure versionCode and versionName
    - Add release signing configuration (storeFile, storePassword, keyAlias, keyPassword)
    - Enable ProGuard/R8 with minifyEnabled and shrinkResources for release
    - Configure bundle splits (language, density, abi)
    - Add multidex support
    - _Requirements: 1.1, 1.5, 1.8, 1.9, 6.5_

  - [x] 7.2 Update ProGuard rules
    - Add keep rules for Capacitor classes
    - Add keep rules for Cordova classes
    - Add keep rules for WebView and JavaScript interface
    - Preserve line numbers for debugging
    - _Requirements: 1.6_

  - [x] 7.3 Create build automation scripts
    - Add android:build:debug script to package.json
    - Add android:build:release script to package.json
    - Add android:install script for debug builds
    - Add release:prepare script with validation
    - Add release:build script for AAB generation
    - _Requirements: 6.1, 6.2, 6.3_

  - [x] 7.4 Create asset validation script
    - Create scripts/validateAssets.js
    - Check required icons exist (48, 72, 96, 128, 192, 256, 512)
    - Check splash screens exist for all densities
    - Validate file sizes (icons < 500KB, splash < 1MB, GIFs < 2MB)
    - Check manifest.json exists
    - _Requirements: 1.3, 4.8, 6.3, 6.4_

  - [x] 7.5 Create build validation script
    - Create scripts/validateBuild.js
    - Check signing configuration environment variables
    - Validate bundle size (< 150MB)
    - Check target SDK version (>= 34)
    - Provide clear error messages with remediation steps
    - _Requirements: 1.5, 1.8, 6.4, 6.7, 6.8, 8.10_

  - [x] 7.6 Update AndroidManifest.xml
    - Declare all required permissions with justifications
    - Set application label and icon
    - Configure splash screen
    - Set target API level
    - _Requirements: 1.7, 1.8_

  - [x] 7.7 Create deployment documentation
    - Document complete build and deployment process
    - Include signing key generation instructions
    - Document environment variable setup
    - Add troubleshooting guide
    - _Requirements: 6.6_

- [x] 8. Integrate progress saving with game flow
  - [x] 8.1 Add auto-save to game state changes
    - Save progress after each question answer in GameScreen
    - Save progress when entering PersonalityTest
    - Save progress after each personality test answer
    - Implement visibility change listener for background saves
    - _Requirements: 3.1, 3.2_

  - [x] 8.2 Implement resume functionality
    - Create ResumeModal component
    - Check for saved progress on app launch
    - Display resume modal if progress exists
    - Implement resume action to restore game state
    - Implement discard action to clear progress and start fresh
    - _Requirements: 3.4, 3.10_

  - [x] 8.3 Clear progress on session completion
    - Clear progress when career simulation completes
    - Clear progress when personality test completes
    - Clear progress when user explicitly starts new session
    - _Requirements: 3.10_

  - [x] 8.4 Write integration tests for progress persistence
    - Test save progress during gameplay and restore on resume
    - Test personality test progress save and restore
    - Test progress clearing on completion
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.10_

- [x] 9. Implement data persistence and migration
  - [x] 9.1 Create data export functionality
    - Add export button to settings
    - Implement JSON export of user data (preferences, results, progress)
    - Generate downloadable file with timestamp
    - _Requirements: 7.7_

  - [x] 9.2 Create data import functionality
    - Add import button to settings
    - Implement file picker for JSON import
    - Validate imported data structure
    - Restore user data from backup
    - _Requirements: 7.8_

  - [x] 9.3 Implement data schema versioning
    - Add version field to all stored data
    - Create migration functions for schema updates
    - Implement automatic migration on data load
    - _Requirements: 7.4, 7.9_

  - [x] 9.4 Write unit tests for data migration
    - Test migration from old schema to new schema
    - Test version compatibility checks
    - Test data integrity after migration
    - _Requirements: 7.4, 7.9_

- [x] 10. Performance optimization
  - [x] 10.1 Implement code splitting for career modules
    - Use React.lazy for career data imports
    - Add Suspense boundaries with loading states
    - Split MBTI question bank into separate chunk
    - _Requirements: 8.4, 8.6_

  - [x] 10.2 Optimize images and assets
    - Compress all PNG/WEBP images
    - Ensure GIFs are under 2MB each
    - Implement lazy loading for images
    - Add loading="lazy" attribute to img tags
    - _Requirements: 4.8, 8.5_

  - [x] 10.3 Add performance monitoring
    - Create performanceTest.js script
    - Measure storage write performance (100 writes)
    - Measure MBTI calculation time
    - Measure GIF preload time
    - Log performance metrics to console
    - _Requirements: 8.1, 8.2, 8.3, 8.8, 8.9_

- [x] 11. Error handling and logging
  - [x] 11.1 Create ErrorLogger utility
    - Implement error logging with context
    - Store last 100 errors in memory
    - Add global error handlers (window.error, unhandledrejection)
    - Implement error export functionality
    - _Requirements: 7.5, 7.6_

  - [x] 11.2 Add error boundaries to React components
    - Create ErrorBoundary component
    - Wrap main app sections with error boundaries
    - Display user-friendly error messages
    - Log errors to ErrorLogger
    - _Requirements: 7.6_

  - [x] 11.3 Implement error recovery strategies
    - Add retry logic for storage operations
    - Implement fallback for asset loading failures
    - Add data corruption recovery
    - Implement graceful degradation for missing features
    - _Requirements: 3.7, 4.4, 7.6_

- [x] 12. Final integration and testing
  - [x] 12.1 Update App.jsx with all providers
    - Wrap app with ThemeProvider
    - Add StorageProvider context (if needed)
    - Add AssetProvider context (if needed)
    - Ensure proper provider nesting order
    - _Requirements: 2.4, 3.8, 4.1_

  - [x] 12.2 Test complete user flows
    - Test career simulation with theme toggle and progress save
    - Test personality test with all 60 questions and comprehensive results
    - Test resume functionality after app restart
    - Test GIF animations in all contexts
    - Test data export and import
    - _Requirements: All_

  - [x] 12.3 Run full test suite
    - Execute all unit tests
    - Execute all integration tests
    - Verify test coverage
    - Fix any failing tests
    - _Requirements: All_

  - [x] 12.4 Build and test release APK/AAB
    - Run npm run release:build
    - Verify AAB file is generated
    - Check bundle size is under 150MB
    - Install release build on physical Android device
    - Test all features in release build
    - Verify ProGuard doesn't break functionality
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.9, 1.10, 8.10_

- [x] 13. Final checkpoint - Production readiness verification
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional testing tasks and can be skipped for faster MVP delivery
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation and provide opportunities for user feedback
- The implementation follows a bottom-up approach: infrastructure → features → integration → deployment
- All code should be written in JavaScript/JSX (React) as specified in the design document
- Testing focuses on unit tests and integration tests; manual testing checklist is in the design document
- Property-based testing is NOT required for this feature (infrastructure and UI enhancements)
