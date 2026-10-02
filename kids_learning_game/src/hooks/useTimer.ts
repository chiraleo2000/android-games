'use client';

import { useEffect } from 'react';
import { useGameStore } from '@/store/useGameStore';

export function useTimer() {
  const status = useGameStore((s) => s.status);
  const tick = useGameStore((s) => s.tick);

  useEffect(() => {
    if (status !== 'PLAYING') return;
    const id = setInterval(() => tick(), 1000);
    return () => clearInterval(id);
  }, [status, tick]);
}
