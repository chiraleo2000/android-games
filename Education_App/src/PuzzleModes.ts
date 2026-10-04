/**
 * Pattern, deduction, and spatial rounds.
 * Each round ends in a win or a loss the result screen can show.
 */

export type PlayMode = 'maze' | 'pattern' | 'deduction' | 'spatial';

export interface PuzzleOutcome {
  success: boolean;
  reason: string;
  tip: string;
}

interface DeductionPuzzle {
  houses: string[];
  rows: string[];
  clues: string[];
  solution: Record<string, string>;
}

const PATTERN_SHAPES = ['▲', '●', '■', '◆', '★', '⬟'];
const SPATIAL_SHAPES = ['▲', '◆'];
const OPTION_POOL = ['▲', '▶', '▼', '◀', '●', '■', '◆', '★', '⬟'];

const ROTATIONS: Record<string, string[]> = {
  '▲': ['▲', '▶', '▼', '◀'],
  '■': ['■'],
  '◆': ['◆', '▼', '◀', '▲'],
  '★': ['★'],
  '⬟': ['⬟'],
  '●': ['●']
};

const DEDUCTIONS: DeductionPuzzle[] = [
  {
    houses: ['Red', 'Blue', 'Green'],
    rows: ['Dog', 'Cat', 'Bird'],
    clues: [
      'The dog lives in the red house.',
      'The cat lives in the blue house.',
      'The bird does not live in the red house.'
    ],
    solution: { Dog: 'Red', Cat: 'Blue', Bird: 'Green' }
  },
  {
    houses: ['Yellow', 'Green', 'Blue'],
    rows: ['Fish', 'Bird', 'Cat'],
    clues: [
      'The fish lives in the yellow house.',
      'The bird lives in the green house.',
      'The cat does not live in the yellow house.'
    ],
    solution: { Fish: 'Yellow', Bird: 'Green', Cat: 'Blue' }
  },
  {
    houses: ['Orange', 'Purple', 'White'],
    rows: ['Fox', 'Rabbit', 'Owl'],
    clues: [
      'The fox lives in the orange house.',
      'The rabbit lives in the purple house.',
      'The owl does not live in the orange house.'
    ],
    solution: { Fox: 'Orange', Rabbit: 'Purple', Owl: 'White' }
  }
];

