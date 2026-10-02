import { describe, expect, it } from 'vitest';
import { CHALLENGES, challengeWon } from './challenges';
import { gearRatio, outputSpeed, type Machine, type PartType } from './simulation';
import { WORKSPACE_TARGET } from './simulation';
import {
  clearAllData,
  createMemoryStore,
  loadMachine,
  loadProgress,
  markTutorialSeen,
  saveMachine,
  saveProgress,
  STORAGE_KEYS,
  tutorialSeen,
} from './storage';

function part(id: string, type: PartType, x = 0, y = 0): Machine['parts'][number] {
  return { id, type, x, y, rotation: 0 };
}

function machine(specs: Array<[string, PartType, number?, number?]>, links: Array<[string, string]>): Machine {
  return {
    parts: specs.map(([id, type, x, y]) => part(id, type, x ?? 0, y ?? 0)),
    connections: links.map(([from, to], index) => ({ id: `c${index}`, from, to })),
  };
}

describe('gear ratio math', () => {
  it('turns a larger driven gear slower than a smaller one', () => {
    const driverTeeth = 12;
    const driverSpeed = 10;
    const small = Math.abs(outputSpeed(driverSpeed, driverTeeth, 12));
    const large = Math.abs(outputSpeed(driverSpeed, driverTeeth, 36));
    expect(gearRatio(driverTeeth, 36)).toBeCloseTo(12 / 36);
    expect(large).toBeCloseTo(driverSpeed * (12 / 36));
    expect(large).toBeLessThan(small);
  });

  it('propagates a slower large gear in a connected machine', () => {
    const built = machine(
      [
        ['motor', 'motor'],
        ['small', 'gear-s'],
        ['large', 'gear-l'],
      ],
      [
        ['motor', 'small'],
        ['small', 'large'],
      ],
    );
    const challenge = CHALLENGES.find((item) => item.id === 'transmit-large-slower');
    expect(challenge).toBeDefined();
    expect(challengeWon(challenge!, built)).toBe(true);
    expect(challengeWon(challenge!, machine([['motor', 'motor']], []))).toBe(false);
  });
});

