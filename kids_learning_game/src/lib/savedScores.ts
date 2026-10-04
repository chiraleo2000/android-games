import { Language, TopicKey } from "@/types/game";

const STORAGE_KEY = "wordblitz_saved_scores";

export interface SavedScoreRecord {
  score: number;
  wordsCompleted: number;
  language: Language;
  topic: TopicKey;
  savedAt: number;
}

export function loadSavedScores(): SavedScoreRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((row): row is SavedScoreRecord => {
      if (!row || typeof row !== "object") return false;
      const item = row as Partial<SavedScoreRecord>;
      return typeof item.score === "number" && typeof item.savedAt === "number";
    });
  } catch {
    return [];
  }
}

function isSameRecentScore(last: SavedScoreRecord | undefined, record: SavedScoreRecord): boolean {
  if (!last) return false;
  return last.score === record.score
    && last.wordsCompleted === record.wordsCompleted
    && last.language === record.language
    && last.topic === record.topic
    && Math.abs(last.savedAt - record.savedAt) < 5000;
}

export function rememberScore(record: SavedScoreRecord): void {
  try {
    const all = loadSavedScores();
    if (isSameRecentScore(all.at(-1), record)) return;
    all.push(record);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all.slice(-50)));
  } catch {
    // Private browsing can block storage. The score still shows on the result screen.
  }
}

export function clearSavedScores(): boolean {
  try {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem("wordblitz_error_log");
    return loadSavedScores().length === 0;
  } catch {
    return false;
  }
}

export function bestSavedScore(): number | null {
  const all = loadSavedScores();
  if (all.length === 0) return null;
  return all.reduce((max, row) => Math.max(max, row.score), 0);
}
