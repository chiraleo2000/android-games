import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 p-6">
      <article className="max-w-lg mx-auto space-y-4">
        <h1 className="text-3xl font-black">Privacy Policy</h1>
        <p><strong>Effective date:</strong> [EFFECTIVE_DATE]</p>
        <p>This policy describes how [LEGAL_NAME] handles information in Word Blitz (package com.wordblitz.kids).</p>
        <h2 className="text-xl font-black">On-device scores only</h2>
        <p>Word Blitz can save game scores on this device. Those scores stay on the device. The app does not create an account and does not send scores, typed words, or any other player information off the device.</p>
        <h2 className="text-xl font-black">No ads and no off-device transmission</h2>
        <p>There are no ads and no analytics. Nothing you type is logged off the device.</p>
        <h2 className="text-xl font-black">Android INTERNET permission</h2>
        <p>The Android package includes the INTERNET permission because the Capacitor Android WebView loads the bundled game from a local https://localhost address inside the app. The permission is not used to contact a server. The game works offline.</p>
        <h2 className="text-xl font-black">Children</h2>
        <p>Word Blitz is a kids typing game in English and Spanish. It does not collect personal information from children or anyone else.</p>
        <h2 className="text-xl font-black">Clearing scores</h2>
        <p>Settings and the game-over screen can clear saved scores. After you confirm, the scores are deleted and are not restored.</p>
        <p>Contact: [SUPPORT_EMAIL]</p>
        <p>[LEGAL_NAME]</p>
        <Link href="/" className="inline-block font-black text-violet-700 underline">Back to menu</Link>
      </article>
    </main>
  );
}