describe('challenge win checks', () => {
  const solutions: Record<string, Machine> = {
    'transmit-large-slower': machine(
      [
        ['m', 'motor'],
        ['s', 'gear-s'],
        ['l', 'gear-l'],
      ],
      [
        ['m', 's'],
        ['m', 'l'],
      ],
    ),
    'transmit-small-faster': machine(
      [
        ['m', 'motor'],
        ['med', 'gear-m'],
        ['s', 'gear-s'],
      ],
      [
        ['m', 'med'],
        ['med', 's'],
      ],
    ),
    'transmit-belt': machine(
      [
        ['m', 'motor'],
        ['p', 'pulley'],
        ['w', 'wheel'],
      ],
      [
        ['m', 'p'],
        ['m', 'w'],
      ],
    ),
    'transmit-three-gears': machine(
      [
        ['m', 'motor'],
        ['s', 'gear-s'],
        ['med', 'gear-m'],
        ['l', 'gear-l'],
      ],
      [
        ['m', 's'],
        ['m', 'med'],
        ['m', 'l'],
      ],
    ),
    'transmit-two-wheels': machine(
      [
        ['m', 'motor'],
        ['w1', 'wheel'],
        ['w2', 'wheel'],
      ],
      [
        ['m', 'w1'],
        ['m', 'w2'],
      ],
    ),
    'lift-spring': machine(
      [
        ['m', 'motor'],
        ['sp', 'spring'],
      ],
      [['m', 'sp']],
    ),
    'lift-spring-high': machine(
      [
        ['m', 'motor'],
        ['sp', 'spring'],
      ],
      [['m', 'sp']],
    ),
    'lift-through-large': machine(
      [
        ['m', 'motor'],
        ['l', 'gear-l'],
        ['sp', 'spring'],
      ],
      [
        ['m', 'l'],
        ['l', 'sp'],
      ],
    ),
    'lift-hinge': machine(
      [
        ['m', 'motor'],
        ['h', 'hinge'],
      ],
      [['m', 'h']],
    ),
    'lift-two-springs': machine(
      [
        ['m', 'motor'],
        ['a', 'spring'],
        ['b', 'spring'],
      ],
      [
        ['m', 'a'],
        ['m', 'b'],
      ],
    ),
    'switch-one': machine(
      [
        ['m', 'motor'],
        ['sw', 'switch'],
      ],
      [['m', 'sw']],
    ),
    'switch-wheel': machine(
      [
        ['m', 'motor'],
        ['sw', 'switch'],
        ['w', 'wheel'],
      ],
      [
        ['m', 'sw'],
        ['m', 'w'],
      ],
    ),
    'switch-two': machine(
      [
        ['m', 'motor'],
        ['a', 'switch'],
        ['b', 'switch'],
      ],
      [
        ['m', 'a'],
        ['m', 'b'],
      ],
    ),
    'switch-ratio': machine(
      [
        ['m', 'motor'],
        ['sw', 'switch'],
        ['s', 'gear-s'],
        ['l', 'gear-l'],
      ],
      [
        ['m', 'sw'],
        ['m', 's'],
        ['m', 'l'],
      ],
    ),
    'switch-hinge': machine(
      [
        ['m', 'motor'],
        ['sw', 'switch'],
        ['h', 'hinge'],
      ],
      [
        ['m', 'sw'],
        ['m', 'h'],
      ],
    ),
    'target-spin': machine(
      [
        ['m', 'motor'],
        ['w', 'wheel'],
      ],
      [['m', 'w']],
    ),
    'target-zone': machine(
      [
        ['m', 'motor', 40, 40],
        ['w', 'wheel', WORKSPACE_TARGET.x, WORKSPACE_TARGET.y],
      ],
      [['m', 'w']],
    ),
    'target-speed': machine(
      [
        ['m', 'motor'],
        ['l', 'gear-l'],
      ],
      [['m', 'l']],
    ),
    'target-height': machine(
      [
        ['m', 'motor'],
        ['l', 'gear-l'],
        ['sp', 'spring'],
      ],
      [
        ['m', 'l'],
        ['l', 'sp'],
      ],
    ),
    'target-combo': machine(
      [
        ['m', 'motor'],
        ['sw', 'switch'],
        ['sp', 'spring'],
        ['w', 'wheel'],
      ],
      [
        ['m', 'sw'],
        ['m', 'sp'],
        ['m', 'w'],
      ],
    ),
  };

  it('defines 20 challenges across four themes', () => {
    expect(CHALLENGES).toHaveLength(20);
    expect(new Set(CHALLENGES.map((challenge) => challenge.id)).size).toBe(20);
    expect(new Set(CHALLENGES.map((challenge) => JSON.stringify(challenge.rule))).size).toBe(20);
    const themes = new Set(CHALLENGES.map((challenge) => challenge.theme));
    expect(themes).toEqual(new Set(['transmit', 'lift', 'switch', 'target']));
    for (const challenge of CHALLENGES) {
      expect(challenge.prompt.length).toBeGreaterThan(20);
      expect(challengeWon(challenge, { parts: [], connections: [] })).toBe(false);
    }
  });

  it('accepts a working machine for every challenge', () => {
    for (const challenge of CHALLENGES) {
      expect(solutions[challenge.id], challenge.id).toBeDefined();
      expect(challengeWon(challenge, solutions[challenge.id]), challenge.id).toBe(true);
    }
  });
});

describe('clear data', () => {
  it('removes the saved machine and does not restore progress', () => {
    const store = createMemoryStore();
    const saved = machine(
      [
        ['m', 'motor'],
        ['s', 'gear-s'],
      ],
      [['m', 's']],
    );
    saveMachine(store, saved);
    saveProgress(store, ['transmit-large-slower']);
    markTutorialSeen(store);
    store.setItem(STORAGE_KEYS.logs, '[{"message":"local"}]');
    expect(loadMachine(store)?.parts).toHaveLength(2);
    expect(loadProgress(store)).toContain('transmit-large-slower');

    clearAllData(store);

    expect(store.getItem(STORAGE_KEYS.machine)).toBeNull();
    expect(store.getItem(STORAGE_KEYS.progress)).toBeNull();
    expect(store.getItem(STORAGE_KEYS.tutorial)).toBeNull();
    expect(store.getItem(STORAGE_KEYS.logs)).toBeNull();
    expect(loadMachine(store)).toBeNull();
    expect(loadProgress(store)).toEqual([]);
    expect(tutorialSeen(store)).toBe(false);
  });
});
