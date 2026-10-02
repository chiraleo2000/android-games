# Implementation Plan: Mobile Musical Instrument Game

## Overview

This implementation plan breaks down the mobile musical instrument game into discrete coding tasks. The application will be built using React Native with Expo, Three.js for 3D rendering, and react-native-audio-api for low-latency audio. The implementation follows a layered architecture approach, building from infrastructure up through domain logic to the presentation layer.

## Tasks

- [x] 1. Set up project structure and core infrastructure
  - Initialize React Native with Expo project
  - Install and configure dependencies (Three.js, expo-gl, @react-three/fiber, react-native-audio-api, expo-av)
  - Create directory structure following layered architecture (presentation, application, domain, infrastructure, data)
  - Set up TypeScript configuration with strict type checking
  - Configure asset loading paths for models, audio, and textures
  - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 2. Implement data models and type definitions
  - [x] 2.1 Create core data model interfaces and types
    - Define Instrument, InstrumentName, Model3DReference, AudioSampleSet, InteractionZone interfaces
    - Define geometry types (Vector3, Vector2, Bounds2D, Bounds3D, Point2D)
    - Define UserPreferences, ApplicationState, DeviceInfo interfaces
    - Define AssetManifest and asset management types
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 8.1, 8.2, 8.3, 9.1, 9.2, 9.3_

  - [x] 2.2 Write unit tests for data model validation
    - Test instrument data structure validation
    - Test bounds checking for interaction zones
    - Test user preferences validation
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

- [x] 3. Implement Instrument Library and data layer
  - [x] 3.1 Create InstrumentLibrary class with filtering methods
    - Implement getAllInstruments(), getByNationality(), getByPlayingMethod(), getByCategory()
    - Implement getInstrumentById() and searchInstruments()
    - Create instrument metadata for Thai traditional instruments (Ranat Ek, Mong, Klong Thad, Jakhe, Saw Duang, Pin, Khim, Khaen)
    - Create instrument metadata for international instruments (drums, xylophone, marimba, guitar, harp, ukulele, piano, accordion)
    - _Requirements: 1.1, 1.2, 1.3, 8.1, 8.2, 8.3, 8.4, 9.1, 9.2, 9.3, 9.4_

  - [x] 3.2 Write unit tests for InstrumentLibrary
    - Test filtering by nationality
    - Test filtering by playing method
    - Test search functionality
    - Test edge cases (empty results, invalid IDs)
    - _Requirements: 1.1, 1.2, 1.3_

- [x] 4. Implement Asset Loader infrastructure
  - [x] 4.1 Create AssetLoader class with caching
    - Implement preloadInstrument() with priority loading strategy
    - Implement loadModel(), loadAudio(), loadTexture() methods
    - Implement getLoadProgress() for tracking load status
    - Implement clearCache() for memory management
    - Add error handling for failed asset loads
    - _Requirements: 10.3, 15.1, 15.2, 15.3_

  - [x] 4.2 Write unit tests for AssetLoader
    - Test asset caching behavior
    - Test load progress tracking
    - Test error handling for missing assets
    - Test cache clearing
    - _Requirements: 10.3, 15.1, 15.2_

- [x] 5. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Implement Storage Service for persistence
  - [x] 6.1 Create StorageService using AsyncStorage
    - Implement savePreferences() and loadPreferences()
    - Implement saveLastInstrument() and loadLastInstrument()
    - Implement saveErrorLog() for debugging
    - Add error handling for storage failures
    - _Requirements: 14.4, 15.4_

  - [x] 6.2 Write unit tests for StorageService
    - Test preference persistence
    - Test last instrument state saving/loading
    - Test error log storage
    - Test storage failure handling
    - _Requirements: 14.4, 15.4_

- [x] 7. Implement Display Manager for screen adaptation
  - [x] 7.1 Create DisplayManager class with responsive layout
    - Implement initialize() to detect device info (screen size, diagonal, pixel density, device type)
    - Implement calculateLayout() for portrait and landscape orientations
    - Implement scaleElement() with minimum touch target size enforcement (44px)
    - Implement adaptToScreen() for orientation changes
    - Implement showVisualFeedback() for touch feedback
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 6.1, 6.2, 6.3, 6.4, 7.1, 7.2, 7.3, 7.4, 13.1_

  - [x] 7.2 Write unit tests for DisplayManager
    - Test screen size detection for phones (4-7 inches) and tablets (7-13 inches)
    - Test layout calculation for different orientations
    - Test minimum touch target size enforcement
    - Test scaling calculations
    - _Requirements: 5.1, 5.2, 5.3, 6.1, 6.2, 7.1, 7.2, 7.3, 7.4_

