import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-800 p-6">
      <article className="max-w-lg mx-auto space-y-4">
        <h1 className="text-3xl font-black">Terms of Service</h1>
        <p><strong>Effective date:</strong> [EFFECTIVE_DATE]</p>
        <p>These terms govern Word Blitz, published by [LEGAL_NAME].</p>
        <p>Word Blitz is an offline kids typing game in English and Spanish. Saved scores stay on your device. There is no account, no ads, and no off-device transmission of player information.</p>
        <p>You can clear saved scores from Settings or the game-over screen. After you confirm, those scores are deleted and are not restored.</p>
        <p>The app is provided as-is. [LEGAL_NAME] is not liable for scores you delete on your device.</p>
        <p>Contact: [SUPPORT_EMAIL]</p>
        <Link href="/" className="inline-block font-black text-violet-700 underline">Back to menu</Link>
      </article>
    </main>
  );
}
