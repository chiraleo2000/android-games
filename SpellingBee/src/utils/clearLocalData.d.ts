export const FRESH_START_MESSAGE: string;

export function clearAllLocalData(
  storages?: Array<{ clear?: () => void } | null | undefined>
): void;

export function confirmAndClearAllData(
  confirmed: boolean,
  onFreshStart?: () => void,
  storages?: Array<{ clear?: () => void } | null | undefined>
): { cleared: boolean; message: string };
