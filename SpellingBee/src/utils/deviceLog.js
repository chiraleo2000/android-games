const LOG_KEY = 'on-device-logs';

function isBlockedKey(key) {
  const normalized = String(key).toLowerCase().replace(/[^a-z]/g, '');
  return (
    normalized.includes('useragent') ||
    normalized === 'answer' ||
    normalized === 'answers' ||
    normalized === 'typedanswer' ||
    normalized === 'typedanswers' ||
    normalized === 'typed' ||
    normalized === 'input'
  );
}

export function sanitizeLogRecord(value) {
  if (Array.isArray(value)) {
    return value.map((item) => sanitizeLogRecord(item));
  }

  if (value && typeof value === 'object') {
    const safe = {};
    for (const [key, child] of Object.entries(value)) {
      if (isBlockedKey(key)) continue;
      safe[key] = sanitizeLogRecord(child);
    }
    return safe;
  }

  return value;
}

export function recordDeviceLog(entry, storage = globalThis.localStorage) {
  const safe = sanitizeLogRecord(entry);
  const record = { message: 'Unexpected error' };
  if (safe && typeof safe === 'object' && !Array.isArray(safe) && typeof safe.name === 'string') {
    record.name = safe.name;
  }

  if (!storage || typeof storage.getItem !== 'function' || typeof storage.setItem !== 'function') {
    return record;
  }

  let logs = [];
  try {
    const parsed = JSON.parse(storage.getItem(LOG_KEY) || '[]');
    if (Array.isArray(parsed)) logs = parsed;
  } catch {
    logs = [];
  }

  logs.push(record);
  storage.setItem(LOG_KEY, JSON.stringify(logs.slice(-30)));
  return record;
}
