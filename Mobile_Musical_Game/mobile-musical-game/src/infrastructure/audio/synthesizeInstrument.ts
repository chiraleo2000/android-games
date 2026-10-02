/**
 * Distinct instrument timbres rendered from oscillator formulas into PCM buffers.
 * The same samples are copied into a Web Audio AudioBuffer when a context exists.
 */

export interface SynthSpec {
  instrumentKey: string;
  noteId: string;
  sampleRate?: number;
  duration?: number;
}

interface Timbre {
  wave: 'sine' | 'square' | 'triangle';
  harmonic: number;
  harmonicGain: number;
  noise: number;
  decay: number;
  noiseDecay: number;
  gain: number;
}

const NOTE_FREQ: Record<string, number> = {
  C3: 130.81,
  A3: 220,
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  F4: 349.23,
  G4: 392,
  A4: 440,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
  C6: 1046.5,
  low: 98,
  high: 196,
  strike1: 82.41,
};

const TIMBRES: Record<string, Timbre> = {
  'ranat-ek': { wave: 'sine', harmonic: 3.2, harmonicGain: 0.25, noise: 0.02, decay: 4.5, noiseDecay: 18, gain: 0.85 },
  mong: { wave: 'sine', harmonic: 2.01, harmonicGain: 0.18, noise: 0.08, decay: 1.4, noiseDecay: 6, gain: 0.9 },
  'klong-thad': { wave: 'sine', harmonic: 1.5, harmonicGain: 0.1, noise: 0.65, decay: 6, noiseDecay: 8, gain: 0.8 },
  jakhe: { wave: 'triangle', harmonic: 2, harmonicGain: 0.2, noise: 0.12, decay: 3.2, noiseDecay: 20, gain: 0.75 },
  'saw-duang': { wave: 'triangle', harmonic: 2.5, harmonicGain: 0.35, noise: 0.04, decay: 1.1, noiseDecay: 4, gain: 0.55 },
  pin: { wave: 'triangle', harmonic: 3, harmonicGain: 0.15, noise: 0.18, decay: 3.8, noiseDecay: 16, gain: 0.7 },
  khim: { wave: 'sine', harmonic: 4.1, harmonicGain: 0.4, noise: 0.05, decay: 5, noiseDecay: 22, gain: 0.7 },
  khaen: { wave: 'square', harmonic: 2, harmonicGain: 0.08, noise: 0.03, decay: 0.8, noiseDecay: 3, gain: 0.35 },
  drums: { wave: 'sine', harmonic: 1.2, harmonicGain: 0.05, noise: 0.8, decay: 7, noiseDecay: 9, gain: 0.85 },
  xylophone: { wave: 'sine', harmonic: 5, harmonicGain: 0.3, noise: 0.03, decay: 5.5, noiseDecay: 20, gain: 0.8 },
  marimba: { wave: 'sine', harmonic: 3.8, harmonicGain: 0.22, noise: 0.04, decay: 3.4, noiseDecay: 14, gain: 0.8 },
  guitar: { wave: 'triangle', harmonic: 2, harmonicGain: 0.18, noise: 0.2, decay: 2.8, noiseDecay: 18, gain: 0.75 },
  harp: { wave: 'sine', harmonic: 2.4, harmonicGain: 0.28, noise: 0.06, decay: 2.2, noiseDecay: 12, gain: 0.7 },
  ukulele: { wave: 'triangle', harmonic: 3.5, harmonicGain: 0.12, noise: 0.16, decay: 4, noiseDecay: 18, gain: 0.65 },
  piano: { wave: 'sine', harmonic: 2, harmonicGain: 0.35, noise: 0.04, decay: 2.4, noiseDecay: 10, gain: 0.8 },
  accordion: { wave: 'square', harmonic: 3, harmonicGain: 0.12, noise: 0.02, decay: 0.6, noiseDecay: 2, gain: 0.32 },
};

export function frequencyForNote(noteId: string): number {
  if (NOTE_FREQ[noteId]) return NOTE_FREQ[noteId];
  let hash = 0;
  for (const char of noteId) hash = (hash * 33 + (char.codePointAt(0) ?? 0)) >>> 0;
  return 160 + (hash % 640);
}

