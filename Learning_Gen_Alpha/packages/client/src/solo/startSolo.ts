import * as THREE from 'three';
import { GameEngine } from '../game3d';
import { PRIVACY_POLICY_URL } from '../privacy';
import { PUZZLES, isPuzzleCorrect, type Puzzle } from './puzzles';
import {
  clearSoloData,
  emptyProgress,
  loadProgress,
  recordLocalError,
  saveProgress,
  type SoloProgress,
} from './progress';
import { nearestPuzzle, stepWalker } from './walk';

export interface SoloOptions {
  onMultiplayer: () => void;
}

const BEACON_COLORS = [0x4361ee, 0x06d6a0, 0xffd166, 0xef476f, 0x4cc9f0, 0xa855f7, 0xff8fab, 0x90e0ef];

let stopActive: (() => void) | null = null;
let lastOptions: SoloOptions | null = null;
let showingFallback = false;

export function startSolo(options: SoloOptions): void {
  lastOptions = options;
  stopActive?.();
  stopActive = null;

  const app = document.getElementById('app');
  if (!app) return;
  app.innerHTML = '';

  const root = document.createElement('div');
  root.className = 'solo-root';
  root.innerHTML = `
    <div class="solo-world" id="solo-world"></div>
    <div class="solo-hud">
      <div class="solo-top">
        <div>
          <strong>Learning Gen Alpha</strong>
          <div id="solo-score">Score 0</div>
        </div>
        <div class="solo-actions">
          <button type="button" id="solo-settings" class="btn btn-secondary btn-small">Settings</button>
          <button type="button" id="solo-online" class="btn btn-secondary btn-small">Online lobby</button>
        </div>
      </div>
      <p id="solo-finished" class="solo-finished hidden">All 8 puzzles finished. Your score stays on this device.</p>
      <div id="solo-panel" class="solo-panel hidden"></div>
      <p id="solo-status" class="solo-status" role="status"></p>
      <div id="solo-settings-panel" class="solo-panel hidden"></div>
      <div class="solo-pad" aria-label="Move">
        <button type="button" data-move="0,-1">Up</button>
        <div>
          <button type="button" data-move="-1,0">Left</button>
          <button type="button" data-move="1,0">Right</button>
        </div>
        <button type="button" data-move="0,1">Down</button>
      </div>
    </div>
  `;
  app.appendChild(root);

  const world = root.querySelector('#solo-world') as HTMLElement;
  const beacons = new Map<string, THREE.Mesh>();
  let engine: GameEngine;
  try {
    engine = new GameEngine({ container: world });
    engine.start();
    engine.addPlayer('you', 'You', 0);
    PUZZLES.forEach((puzzle, index) => {
      const beacon = engine.addBeacon(puzzle.x, puzzle.z, BEACON_COLORS[index % BEACON_COLORS.length]);
      beacons.set(puzzle.id, beacon);
    });
  } catch (error) {
    showCrash(error, () => startSolo(options));
    return;
  }

  let progress: SoloProgress = loadProgress(localStorage) ?? emptyProgress();
  progress.solved.forEach((id) => paintSolved(beacons.get(id)));
  let position = { x: 0, z: 2 };
  const keys = new Set<string>();
  const held = { x: 0, z: 0 };
  let hintShown = 0;
  let activeId = '';
  let last = performance.now();
  let frame = 0;

  const scoreEl = root.querySelector('#solo-score') as HTMLElement;
  const panel = root.querySelector('#solo-panel') as HTMLElement;
  const status = root.querySelector('#solo-status') as HTMLElement;
  const finished = root.querySelector('#solo-finished') as HTMLElement;
  const settingsPanel = root.querySelector('#solo-settings-panel') as HTMLElement;

  function renderScore() {
    const done = progress.solved.length;
    scoreEl.textContent = `Score ${progress.score} · ${done}/${PUZZLES.length} puzzles`;
    finished.classList.toggle('hidden', done < PUZZLES.length);
  }

  function showPuzzle(puzzle: Puzzle | null) {
    if (!puzzle || progress.solved.includes(puzzle.id)) {
      panel.classList.add('hidden');
      panel.innerHTML = '';
      activeId = '';
      return;
    }
    if (activeId === puzzle.id) return;
    activeId = puzzle.id;
    hintShown = progress.hintsUsed[puzzle.id] ?? 0;
    panel.classList.remove('hidden');
    const hintText = puzzle.hints.slice(0, hintShown).map((hint) => `<li>${escapeHtml(hint)}</li>`).join('');
    panel.innerHTML = `
      <p class="solo-subject">${escapeHtml(puzzle.subject)}</p>
      <h2>${escapeHtml(puzzle.title)}</h2>
      <p>${escapeHtml(puzzle.prompt)}</p>
      <div class="solo-choices">
        ${puzzle.choices.map((choice) => `<button type="button" data-answer="${escapeHtml(choice)}">${escapeHtml(choice)}</button>`).join('')}
      </div>
      <button type="button" id="solo-hint" class="btn btn-secondary btn-small">Hint</button>
      <ul id="solo-hints">${hintText}</ul>
    `;
    panel.querySelectorAll<HTMLButtonElement>('[data-answer]').forEach((button) => {
      button.addEventListener('click', () => submit(puzzle, button.dataset.answer || ''));
    });
    panel.querySelector('#solo-hint')?.addEventListener('click', () => {
      if (hintShown >= puzzle.hints.length) return;
      hintShown += 1;
      progress.hintsUsed[puzzle.id] = hintShown;
      saveProgress(localStorage, progress);
      const list = panel.querySelector('#solo-hints');
      if (list) {
        const item = document.createElement('li');
        item.textContent = puzzle.hints[hintShown - 1];
        list.appendChild(item);
      }
    });
  }

  function submit(puzzle: Puzzle, answer: string) {
    if (isPuzzleCorrect(puzzle, answer)) {
      if (!progress.solved.includes(puzzle.id)) {
        progress.solved.push(puzzle.id);
        progress.score += 100;
        saveProgress(localStorage, progress);
        paintSolved(beacons.get(puzzle.id));
      }
      status.textContent = 'Correct. This puzzle is saved on this device.';
      activeId = '';
      showPuzzle(null);
      renderScore();
      return;
    }
    status.textContent = 'Not quite. Try another answer or use a hint.';
  }

  function openSettings() {
    settingsPanel.classList.remove('hidden');
    settingsPanel.innerHTML = `
      <h2>Settings</h2>
      <p>Puzzles are checked on this device. There are no accounts, ads, or off-device analytics.</p>
      <a href="${PRIVACY_POLICY_URL}" target="_blank" rel="noreferrer">Privacy policy</a>
      <button type="button" id="solo-clear" class="btn btn-danger btn-small">Clear All Data</button>
      <div id="solo-confirm" class="hidden">
        <p>Clear score and solved puzzles? They will not be restored.</p>
        <button type="button" id="solo-clear-yes" class="btn btn-danger btn-small">Clear All Data</button>
        <button type="button" id="solo-clear-no" class="btn btn-secondary btn-small">Cancel</button>
      </div>
      <p id="solo-cleared" class="hidden" role="status"></p>
      <button type="button" id="solo-settings-close" class="btn btn-secondary btn-small">Close</button>
    `;
    settingsPanel.querySelector('#solo-clear')?.addEventListener('click', () => {
      settingsPanel.querySelector('#solo-confirm')?.classList.remove('hidden');
    });
    settingsPanel.querySelector('#solo-clear-no')?.addEventListener('click', () => {
      settingsPanel.querySelector('#solo-confirm')?.classList.add('hidden');
    });
    settingsPanel.querySelector('#solo-clear-yes')?.addEventListener('click', () => {
      clearSoloData(localStorage);
      progress = emptyProgress();
      activeId = '';
      showPuzzle(null);
      renderScore();
      const cleared = settingsPanel.querySelector('#solo-cleared');
      if (cleared) {
        cleared.textContent = 'All data cleared. Nothing was restored.';
        cleared.classList.remove('hidden');
      }
      settingsPanel.querySelector('#solo-confirm')?.classList.add('hidden');
    });
    settingsPanel.querySelector('#solo-settings-close')?.addEventListener('click', () => {
      settingsPanel.classList.add('hidden');
    });
  }

  function tick(now: number) {
    try {
      const delta = Math.min(0.05, (now - last) / 1000);
      last = now;
      const keyboardX = (keys.has('arrowright') || keys.has('d') ? 1 : 0) - (keys.has('arrowleft') || keys.has('a') ? 1 : 0);
      const keyboardZ = (keys.has('arrowdown') || keys.has('s') ? 1 : 0) - (keys.has('arrowup') || keys.has('w') ? 1 : 0);
      position = stepWalker(position, {
        x: keyboardX || held.x,
        z: keyboardZ || held.z,
      }, delta);
      engine.movePlayer('you', position.x, position.z, true);
      engine.setCameraPosition(position.x, 8, position.z + 11);
      engine.setCameraTarget(position.x, 1, position.z);
      showPuzzle(nearestPuzzle(position.x, position.z));
      frame = requestAnimationFrame(tick);
    } catch (error) {
      cancelAnimationFrame(frame);
      showCrash(error, () => startSolo(options));
    }
  }

  const onKeyDown = (event: KeyboardEvent) => {
    keys.add(event.key.toLowerCase());
  };
  const onKeyUp = (event: KeyboardEvent) => {
    keys.delete(event.key.toLowerCase());
  };
  window.addEventListener('keydown', onKeyDown);
  window.addEventListener('keyup', onKeyUp);

  root.querySelectorAll<HTMLButtonElement>('[data-move]').forEach((button) => {
    const setHeld = (active: boolean) => {
      const [x, z] = (button.dataset.move || '0,0').split(',').map(Number);
      held.x = active ? x : 0;
      held.z = active ? z : 0;
    };
    button.addEventListener('pointerdown', (event) => {
      event.preventDefault();
      setHeld(true);
    });
    button.addEventListener('pointerup', () => setHeld(false));
    button.addEventListener('pointerleave', () => setHeld(false));
  });

  root.querySelector('#solo-settings')?.addEventListener('click', openSettings);
  root.querySelector('#solo-online')?.addEventListener('click', () => {
    stopActive?.();
    options.onMultiplayer();
  });

  renderScore();
  engine.movePlayer('you', position.x, position.z, true);
  frame = requestAnimationFrame(tick);
  stopActive = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener('keydown', onKeyDown);
    window.removeEventListener('keyup', onKeyUp);
    engine.dispose();
  };
}