- [x] 8. Implement 3D Render Engine with Three.js
  - [x] 8.1 Create ThreeJSRenderEngine class
    - Implement initialize() with expo-gl context setup
    - Set up scene, camera (45° FOV, 0.1-1000 near/far planes), and WebGL renderer
    - Implement setupLighting() with ambient, directional, and fill lights
    - Implement loadModel() with GLTF/GLB loader support
    - Implement optimizeModel() for frustum culling and geometry optimization
    - Implement render() loop with delta time
    - Implement setCamera() for view control
    - Implement getPerformanceMetrics() for FPS, draw calls, triangle count
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 10.1, 10.2_

  - [x] 8.2 Implement Level of Detail (LOD) strategy
    - Create AdaptiveLODStrategy class
    - Implement updateLOD() to switch models based on FPS performance
    - Define LOD levels (low: 5000 polygons, medium: 15000, high: 50000)
    - Implement automatic quality reduction when FPS drops below 30
    - _Requirements: 10.1, 10.2, 10.4_

  - [x] 8.3 Implement gesture handling for 3D view
    - Implement handleGesture() for rotation and zoom
    - Support pinch-to-zoom gesture
    - Support pan gesture for rotation
    - Implement smooth camera transitions
    - _Requirements: 2.3_

  - [x] 8.4 Write unit tests for RenderEngine
    - Test camera setup and positioning
    - Test LOD switching logic
    - Test performance metrics calculation
    - Test gesture handling
    - _Requirements: 2.1, 2.2, 2.3, 10.1, 10.2_

- [x] 9. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 10. Implement Sound Engine with low-latency audio
  - [x] 10.1 Create LowLatencySoundEngine class
    - Implement initialize() with Web Audio API context (44.1kHz sample rate, interactive latency hint)
    - Create master gain node for volume control
    - Implement loadAudioSamples() with audio buffer decoding
    - Implement playNote() with velocity control and voice management
    - Implement voice stealing when max voices (16) reached
    - Implement stopNote() and stopAll() methods
    - Implement setVolume() with 0.0-1.0 range
    - Implement getMixerState() for active voice tracking
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 11.1, 11.2, 11.3, 11.4_

  - [x] 10.2 Implement audio pre-loading strategy
    - Create AudioPreloadStrategy class
    - Implement preloadInstrument() with priority loading (middle range notes first)
    - Implement background loading for remaining samples
    - Add progress tracking for audio loading
    - _Requirements: 3.3, 10.3_

  - [x] 10.3 Write unit tests for SoundEngine
    - Test audio context initialization
    - Test volume control
    - Test voice stealing logic
    - Test polyphonic playback
    - Test audio latency (target <100ms)
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 11.1, 11.2, 11.3, 11.4_

- [x] 11. Implement Touch Controller for instrument interaction
  - [x] 11.1 Create TouchZoneMapper class
    - Implement initialize() to set up interaction zones for instrument
    - Implement calculateScreenScale() based on device screen width (base: 375px)
    - Implement scaleZones() with minimum 44px touch target enforcement
    - Implement getZoneAtPoint() for hit detection
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 5.3_

  - [x] 11.2 Create InstrumentGestureRecognizer class
    - Implement recognizeGesture() dispatcher for strike/pluck/press types
    - Implement recognizeStrike() with velocity from touch pressure
    - Implement recognizePluck() with drag distance calculation
    - Implement recognizePress() for key press/release
    - Calculate velocity values (0.0-1.0) based on gesture characteristics
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

  - [x] 11.3 Create TouchController class integrating mapper and recognizer
    - Implement initialize() to set up zones for current instrument
    - Implement handleTouchStart(), handleTouchMove(), handleTouchEnd()
    - Integrate TouchZoneMapper for zone detection
    - Integrate InstrumentGestureRecognizer for gesture recognition
    - Return TouchAction objects with type, zoneId, position, velocity, timestamp
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [x] 11.4 Write unit tests for TouchController
    - Test zone hit detection
    - Test strike gesture recognition
    - Test pluck gesture recognition with drag distance
    - Test press/release gesture recognition
    - Test multi-touch support
    - Test minimum touch target size enforcement
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 5.3_

