export function sanitizeLogRecord(value: unknown): unknown;

export function recordDeviceLog(
  entry: unknown,
  storage?: {
    getItem: (key: string) => string | null;
    setItem: (key: string, value: string) => void;
  } | null
): { message: string; name?: string };
