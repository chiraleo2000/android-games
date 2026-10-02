import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageService } from '@infrastructure/storage/StorageService';
import { UserPreferences } from '@domain/entities/AppState';
import {
  bufferEnergy,
  createSynthesizedAudioBuffer,
  renderOscillatorSamples,
  writeSamplesToAudioBuffer,
} from '../synthesizeInstrument';

jest.mock('@react-native-async-storage/async-storage', () => {
  const store = new Map<string, string>();
  return {
    setItem: jest.fn(async (key: string, value: string) => {
      store.set(key, value);
    }),
    getItem: jest.fn(async (key: string) => (store.has(key) ? store.get(key)! : null)),
    removeItem: jest.fn(async (key: string) => {
      store.delete(key);
    }),
    __store: store,
  };
});

describe('instrument synthesis', () => {
  it('creates a non-silent buffer with a distinct timbre', () => {
    const ranat = renderOscillatorSamples({ instrumentKey: 'ranat-ek', noteId: 'C4', duration: 0.2, sampleRate: 8000 });
    const drum = renderOscillatorSamples({ instrumentKey: 'klong-thad', noteId: 'low', duration: 0.2, sampleRate: 8000 });
    const channel = new Float32Array(ranat.length);
    writeSamplesToAudioBuffer({ getChannelData: () => channel }, ranat);

    expect(bufferEnergy(channel)).toBeGreaterThan(0.02);
    expect(channel.some((sample) => Math.abs(sample) > 0.05)).toBe(true);
    expect(bufferEnergy(ranat)).not.toBeCloseTo(bufferEnergy(drum), 2);
  });

  it('keeps striking, plucking, and pressing timbres non-silent and distinct', () => {
    const keys = ['ranat-ek', 'jakhe', 'khim', 'drums', 'guitar', 'piano'];
    const buffers = keys.map((instrumentKey) => {
      const written: Float32Array[] = [];
      createSynthesizedAudioBuffer(
        {
          sampleRate: 8000,
          createBuffer: (_channels: number, length: number) => {
            const data = new Float32Array(length);
            written.push(data);
            return { getChannelData: () => data };
          },
        } as unknown as Parameters<typeof createSynthesizedAudioBuffer>[0],
        { instrumentKey, noteId: 'C4', duration: 0.15 },
      );
      return written[0];
    });

    buffers.forEach((samples) => expect(bufferEnergy(samples)).toBeGreaterThan(0.02));
    const signatures = buffers.map((samples) => samples.reduce((sum, value, index) => sum + value * (index + 1), 0));
    expect(new Set(signatures.map((value) => value.toFixed(4))).size).toBe(keys.length);
  });
});

describe('clear data', () => {
  const preferences: UserPreferences = {
    volume: 0.4,
    favoriteInstruments: ['ranat-ek'],
    language: 'thai',
    visualQuality: 'high',
    audioQuality: 'high',
    showTutorial: false,
    hapticFeedback: true,
    lastSelectedInstrument: 'piano',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  };

  beforeEach(() => {
    (AsyncStorage as unknown as { __store: Map<string, string> }).__store.clear();
  });

  it('removes saved preferences and does not restore them', async () => {
    const storage = new StorageService();
    await storage.savePreferences(preferences);
    await storage.saveLastInstrument('ranat-ek');
    expect(await storage.loadPreferences()).not.toBeNull();
    expect(await storage.loadLastInstrument()).toBe('ranat-ek');

    await storage.clearAll();

    expect(await storage.loadPreferences()).toBeNull();
    expect(await storage.loadLastInstrument()).toBeNull();
    expect(await storage.loadErrorLogs()).toEqual([]);
  });
});