function paintSolved(mesh: THREE.Mesh | undefined): void {
  if (!mesh) return;
  const material = mesh.material;
  if (material instanceof THREE.MeshStandardMaterial) {
    material.color.setHex(0x157a8a);
    material.emissive.setHex(0x157a8a);
  }
}

function showCrash(error: unknown, retry: () => void): void {
  if (showingFallback) return;
  showingFallback = true;
  try {
    recordLocalError(localStorage, error);
  } catch {
    // The fallback still has to appear if storage itself fails.
  }
  try {
    stopActive?.();
  } catch {
    // Disposal can throw after the original failure.
  }
  stopActive = null;
  const app = document.getElementById('app');
  if (!app) return;
  renderFallback(app, () => {
    showingFallback = false;
    retry();
  });
}

function renderFallback(app: HTMLElement, retry: () => void): void {
  app.innerHTML = '';
  const box = document.createElement('div');
  box.className = 'solo-fallback';
  box.innerHTML = `
    <h1>Something went wrong</h1>
    <p>The world could not start. The note stays on this device and does not include personal details.</p>
    <button type="button" class="btn btn-primary" id="solo-retry">Try again</button>
  `;
  app.appendChild(box);
  box.querySelector('#solo-retry')?.addEventListener('click', retry);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

window.addEventListener('error', (event) => {
  const error = event.error instanceof Error ? event.error : new Error('Client error');
  if (!lastOptions) {
    recordLocalError(localStorage, error);
    return;
  }
  showCrash(error, () => startSolo(lastOptions as SoloOptions));
});
