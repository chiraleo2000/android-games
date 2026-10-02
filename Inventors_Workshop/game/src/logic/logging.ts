import { STORAGE_KEYS, type KeyValueStore } from './storage';

/** Drop emails and home-directory paths so on-device logs do not keep personal content. */
export function sanitizeLog(message: string): string {
  return message
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, '[redacted]')
    .replace(/[A-Za-z]:\\Users\\[^\\]+/g, '[local-user]')
    .replace(/\/Users\/[^/\s]+/g, '[local-user]');
}

export function recordLocalError(store: KeyValueStore, error: unknown): void {
  const message = sanitizeLog(error instanceof Error ? error.message : 'Unexpected error');
  const entry = { t: Date.now(), message };
  let existing: unknown[] = [];
  const raw = store.getItem(STORAGE_KEYS.logs);
  if (raw) {
    try {
      const parsed = JSON.parse(raw) as unknown;
      if (Array.isArray(parsed)) existing = parsed;
    } catch {
      existing = [];
    }
  }
  existing.unshift(entry);
  store.setItem(STORAGE_KEYS.logs, JSON.stringify(existing.slice(0, 30)));
}
