import { Machine, emptyMachine } from './simulation';

export interface KeyValueStore {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export const STORAGE_KEYS = {
  machine: 'inventors-workshop:machine',
  progress: 'inventors-workshop:progress',
  tutorial: 'inventors-workshop:tutorial',
  logs: 'inventors-workshop:logs',
} as const;

const PART_TYPES = new Set([
  'gear-s',
  'gear-m',
  'gear-l',
  'motor',
  'pulley',
  'wheel',
  'spring',
  'hinge',
  'switch',
  'block',
]);

export function createMemoryStore(): KeyValueStore {
  const data = new Map<string, string>();
  return {
    getItem(key) {
      return data.has(key) ? data.get(key)! : null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
  };
}

/** localStorage when the browser allows it. A blocked store must not crash the workshop. */
export function browserStore(): KeyValueStore {
  try {
    const storage = window.localStorage;
    storage.getItem(STORAGE_KEYS.machine);
    return {
      getItem(key) {
        try {
          return storage.getItem(key);
        } catch {
          return null;
        }
      },
      setItem(key, value) {
        try {
          storage.setItem(key, value);
        } catch {
          /* quota or private mode: keep the session running */
        }
      },
      removeItem(key) {
        try {
          storage.removeItem(key);
        } catch {
          /* ignore */
        }
      },
    };
  } catch {
    return createMemoryStore();
  }
}

function isPart(value: unknown): value is Machine['parts'][number] {
  if (!value || typeof value !== 'object') return false;
  const part = value as Machine['parts'][number];
  return (
    typeof part.id === 'string' &&
    part.id.length > 0 &&
    typeof part.type === 'string' &&
    PART_TYPES.has(part.type) &&
    Number.isFinite(part.x) &&
    Number.isFinite(part.y) &&
    Number.isFinite(part.rotation)
  );
}

function isConnection(value: unknown): value is Machine['connections'][number] {
  if (!value || typeof value !== 'object') return false;
  const link = value as Machine['connections'][number];
  return typeof link.id === 'string' && link.id.length > 0 && typeof link.from === 'string' && typeof link.to === 'string';
}

function isMachine(value: unknown): value is Machine {
  if (!value || typeof value !== 'object') return false;
  const machine = value as Machine;
  if (!Array.isArray(machine.parts) || !Array.isArray(machine.connections)) return false;
  if (!machine.parts.every(isPart) || !machine.connections.every(isConnection)) return false;
  const ids = new Set(machine.parts.map((part) => part.id));
  if (ids.size !== machine.parts.length) return false;
  const linkIds = new Set(machine.connections.map((link) => link.id));
  if (linkIds.size !== machine.connections.length) return false;
  return machine.connections.every((link) => link.from !== link.to && ids.has(link.from) && ids.has(link.to));
}

export function saveMachine(store: KeyValueStore, machine: Machine): void {
  store.setItem(STORAGE_KEYS.machine, JSON.stringify(machine));
}

export function loadMachine(store: KeyValueStore): Machine | null {
  const raw = store.getItem(STORAGE_KEYS.machine);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as unknown;
    return isMachine(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function saveProgress(store: KeyValueStore, completedIds: string[]): void {
  store.setItem(STORAGE_KEYS.progress, JSON.stringify([...new Set(completedIds)]));
}

export function loadProgress(store: KeyValueStore): string[] {
  const raw = store.getItem(STORAGE_KEYS.progress);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

export function markTutorialSeen(store: KeyValueStore): void {
  store.setItem(STORAGE_KEYS.tutorial, 'seen');
}

export function tutorialSeen(store: KeyValueStore): boolean {
  return store.getItem(STORAGE_KEYS.tutorial) === 'seen';
}

export function machineToJson(machine: Machine): string {
  return JSON.stringify(machine, null, 2);
}

export function machineFromJson(text: string): Machine | null {
  try {
    const parsed = JSON.parse(text) as unknown;
    return isMachine(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

export function clearAllData(store: KeyValueStore): void {
  store.removeItem(STORAGE_KEYS.machine);
  store.removeItem(STORAGE_KEYS.progress);
  store.removeItem(STORAGE_KEYS.tutorial);
  store.removeItem(STORAGE_KEYS.logs);
}

export function freshMachine(): Machine {
  return emptyMachine();
}
