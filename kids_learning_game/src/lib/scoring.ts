export const BASE_POINTS = 10;
export const COMBO_WINDOW_MS = 10000;

export function calculatePoints(currentScore: number, lastSuccessTime: number | null): number {
  if (lastSuccessTime !== null && Date.now() - lastSuccessTime <= COMBO_WINDOW_MS) {
    return Math.floor(currentScore * 0.5);
  }
  return BASE_POINTS;
}