- [x] 12. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 13. Implement Instrument Manager domain logic
  - [x] 13.1 Create InstrumentManager class
    - Implement loadInstrument() to load 3D model and audio samples
    - Implement unloadInstrument() to free resources
    - Implement getCurrentInstrument() to return active instrument
    - Implement preloadInstruments() for background loading
    - Coordinate with AssetLoader, RenderEngine, and SoundEngine
    - Add error handling for load failures
    - _Requirements: 12.4, 15.1, 15.2_

  - [x] 13.2 Write unit tests for InstrumentManager
    - Test instrument loading flow
    - Test resource cleanup on unload
    - Test preloading behavior
    - Test error handling for failed loads
    - _Requirements: 12.4, 15.1, 15.2_

- [x] 14. Implement Application State Manager
  - [x] 14.1 Create AppStateManager with React Context and useReducer
    - Define AppState interface with all state properties
    - Define AppAction types for state updates
    - Implement selectInstrument() action to load and set current instrument
    - Implement updatePreferences() action for user settings
    - Implement handleError() action for error management
    - Integrate with StorageService for persistence
    - _Requirements: 14.4, 15.1, 15.2, 15.3, 15.4_

  - [x] 14.2 Write unit tests for AppStateManager
    - Test state initialization
    - Test instrument selection flow
    - Test preference updates
    - Test error handling
    - Test state persistence
    - _Requirements: 14.4, 15.1, 15.2, 15.3, 15.4_

- [x] 15. Implement Lifecycle Manager for app lifecycle events
  - [x] 15.1 Create LifecycleManager class
    - Implement onAppBackground() to stop audio and save state
    - Implement onAppForeground() to restore state and reload instrument
    - Implement onInterruption() to pause audio during calls/notifications
    - Implement onResume() to resume audio after interruption
    - Integrate with SoundEngine and StorageService
    - _Requirements: 14.1, 14.2, 14.3, 14.4_

  - [x] 15.2 Write unit tests for LifecycleManager
    - Test background/foreground transitions
    - Test interruption handling
    - Test state restoration
    - _Requirements: 14.1, 14.2, 14.3, 14.4_

- [x] 16. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 17. Implement Instrument Selection UI
  - [x] 17.1 Create InstrumentLibraryScreen component
    - Display instruments grouped by nationality (Thai/International)
    - Implement filter controls for playing method (striking/plucked/pressed)
    - Display instrument names in Thai and English
    - Implement instrument selection handler
    - Show loading indicator during instrument load
    - Implement responsive layout for phones and tablets
    - _Requirements: 1.3, 1.4, 12.1, 12.2, 12.3, 12.4_

  - [x] 17.2 Create InstrumentCard component
    - Display instrument thumbnail
    - Display bilingual name (Thai/English)
    - Display playing method icon
    - Implement tap handler for selection
    - Apply responsive sizing based on device type
    - _Requirements: 1.3, 1.4, 12.1, 12.2, 12.3_

  - [x] 17.3 Write integration tests for InstrumentLibraryScreen
    - Test instrument list rendering
    - Test filtering by nationality
    - Test filtering by playing method
    - Test instrument selection
    - Test responsive layout on different screen sizes
    - _Requirements: 1.3, 12.1, 12.2, 12.3, 12.4_

