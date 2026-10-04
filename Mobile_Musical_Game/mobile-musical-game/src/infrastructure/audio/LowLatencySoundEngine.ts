/**
 * Low Latency Sound Engine Implementation
 * 
 * Implements ISoundEngine using Web Audio API for low-latency audio playback.
 * Supports polyphonic playback with voice stealing and velocity control.
 * 
 * Requirements: 3.1, 3.2, 3.3, 3.4, 11.1, 11.2, 11.3, 11.4
 */

import { ISoundEngine, MixerState } from '../../domain/interfaces/ISoundEngine';
import { AudioSample } from '../../domain/entities/Instrument';
import {
  createSynthesizedAudioBuffer,
  instrumentKeyFromPath,
  renderOscillatorSamples,
} from './synthesizeInstrument';

interface ActiveVoice {
  source: AudioBufferSourceNode;
  gainNode: GainNode;
  noteId: string;
  startTime: number;
}

export class LowLatencySoundEngine implements ISoundEngine {
  private audioContext: AudioContext | null = null;
  private readonly audioBuffers: Map<string, AudioBuffer> = new Map();
  private readonly pcmClips: Map<string, Float32Array> = new Map();
  private readonly activeVoices: Map<string, ActiveVoice> = new Map();
  private masterGain: GainNode | null = null;
  private outputVolume = 1;
  private readonly maxVoices: number = 16;
  private isInitialized: boolean = false;
  private voiceSequence = 0;

