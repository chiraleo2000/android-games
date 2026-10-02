export interface KeyValueStore {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export const PROGRESS_KEY = 'learning-gen-alpha:solo-progress';
export const LOG_KEY = 'learning-gen-alpha:logs';

export interface SoloProgress {
  solved: string[];
  score: number;
  hintsUsed: Record<string, number>;
}

export function emptyProgress(): SoloProgress {
  return { solved: [], score: 0, hintsUsed: {} };
}

export function loadProgress(store: KeyValueStore): SoloProgress | null {
  const raw = store.getItem(PROGRESS_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<SoloProgress>;
    return {
      solved: Array.isArray(parsed.solved) ? parsed.solved.filter((id) => typeof id === 'string') : [],
      score: typeof parsed.score === 'number' ? parsed.score : 0,
      hintsUsed: parsed.hintsUsed && typeof parsed.hintsUsed === 'object' ? parsed.hintsUsed : {},
    };
  } catch {
    return null;
  }
}

export function saveProgress(store: KeyValueStore, progress: SoloProgress): void {
  store.setItem(PROGRESS_KEY, JSON.stringify(progress));
}

export const AUTH_TOKEN_KEY = 'authToken';

export function clearSoloData(store: KeyValueStore): void {
  store.removeItem(PROGRESS_KEY);
  store.removeItem(LOG_KEY);
  store.removeItem(AUTH_TOKEN_KEY);
}

function isAsciiLetter(char: string): boolean {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

function isAsciiDigit(char: string): boolean {
  return char >= '0' && char <= '9';
}

function isEmailLocalChar(char: string): boolean {
  return isAsciiLetter(char) || isAsciiDigit(char) || char === '.' || char === '_' || char === '%' || char === '+' || char === '-';
}

function isDomainChar(char: string): boolean {
  return isAsciiLetter(char) || isAsciiDigit(char) || char === '-';
}

function isLetterLabel(value: string): boolean {
  if (value.length < 2) return false;
  for (const char of value) {
    if (!isAsciiLetter(char)) return false;
  }
  return true;
}

function readLabel(message: string, start: number): number {
  let index = start;
  while (index < message.length && isDomainChar(message[index])) index += 1;
  return index === start ? -1 : index;
}

function domainEnd(message: string, start: number): number {
  const firstEnd = readLabel(message, start);
  if (firstEnd === -1) return -1;
  let index = firstEnd;
  let lastLabel = message.slice(start, firstEnd);
  let labels = 1;
  while (message[index] === '.') {
    const next = readLabel(message, index + 1);
    if (next === -1) break;
    lastLabel = message.slice(index + 1, next);
    index = next;
    labels += 1;
  }
  if (labels < 2 || !isLetterLabel(lastLabel)) return -1;
  return index;
}

function localStart(message: string, at: number, floor: number): number {
  let start = at;
  while (start > floor && isEmailLocalChar(message[start - 1])) start -= 1;
  return start === at ? -1 : start;
}

function redactEmails(message: string): string {
  let out = '';
  let index = 0;
  while (index < message.length) {
    const at = message.indexOf('@', index);
    if (at === -1) return out + message.slice(index);
    const start = localStart(message, at, index);
    const end = start === -1 ? -1 : domainEnd(message, at + 1);
    if (start === -1 || end === -1) {
      out += message.slice(index, at + 1);
      index = at + 1;
      continue;
    }
    out += `${message.slice(index, start)}[redacted]`;
    index = end;
  }
  return out;
}

export function sanitizeLog(message: string): string {
  return redactEmails(message)
    .replace(/[A-Za-z]:\\Users\\[^\\]+/g, '[local-user]')
    .replace(/\/Users\/[^/\s]+/g, '[local-user]');
}

function errorText(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string' && error.length > 0) return error;
  return 'error';
}

export function recordLocalError(store: KeyValueStore, error: unknown): void {
  const message = sanitizeLog(errorText(error));
  let existing: unknown[] = [];
  const raw = store.getItem(LOG_KEY);
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as unknown;
      if (Array.isArray(parsed)) existing = parsed;
    } catch {
      existing = [];
    }
  }
  existing.unshift({ t: Date.now(), message });
  store.setItem(LOG_KEY, JSON.stringify(existing.slice(0, 30)));
}