- [x] 18. Implement Instrument Playing UI
  - [x] 18.1 Create InstrumentPlayScreen component
    - Integrate GLView for 3D rendering
    - Set up touch event handlers for instrument interaction
    - Display instrument name and cultural information
    - Implement back button to return to library
    - Implement volume control slider
    - Apply responsive layout for portrait/landscape orientations
    - _Requirements: 2.1, 2.2, 2.3, 4.5, 7.3, 8.4, 9.4, 11.4_

  - [x] 18.2 Create VisualFeedbackOverlay component
    - Display touch feedback highlights on interaction zones
    - Implement highlight animation (50ms response time)
    - Implement strike motion animation
    - Implement pluck vibration animation
    - Implement press key depression animation
    - _Requirements: 4.5, 13.1, 13.2, 13.3, 13.4_

  - [x] 18.3 Create CulturalInfoPanel component
    - Display instrument description in Thai and English
    - Display origin and usage information
    - Display fun facts (if available)
    - Implement expandable/collapsible panel
    - Apply responsive sizing for phones vs tablets
    - _Requirements: 8.4, 9.4_

  - [x] 18.4 Write integration tests for InstrumentPlayScreen
    - Test 3D model rendering
    - Test touch interaction handling
    - Test visual feedback display
    - Test volume control
    - Test orientation changes
    - Test cultural info display
    - _Requirements: 2.1, 2.2, 2.3, 4.5, 7.3, 13.1, 13.2, 13.3, 13.4_

- [x] 19. Implement Settings UI
  - [x] 19.1 Create SettingsScreen component
    - Implement volume slider (0-100%)
    - Implement language selection (Thai/English/Auto)
    - Implement visual quality selection (Low/Medium/High/Auto)
    - Implement audio quality selection (Low/Medium/High/Auto)
    - Implement haptic feedback toggle
    - Save preferences to StorageService on change
    - _Requirements: 11.4, 14.4_

  - [x] 19.2 Write integration tests for SettingsScreen
    - Test preference updates
    - Test preference persistence
    - Test UI controls
    - _Requirements: 11.4, 14.4_

- [x] 20. Checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 21. Integrate all components and wire application flow
  - [x] 21.1 Create App root component
    - Set up AppStateManager context provider
    - Initialize LifecycleManager with app state listeners
    - Set up navigation between screens (Library, Instrument, Settings)
    - Initialize DisplayManager with device detection
    - Load user preferences from storage on startup
    - Restore last selected instrument if available
    - _Requirements: 12.1, 14.2, 14.4_

  - [x] 21.2 Wire InstrumentLibraryScreen to AppStateManager
    - Connect instrument selection to AppStateManager.selectInstrument()
    - Connect filters to InstrumentLibrary methods
    - Handle loading states during instrument load
    - Navigate to InstrumentPlayScreen on successful load
    - _Requirements: 12.2, 12.3, 12.4_

  - [x] 21.3 Wire InstrumentPlayScreen to domain services
    - Connect GLView to RenderEngine
    - Connect touch handlers to TouchController
    - Connect TouchController actions to SoundEngine.playNote()
    - Connect visual feedback to DisplayManager.showVisualFeedback()
    - Handle orientation changes with DisplayManager.adaptToScreen()
    - _Requirements: 2.1, 2.2, 2.3, 4.1, 4.2, 4.3, 4.4, 4.5, 7.3, 13.1, 13.2, 13.3, 13.4_

  - [x] 21.4 Wire SettingsScreen to AppStateManager
    - Connect preference controls to AppStateManager.updatePreferences()
    - Apply volume changes to SoundEngine.setVolume()
    - Apply quality changes to RenderEngine.setQualityLevel()
    - _Requirements: 11.4, 14.4_

  - [x] 21.5 Write end-to-end integration tests
    - Test complete flow: app launch → library → instrument selection → playing → back to library
    - Test settings changes applied across app
    - Test app lifecycle (background/foreground)
    - Test error recovery flows
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 14.1, 14.2, 14.3, 14.4, 15.1, 15.2, 15.3, 15.4_

- [x] 22. Implement performance monitoring and optimization
  - [x] 22.1 Add performance monitoring
    - Track FPS in RenderEngine
    - Track audio latency in SoundEngine
    - Track memory usage
    - Log performance metrics for debugging
    - _Requirements: 10.1, 10.4_

  - [x] 22.2 Implement adaptive quality adjustments
    - Automatically reduce visual quality if FPS drops below 30
    - Automatically switch LOD levels based on performance
    - Release unused assets when memory is low
    - Display performance warnings to user if needed
    - _Requirements: 10.1, 10.2, 10.4, 15.3_

  - [x] 22.3 Write performance tests
    - Test FPS maintenance under load
    - Test audio latency measurements
    - Test memory management
    - Test adaptive quality switching
    - _Requirements: 10.1, 10.2, 10.4_