function rotateShape(shape: string, rotations: number): string {
  const shapes = ROTATIONS[shape] ?? [shape];
  const index = ((rotations % shapes.length) + shapes.length) % shapes.length;
  return shapes[index];
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function choiceOptions(correct: string): string[] {
  const options = [correct];
  for (const shape of shuffle(OPTION_POOL)) {
    if (options.length >= 4) break;
    if (!options.includes(shape)) options.push(shape);
  }
  return shuffle(options);
}

export class PuzzleModes {
  private mode: Exclude<PlayMode, 'maze'> = 'pattern';
  private locked = false;
  private selection: Record<string, string> = {};
  private puzzle: DeductionPuzzle = DEDUCTIONS[0];

  constructor(
    private readonly onOutcome: (outcome: PuzzleOutcome) => void,
    private readonly onHint: (message: string) => void
  ) {
    document.querySelectorAll('.hint-btn').forEach((node) => {
      node.addEventListener('click', () => {
        const button = node as HTMLButtonElement;
        const extra = button.dataset.extra;
        const hint = button.parentElement?.querySelector('.hint-text');
        if (hint && extra) hint.textContent = extra;
        this.onHint(extra || hint?.textContent || 'Look at the clue again.');
      });
    });
    document.getElementById('btn-deduction-submit')?.addEventListener('click', () => {
      this.submitDeduction();
    });
  }

  public start(mode: Exclude<PlayMode, 'maze'>, round: number): void {
    this.mode = mode;
    this.locked = false;
    this.selection = {};
    const index = Math.max(0, round - 1);
    if (mode === 'pattern') this.buildPattern(index);
    else if (mode === 'deduction') this.buildDeduction(index);
    else this.buildSpatial(index);
  }

  public resetAttempt(): void {
    this.locked = false;
    this.selection = {};
    this.setSubmitEnabled(true);
    if (this.mode === 'deduction') {
      this.paintDeduction(false);
      return;
    }
    document.querySelectorAll('.pattern-option, .spatial-option').forEach((node) => {
      const button = node as HTMLButtonElement;
      button.classList.remove('correct', 'wrong');
      button.disabled = false;
    });
  }

  private buildPattern(index: number): void {
    const grid = document.getElementById('pattern-grid');
    const options = document.getElementById('pattern-options');
    if (!grid || !options) return;
    grid.replaceChildren();
    options.replaceChildren();

    const base = PATTERN_SHAPES[index % PATTERN_SHAPES.length];
    const missingIndex = Math.floor(Math.random() * 9);
    const correct = rotateShape(base, missingIndex % 3);

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.className = 'pattern-cell';
      cell.textContent = i === missingIndex ? '?' : rotateShape(base, i % 3);
      grid.appendChild(cell);
    }
    this.fillChoices(options, 'pattern-option', correct, {
      success: 'Pattern solved!',
      failure: 'That shape does not continue the pattern.',
      tip: 'Each column repeats the same turn. Match the question mark to that turn.'
    });
  }

  private buildSpatial(index: number): void {
    const options = document.getElementById('spatial-options');
    const shape1 = document.getElementById('spatial-shape-1');
    const shape2 = document.getElementById('spatial-shape-2');
    const shape3 = document.getElementById('spatial-shape-3');
    if (!options || !shape1 || !shape2 || !shape3) return;
    options.replaceChildren();

    const base = SPATIAL_SHAPES[index % SPATIAL_SHAPES.length];
    const start = index % 4;
    shape1.textContent = rotateShape(base, start);
    shape2.textContent = rotateShape(base, start + 1);
    shape3.textContent = rotateShape(base, start + 2);
    const correct = rotateShape(base, start + 3);
    this.fillChoices(options, 'spatial-option', correct, {
      success: 'Spatial pattern solved!',
      failure: 'That is not the next quarter turn.',
      tip: 'Each arrow is one quarter turn clockwise.'
    });
  }

  private fillChoices(
    host: HTMLElement,
    className: string,
    correct: string,
    copy: { success: string; failure: string; tip: string }
  ): void {
    for (const answer of choiceOptions(correct)) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = className;
      button.textContent = answer;
      button.addEventListener('click', () => {
        if (this.locked) return;
        this.locked = true;
        const right = answer === correct;
        host.querySelectorAll('button').forEach((node) => {
          const choice = node as HTMLButtonElement;
          choice.disabled = true;
          if (choice.textContent === correct) choice.classList.add('correct');
          else if (choice === button && !right) choice.classList.add('wrong');
        });
        this.onOutcome({
          success: right,
          reason: right ? copy.success : copy.failure,
          tip: copy.tip
        });
      });
      host.appendChild(button);
    }
  }

  private buildDeduction(index: number): void {
    this.puzzle = DEDUCTIONS[index % DEDUCTIONS.length];
    this.selection = {};
    const clues = document.getElementById('deduction-clues');
    if (clues) {
      clues.replaceChildren();
      for (const text of this.puzzle.clues) {
        const line = document.createElement('div');
        line.className = 'deduction-clue';
        line.textContent = text;
        clues.appendChild(line);
      }
    }
    this.paintDeduction(false);
    this.setSubmitEnabled(true);
  }

  private paintDeduction(reveal: boolean): void {
    const grid = document.getElementById('deduction-grid');
    if (!grid) return;
    grid.replaceChildren();

    const header = document.createElement('div');
    header.className = 'deduction-row';
    const corner = document.createElement('div');
    corner.className = 'deduction-label';
    corner.textContent = 'Pet';
    header.appendChild(corner);
    for (const house of this.puzzle.houses) {
      const label = document.createElement('div');
      label.className = 'deduction-house';
      label.textContent = house;
      header.appendChild(label);
    }
    grid.appendChild(header);

    for (const row of this.puzzle.rows) {
      const line = document.createElement('div');
      line.className = 'deduction-row';
      const label = document.createElement('div');
      label.className = 'deduction-label';
      label.textContent = row;
      line.appendChild(label);
      for (const house of this.puzzle.houses) {
        const cell = document.createElement('button');
        cell.type = 'button';
        cell.className = 'deduction-cell';
        const selected = this.selection[row] === house;
        if (selected) cell.classList.add('true');
        if (reveal && selected && this.puzzle.solution[row] !== house) {
          cell.classList.remove('true');
          cell.classList.add('false');
        }
        cell.textContent = selected ? '✓' : '';
        cell.setAttribute('aria-label', `${row} in the ${house} house`);
        cell.disabled = this.locked;
        cell.addEventListener('click', () => {
          if (this.locked) return;
          this.selection[row] = house;
          this.paintDeduction(false);
        });
        line.appendChild(cell);
      }
      grid.appendChild(line);
    }
  }

  private submitDeduction(): void {
    if (this.mode !== 'deduction' || this.locked) return;
    const missing = this.puzzle.rows.some((row) => !this.selection[row]);
    if (missing) {
      this.onHint('Choose one house for every pet, then check the answer.');
      return;
    }
    const correct = this.puzzle.rows.every((row) => this.selection[row] === this.puzzle.solution[row]);
    this.locked = true;
    this.setSubmitEnabled(false);
    this.paintDeduction(true);
    this.onOutcome({
      success: correct,
      reason: correct ? 'The clues all fit.' : 'One of those houses contradicts a clue.',
      tip: 'Cross out a house when a clue says a pet does not live there, then place the rest.'
    });
  }

  private setSubmitEnabled(enabled: boolean): void {
    const button = document.getElementById('btn-deduction-submit') as HTMLButtonElement | null;
    if (button) button.disabled = !enabled;
  }
}
