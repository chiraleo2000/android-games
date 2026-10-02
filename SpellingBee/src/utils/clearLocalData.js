export const FRESH_START_MESSAGE =
  'All local progress and preferences were deleted. Starting fresh.';

export function clearAllLocalData(storages) {
  const targets = storages ?? [globalThis.localStorage, globalThis.sessionStorage];
  for (const storage of targets) {
    if (storage && typeof storage.clear === 'function') {
      storage.clear();
    }
  }
}

export function confirmAndClearAllData(confirmed, onFreshStart, storages) {
  if (!confirmed) {
    return { cleared: false, message: '' };
  }

  clearAllLocalData(storages);
  if (typeof onFreshStart === 'function') {
    onFreshStart();
  }

  return { cleared: true, message: FRESH_START_MESSAGE };
}
