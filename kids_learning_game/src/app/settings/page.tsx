'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ClearSavedScores } from '@/components/ClearSavedScores';
import { LEGAL_LINKS } from '@/lib/legal';
import { SavedScoreRecord, loadSavedScores } from '@/lib/savedScores';

function savedScoreSummary(count: number): string {
  if (count === 0) return 'No saved scores.';
  if (count === 1) return '1 saved score.';
  return `${count} saved scores.`;
}

export default function SettingsPage() {
  const [scores, setScores] = useState<SavedScoreRecord[]>([]);

  useEffect(() => {
    setScores(loadSavedScores());
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-violet-600 to-indigo-700 text-white p-6">
      <div className="max-w-sm mx-auto flex flex-col gap-4">
        <h1 className="text-4xl font-black">Settings</h1>
        <p className="font-semibold text-white/80">
          Saved scores stay on this device. There is no account, and scores are not sent anywhere.
        </p>
        <p className="font-black">
          {savedScoreSummary(scores.length)}
        </p>
        {scores.length > 0 && (
          <ul className="bg-white/15 rounded-2xl p-4 space-y-2">
            {scores.slice().reverse().slice(0, 8).map((row) => (
              <li key={`${row.savedAt}-${row.score}`} className="font-bold">
                {row.score.toLocaleString()} · {row.language === 'es' ? 'Español' : 'English'} · {row.topic}
              </li>
            ))}
          </ul>
        )}
        <ClearSavedScores onCleared={() => setScores([])} />
        <div className="flex gap-4 font-bold">
          <Link href={LEGAL_LINKS.privacy} className="underline underline-offset-4">Privacy Policy</Link>
          <Link href={LEGAL_LINKS.terms} className="underline underline-offset-4">Terms of Service</Link>
        </div>
        <Link href="/" className="bg-white text-violet-700 font-black text-center text-xl py-4 rounded-2xl">
          Back to menu
        </Link>
      </div>
    </main>
  );
}