- [x] 23. Implement error handling and logging
  - [x] 23.1 Create ErrorLogger service
    - Implement logError() with error code, message, stack trace
    - Implement getErrorLog() for debugging
    - Implement clearErrorLog()
    - Save error logs to AsyncStorage
    - _Requirements: 15.1, 15.2, 15.3, 15.4_

  - [x] 23.2 Add error boundaries and fallbacks
    - Wrap UI components in error boundaries
    - Implement fallback UI for render errors
    - Implement fallback sounds for audio load failures
    - Display user-friendly error messages
    - Allow user to retry or select different instrument
    - _Requirements: 15.1, 15.2, 15.3, 15.4_

  - [x] 23.3 Write error handling tests
    - Test model load failure handling
    - Test audio load failure handling
    - Test out of memory handling
    - Test error logging
    - Test error recovery flows
    - _Requirements: 15.1, 15.2, 15.3, 15.4_

- [x] 24. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 25. Add sample instrument assets and test data
  - [x] 25.1 Create sample 3D models
    - Add at least one sample model for each playing method (striking, plucked, pressed)
    - Optimize models with appropriate polygon counts
    - Create LOD variants (low, medium, high)
    - Export in GLB format
    - _Requirements: 2.1, 2.2, 10.2_

  - [x] 25.2 Create sample audio files
    - Record or source audio samples for each instrument type
    - Ensure 44.1kHz sample rate minimum
    - Export in appropriate format (WAV or M4A)
    - Create polyphonic sample sets for multi-note instruments
    - _Requirements: 3.1, 3.4, 11.1_

  - [x] 25.3 Create instrument metadata JSON
    - Define complete instrument data for all Thai instruments (Ranat Ek, Mong, Klong Thad, Jakhe, Saw Duang, Pin, Khim, Khaen)
    - Define complete instrument data for all international instruments (drums, xylophone, marimba, guitar, harp, ukulele, piano, accordion)
    - Include bilingual names, cultural info, interaction zones
    - Include asset references for models and audio
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 8.1, 8.2, 8.3, 8.4, 9.1, 9.2, 9.3, 9.4_

- [x] 26. Platform-specific testing and optimization
  - [x] 26.1 Test on iOS devices
    - Test on iPhone (4-7 inch screens)
    - Test on iPad (7-13 inch screens)
    - Test portrait and landscape orientations
    - Verify audio latency and performance
    - Test app lifecycle events
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 6.1, 6.2, 6.3, 6.4, 14.1, 14.2, 14.3_

  - [x] 26.2 Test on Android devices
    - Test on Android phones (4-7 inch screens)
    - Test on Android tablets (7-13 inch screens)
    - Test portrait and landscape orientations
    - Verify audio latency and performance
    - Test app lifecycle events
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 6.1, 6.2, 6.3, 6.4, 14.1, 14.2, 14.3_

  - [x] 26.3 Write platform-specific tests
    - Test iOS-specific features
    - Test Android-specific features
    - Test cross-platform consistency
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 6.1, 6.2, 6.3, 6.4_

- [x] 27. Final integration and polish
  - [x] 27.1 Optimize app startup time
    - Implement splash screen with loading progress
    - Preload critical assets during splash
    - Defer non-critical initialization
    - Target <2 second load time to library screen
    - _Requirements: 12.1, 12.4_

  - [x] 27.2 Add accessibility features
    - Ensure minimum 44px touch targets throughout app
    - Add screen reader labels for UI elements
    - Ensure text readability (minimum 12pt)
    - Test with accessibility tools
    - _Requirements: 5.3, 7.4_

  - [x] 27.3 Final polish and bug fixes
    - Review all error messages for clarity
    - Ensure consistent UI styling
    - Fix any remaining bugs from testing
    - Optimize asset sizes for app bundle
    - _Requirements: All_

- [x] 28. Final checkpoint - Complete testing and validation
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP delivery
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation and allow for user feedback
- The implementation follows a bottom-up approach: infrastructure → domain → application → presentation
- TypeScript is used throughout for type safety and better developer experience
- Performance targets: 30+ FPS rendering, <100ms audio latency, <2s instrument load time
- The app must support both iOS and Android on phones (4-7") and tablets (7-13")
- All instruments must have bilingual names (Thai/English) and cultural information
