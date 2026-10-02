/**
 * App Root Component
 * 
 * Integrates all application layers:
 * - AppStateManager for global state management
 * - LifecycleManager for background/foreground handling
 * - Screen navigation (Library, Play, Settings)
 * - Service initialization (Storage, InstrumentManager)
 * - Preference and instrument restoration
 * 
 * Requirements: 2.1, 2.2, 2.3, 4.1-4.5, 7.3, 11.4, 12.1-12.4, 13.1-13.4, 14.1-14.4, 15.1-15.4
 */

import React, { useEffect, useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ActivityIndicator, Text, Dimensions } from 'react-native';
import { AppStateManagerProvider, useAppStateManager } from './src/application/state/AppStateManager';
import { LifecycleManager } from './src/application/lifecycle/LifecycleManager';
import { StorageService } from './src/infrastructure/storage/StorageService';
import { InstrumentManager } from './src/domain/services/InstrumentManager';
import { InstrumentLibrary } from './src/data/models/InstrumentLibrary';
import { AssetLoader } from './src/infrastructure/assets/AssetLoader';
import { IRenderEngine } from './src/domain/interfaces/IRenderEngine';
import { Model3DReference, Vector3 } from './src/domain/entities/Instrument';
import { Gesture } from './src/domain/entities/Touch';
import { PerformanceMetrics, QualityLevel } from './src/domain/entities/AppState';
import { LowLatencySoundEngine } from './src/infrastructure/audio/LowLatencySoundEngine';
import { DisplayManager } from './src/infrastructure/rendering/DisplayManager';
import { InstrumentLibraryScreen } from './src/presentation/screens/InstrumentLibraryScreen';
import { InstrumentPlayScreen } from './src/presentation/screens/InstrumentPlayScreen';
import { SettingsScreen } from './src/presentation/screens/SettingsScreen';
import { sanitizeLog } from './src/privacy';

class SelectionRenderEngine implements IRenderEngine {
  initialize(): void {
    // The instrument list does not draw a 3D scene.
    return;
  }
  loadModel(_model: Model3DReference): Promise<void> {
    // Models stay unloaded until the player opens an instrument.
    return Promise.resolve();
  }
  render(): void {
    // Selection has no frame loop.
    return;
  }
  setCamera(_position: Vector3, _target: Vector3): void {
    // Selection does not move a camera.
    return;
  }
  handleGesture(_gesture: Gesture): void {
    // Gestures are handled by the list, not a scene.
    return;
  }
  setQualityLevel(_level: QualityLevel): void {
    // Selection does not change render quality.
    return;
  }
  getPerformanceMetrics(): PerformanceMetrics {
    return { fps: 60, drawCalls: 0, triangles: 0, memoryUsage: 0 };
  }
  dispose(): void {
    // Nothing was allocated for the placeholder renderer.
    return;
  }
}

/**
 * Main App Content Component
 * Handles screen rendering based on current state
 */
function AppContent() {
  const { state, dispatch } = useAppStateManager();
  const { currentScreen } = state;

  // Render current screen
  switch (currentScreen) {
    case 'library':
      return <InstrumentLibraryScreen />;
    
    case 'instrument':
      return <InstrumentPlayScreen />;
    
    case 'settings':
      return <SettingsScreen onBack={() => dispatch({ type: 'SET_SCREEN', payload: 'library' })} />;
    
    case 'splash':
    default:
      return (
        <View style={styles.splashContainer}>
          <ActivityIndicator size="large" color="#4A90E2" />
          <Text style={styles.splashText}>Loading...</Text>
        </View>
      );
  }
}

/**
 * App Root Component with Service Initialization
 */
function RootFallback({ onRetry }: Readonly<{ onRetry: () => void }>) {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorTitle}>Something went wrong</Text>
      <Text style={styles.errorMessage}>The app hit a problem. Notes stay on this device.</Text>
      <Text style={styles.retryText} onPress={onRetry}>Try again</Text>
    </View>
  );
}

class AppErrorBoundary extends React.Component<{ children: React.ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true };
  }

  componentDidCatch(error: Error): void {
    console.error('App error:', sanitizeLog(error.message));
  }

  render() {
    if (this.state.failed) {
      return <RootFallback onRetry={() => this.setState({ failed: false })} />;
    }
    return this.props.children;
  }
}

export default function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [initError, setInitError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  
  // Service instances (created once)
  const storageServiceRef = useRef<StorageService>(new StorageService());
  const instrumentRepositoryRef = useRef(new InstrumentLibrary());
  const assetLoaderRef = useRef<AssetLoader>(new AssetLoader());
  const soundEngineRef = useRef<LowLatencySoundEngine>(new LowLatencySoundEngine());
  const selectionRenderEngineRef = useRef(new SelectionRenderEngine());
  const instrumentManagerRef = useRef<InstrumentManager>(
    new InstrumentManager(
      instrumentRepositoryRef.current,
      assetLoaderRef.current,
      selectionRenderEngineRef.current,
      soundEngineRef.current
    )
  );
  const lifecycleManagerRef = useRef<LifecycleManager | null>(null);
  const displayManagerRef = useRef<DisplayManager>(new DisplayManager());

  /**
   * Initialize all services on mount
   */
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Initialize DisplayManager
        displayManagerRef.current.initialize();

        // Initialize SoundEngine
        await soundEngineRef.current.initialize();

        // Initialize LifecycleManager
        lifecycleManagerRef.current = new LifecycleManager(
          soundEngineRef.current,
          storageServiceRef.current,
          instrumentManagerRef.current
        );
        lifecycleManagerRef.current.initialize();

        // App is ready
        setIsInitialized(true);
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown initialization error';
        console.error('Failed to initialize app:', sanitizeLog(message));
        setInitError(sanitizeLog(message));
      }
    };

    void initializeApp();

    // Cleanup on unmount
    return () => {
      if (lifecycleManagerRef.current) {
        lifecycleManagerRef.current.dispose();
      }
      if (soundEngineRef.current) {
        soundEngineRef.current.dispose();
      }
    };
  }, [attempt]);

  /**
   * Handle orientation changes
   */
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', () => {
      displayManagerRef.current.adaptToScreen();
    });

    return () => {
      subscription?.remove();
    };
  }, []);

  // Show error state
  if (initError) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>Initialization Error</Text>
        <Text style={styles.errorMessage}>{initError}</Text>
        <Text
          style={styles.retryText}
          onPress={() => {
            setInitError(null);
            setIsInitialized(false);
            setAttempt((value) => value + 1);
          }}
        >
          Try again
        </Text>
      </View>
    );
  }

  // Show loading state
  if (!isInitialized) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4A90E2" />
        <Text style={styles.loadingText}>Initializing app...</Text>
      </View>
    );
  }

  // Render app with state management
  return (
    <AppErrorBoundary>
    <AppStateManagerProvider
      storageService={storageServiceRef.current}
      instrumentManager={instrumentManagerRef.current}
      initialState={{ currentScreen: 'library' }}
    >
      <View style={styles.container}>
        <StatusBar style="auto" />
        <AppContent />
      </View>
    </AppStateManagerProvider>
    </AppErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666666',
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666666',
  },
  errorContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E74C3C',
    marginBottom: 12,
  },
  errorMessage: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
  },
  retryText: {
    marginTop: 16,
    fontSize: 16,
    color: '#4A90E2',
    fontWeight: '700',
    minHeight: 44,
  },
});