  /**
   * Initialize the audio engine with Web Audio API context
   * Sets up 44.1kHz sample rate and interactive latency hint for low latency
   */
  initialize(): Promise<void> {
    if (this.isInitialized) {
      return Promise.resolve();
    }

    const AudioContextCtor = (globalThis as { AudioContext?: typeof AudioContext }).AudioContext
      ?? (globalThis as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (AudioContextCtor) {
      try {
        this.audioContext = new AudioContextCtor({
          sampleRate: 44100,
          latencyHint: 'interactive',
        });
        this.masterGain = this.audioContext.createGain();
        this.masterGain.gain.value = this.outputVolume;
        this.masterGain.connect(this.audioContext.destination);
      } catch (error) {
        console.warn('Web Audio context unavailable; synthesized clips will play instead', error);
        this.audioContext = null;
        this.masterGain = null;
      }
    }

    this.isInitialized = true;
    return Promise.resolve();
  }

  /**
   * Load audio samples and decode them into audio buffers
   * Pre-loads samples to prevent delays during playback (Requirement 10.3)
   */
  async loadAudioSamples(samples: AudioSample[]): Promise<void> {
    if (!this.isInitialized) {
      throw new Error('Audio engine not initialized. Call initialize() first.');
    }

    if (!this.audioContext) {
      samples.forEach((sample) => this.storeSynthesizedSample(sample));
      return;
    }

    const loadPromises = samples.map(async (sample) => {
      let timer: ReturnType<typeof setTimeout> | undefined;
      try {
        const response = await Promise.race([
          fetch(sample.filePath),
          new Promise<Response>((_resolve, reject) => {
            timer = setTimeout(() => reject(new Error(`Audio fetch timed out: ${sample.filePath}`)), 800);
          }),
        ]);
        if (!response.ok) {
          throw new Error(`Failed to fetch audio: ${sample.filePath}`);
        }
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await this.audioContext!.decodeAudioData(arrayBuffer);
        this.audioBuffers.set(sample.noteId, audioBuffer);
      } catch (error) {
        this.storeSynthesizedSample(sample);
        console.warn(`Using synthesized timbre for ${sample.noteId}`, error);
      } finally {
        if (timer) clearTimeout(timer);
      }
    });

    await Promise.all(loadPromises);
  }

  /**
   * Point a touch-zone id at the same buffer as a note so either id can be played.
   */
  aliasNote(noteId: string, alias: string): void {
    const buffer = this.audioBuffers.get(noteId);
    if (buffer) this.audioBuffers.set(alias, buffer);
    const clip = this.pcmClips.get(noteId);
    if (clip) this.pcmClips.set(alias, clip);
  }

  private storeSynthesizedSample(sample: AudioSample): void {
    const spec = {
      instrumentKey: instrumentKeyFromPath(sample.filePath),
      noteId: sample.noteId,
      sampleRate: this.audioContext?.sampleRate || sample.sampleRate || 44100,
      duration: Math.min(1.2, sample.duration || 0.7),
    };
    if (this.audioContext && typeof this.audioContext.createBuffer === 'function') {
      try {
        const buffer = createSynthesizedAudioBuffer(this.audioContext, spec);
        this.audioBuffers.set(sample.noteId, buffer);
        return;
      } catch (error) {
        console.warn('Falling back to PCM clip', error);
      }
    }
    this.pcmClips.set(sample.noteId, renderOscillatorSamples(spec));
  }

  /**
   * Play a note with velocity control
   * Implements voice stealing when max voices (16) reached
   * 
   * @param noteId - The note identifier to play
   * @param velocity - Volume level from 0.0 to 1.0
   */
  playNote(noteId: string, velocity: number): void {
    if (!this.isInitialized) {
      console.warn('Audio engine not initialized');
      return;
    }

    const clampedVelocity = Math.max(0.0, Math.min(1.0, velocity));
    const buffer = this.audioBuffers.get(noteId);
    if (!buffer || !this.audioContext || !this.masterGain) {
      const clip = this.pcmClips.get(noteId);
      if (clip) {
        void this.playPcmClip(clip, clampedVelocity);
        return;
      }
      if (!this.audioContext || !this.masterGain) {
        console.warn('Audio engine not initialized');
      } else {
        console.warn(`Audio buffer not found for note: ${noteId}`);
      }
      return;
    }

    // Voice stealing: remove oldest voice if max voices reached
    if (this.activeVoices.size >= this.maxVoices) {
      this.stealOldestVoice();
    }

    // Create audio buffer source node
    const source = this.audioContext.createBufferSource();
    source.buffer = buffer;

    // Create gain node for velocity control
    const gainNode = this.audioContext.createGain();
    gainNode.gain.value = clampedVelocity;

    // Connect audio graph: source -> gain -> master -> destination
    source.connect(gainNode);
    gainNode.connect(this.masterGain);

    // Start playback immediately
    source.start(0);

    // Generate unique voice ID and track active voice
    const voiceId = `${noteId}-${Date.now()}-${this.voiceSequence}`;
    this.voiceSequence += 1;
    const voice: ActiveVoice = {
      source,
      gainNode,
      noteId,
      startTime: Date.now(),
    };
    this.activeVoices.set(voiceId, voice);

    // Remove from active voices when playback ends
    source.onended = () => {
      this.activeVoices.delete(voiceId);
    };
  }

  /**
   * Stop a specific note
   * Stops all active voices playing the given noteId
   */
  stopNote(noteId: string): void {
    const voicesToStop: string[] = [];

    // Find all voices playing this note
    this.activeVoices.forEach((voice, voiceId) => {
      if (voice.noteId === noteId) {
        voicesToStop.push(voiceId);
      }
    });

    // Stop and remove each voice
    voicesToStop.forEach((voiceId) => {
      const voice = this.activeVoices.get(voiceId);
      if (voice) {
        try {
          voice.source.stop();
        } catch (error) {
          // Source may have already stopped naturally
          console.debug('Voice already stopped:', voiceId);
        }
        this.activeVoices.delete(voiceId);
      }
    });
  }

  /**
   * Stop all currently playing notes
   */
  stopAll(): void {
    this.activeVoices.forEach((voice, voiceId) => {
      try {
        voice.source.stop();
      } catch (error) {
        // Source may have already stopped naturally
        console.debug('Voice already stopped:', voiceId);
      }
    });
    this.activeVoices.clear();
  }

  /**
   * Set master volume level
   * 
   * @param volume - Volume level from 0.0 (silent) to 1.0 (full volume)
   */
  setVolume(volume: number): void {
    const clampedVolume = Math.max(0.0, Math.min(1.0, volume));
    this.outputVolume = clampedVolume;
    if (this.masterGain) {
      this.masterGain.gain.value = clampedVolume;
    }
  }

  /**
   * Get current mixer state for monitoring and debugging
   * 
   * @returns Current mixer state with active voice count and CPU load estimate
   */
  getMixerState(): MixerState {
    // Calculate CPU load estimate based on active voices
    // Simple heuristic: each voice uses approximately 6.25% of max capacity
    const cpuLoad = (this.activeVoices.size / this.maxVoices) * 100;

    return {
      activeVoices: this.activeVoices.size,
      maxVoices: this.maxVoices,
      cpuLoad: Math.round(cpuLoad),
    };
  }

  /**
   * Clean up resources and close audio context
   */
  dispose(): void {
    // Stop all active voices
    this.stopAll();

    // Close audio context
    if (this.audioContext) {
      void this.audioContext.close();
      this.audioContext = null;
    }

    // Clear buffers
    this.audioBuffers.clear();
    this.pcmClips.clear();
    this.masterGain = null;
    this.isInitialized = false;
  }

  private async playPcmClip(samples: Float32Array, velocity: number): Promise<void> {
    try {
      const { Audio } = await import('expo-av');
      const uri = pcmToWavDataUri(samples, 44100);
      const { sound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: true, volume: Math.max(0, Math.min(1, velocity * this.outputVolume)) },
      );
      sound.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && status.didJustFinish) {
          sound.unloadAsync().catch(() => undefined);
        }
      });
    } catch {
      console.warn('Synthesized clip playback unavailable');
    }
  }

  /**
   * Voice stealing implementation: removes the oldest active voice
   * Called when max voices limit is reached
   */
  private stealOldestVoice(): void {
    let oldestVoiceId: string | null = null;
    let oldestStartTime = Infinity;

    // Find the oldest voice by start time
    this.activeVoices.forEach((voice, voiceId) => {
      if (voice.startTime < oldestStartTime) {
        oldestStartTime = voice.startTime;
        oldestVoiceId = voiceId;
      }
    });

    // Stop and remove the oldest voice
    if (oldestVoiceId) {
      const voice = this.activeVoices.get(oldestVoiceId);
      if (voice) {
        try {
          voice.source.stop();
        } catch (error) {
          // Voice may have already stopped
          console.debug('Voice already stopped during stealing:', oldestVoiceId, error);
        }
        this.activeVoices.delete(oldestVoiceId);
      }
    }
  }
}

function pcmToWavDataUri(samples: Float32Array, sampleRate: number): string {
  const dataSize = samples.length * 2;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);
  const writeString = (offset: number, text: string) => {
    for (let i = 0; i < text.length; i += 1) view.setUint8(offset + i, text.codePointAt(i) ?? 0);
  };
  writeString(0, 'RIFF');
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, 'WAVE');
  writeString(12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(36, 'data');
  view.setUint32(40, dataSize, true);
  let offset = 44;
  for (const sample of samples) {
    const clamped = Math.max(-1, Math.min(1, sample));
    view.setInt16(offset, clamped < 0 ? clamped * 0x8000 : clamped * 0x7fff, true);
    offset += 2;
  }
  const bytes = new Uint8Array(buffer);
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCodePoint(...bytes.subarray(i, i + chunk));
  }
  const base64 = typeof btoa === 'function' ? btoa(binary) : Buffer.from(bytes).toString('base64');
  return `data:audio/wav;base64,${base64}`;
}