export function instrumentKeyFromPath(filePath: string): string {
  const parts = filePath.split(/[/\\]/).filter(Boolean);
  if (parts.length === 0) return 'tone';
  const parent = parts.length > 1 ? (parts.at(-2) ?? 'tone') : parts[0];
  if (parent !== 'audio' && parent !== 'thai' && parent !== 'international' && parent !== 'assets') {
    return parent;
  }
  const audioIndex = parts.indexOf('audio');
  const afterAudio = audioIndex >= 0 ? parts[audioIndex + 1] : undefined;
  if (afterAudio && afterAudio !== 'thai' && afterAudio !== 'international' && !afterAudio.includes('.')) {
    return afterAudio;
  }
  const fileName = (parts.at(-1) ?? 'tone').replace(/\.[^.]+$/, '');
  return fileName || 'tone';
}

function timbreFor(key: string): Timbre {
  return TIMBRES[key] ?? {
    wave: 'sine' as const,
    harmonic: 2.7,
    harmonicGain: 0.2,
    noise: 0.05,
    decay: 3,
    noiseDecay: 10,
    gain: 0.7,
  };
}

function deterministicNoise(index: number, seed: number): number {
  const value = Math.sin(index * 12.9898 + seed * 78.233) * 43758.5453;
  return (value - Math.floor(value)) * 2 - 1;
}

/** Render oscillator partials into a PCM buffer. Output is silent only if duration is zero. */
export function renderOscillatorSamples(spec: SynthSpec): Float32Array {
  const sampleRate = spec.sampleRate ?? 44100;
  const duration = spec.duration ?? 0.7;
  const length = Math.max(1, Math.floor(sampleRate * duration));
  const samples = new Float32Array(length);
  const frequency = frequencyForNote(spec.noteId);
  const timbre = timbreFor(spec.instrumentKey);
  let seed = 1;
  for (const char of spec.instrumentKey) seed = (seed + (char.codePointAt(0) ?? 0) * 13) % 997;

  for (let i = 0; i < length; i += 1) {
    const time = i / sampleRate;
    const envelope = Math.exp(-time * timbre.decay);
    const fundamental = Math.sin(2 * Math.PI * frequency * time);
    const overtone = Math.sin(2 * Math.PI * frequency * timbre.harmonic * time);
    let shaped = fundamental;
    if (timbre.wave === 'square') shaped = Math.sign(fundamental) || 0;
    if (timbre.wave === 'triangle') shaped = (2 / Math.PI) * Math.asin(Math.max(-1, Math.min(1, fundamental)));
    const noise = deterministicNoise(i, seed) * Math.exp(-time * timbre.noiseDecay);
    const mixed = (shaped + overtone * timbre.harmonicGain + noise * timbre.noise) * envelope * timbre.gain;
    samples[i] = Math.max(-1, Math.min(1, mixed));
  }
  return samples;
}

export function bufferEnergy(samples: ArrayLike<number>): number {
  if (samples.length === 0) return 0;
  let sum = 0;
  for (const sample of Array.from(samples)) sum += sample * sample;
  return Math.sqrt(sum / samples.length);
}

export interface WritableAudioBuffer {
  getChannelData(channel: number): Float32Array;
}

export function writeSamplesToAudioBuffer(buffer: WritableAudioBuffer, samples: Float32Array): void {
  const channel = buffer.getChannelData(0);
  const count = Math.min(channel.length, samples.length);
  for (let i = 0; i < count; i += 1) channel[i] = samples[i];
}

type MinimalAudioContext = {
  sampleRate: number;
  createBuffer: (channels: number, length: number, sampleRate: number) => WritableAudioBuffer & AudioBuffer;
};

export function createSynthesizedAudioBuffer(
  audioContext: MinimalAudioContext,
  spec: SynthSpec,
): WritableAudioBuffer & AudioBuffer {
  const samples = renderOscillatorSamples({
    ...spec,
    sampleRate: audioContext.sampleRate || spec.sampleRate || 44100,
  });
  const buffer = audioContext.createBuffer(1, samples.length, audioContext.sampleRate || 44100);
  writeSamplesToAudioBuffer(buffer, samples);
  return buffer;
}
