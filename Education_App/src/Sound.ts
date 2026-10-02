/**
 * Short on-device beeps. Nothing is uploaded.
 */

export class SoundPlayer {
  private ctx: AudioContext | null = null;
  private enabled = true;

  public setEnabled(enabled: boolean): void {
    this.enabled = enabled;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  public playRun(): void {
    this.beep(620, 0.06);
  }

  public playWin(): void {
    this.beep(880, 0.12);
  }

  public playLose(): void {
    this.beep(196, 0.16);
  }

  private beep(frequency: number, duration: number): void {
    if (!this.enabled) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    try {
      if (!this.ctx) this.ctx = new AudioCtx();
      if (this.ctx.state === 'suspended') {
        void this.ctx.resume();
      }
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = frequency;
      gain.gain.value = 0.04;
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Missing WebAudio should not stop the game.
    }
  }
}
