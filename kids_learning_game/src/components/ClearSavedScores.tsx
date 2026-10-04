"use client";

import { useState } from "react";
import { clearSavedScores } from "@/lib/savedScores";

type ClearSavedScoresProps = Readonly<{
  onCleared?: () => void;
}>;

export function ClearSavedScores({ onCleared }: ClearSavedScoresProps) {
  const [step, setStep] = useState<"idle" | "confirm" | "done" | "failed">("idle");

  if (step === "confirm") {
    return (
      <div className="w-full bg-white/15 rounded-2xl p-4 text-left">
        <p className="font-bold mb-3">Delete all saved scores on this device?</p>
        <div className="flex gap-2">
          <button
            type="button"
            className="flex-1 bg-red-500 text-white font-black py-3 rounded-xl"
            onClick={() => {
              if (!clearSavedScores()) {
                setStep("failed");
                return;
              }
              setStep("done");
              onCleared?.();
            }}
          >
            Delete scores
          </button>
          <button
            type="button"
            className="flex-1 bg-white text-violet-700 font-black py-3 rounded-xl"
            onClick={() => setStep("idle")}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  if (step === "failed") {
    return (
      <div className="w-full bg-white/15 rounded-2xl p-4 text-left">
        <p className="font-bold mb-3">Saved scores are still on this device.</p>
        <button
          type="button"
          className="w-full bg-white text-violet-700 font-black py-3 rounded-xl"
          onClick={() => setStep("confirm")}
        >
          Try again
        </button>
      </div>
    );
  }

  if (step === "done") {
    return (
      <p className="font-bold bg-white/15 rounded-2xl p-4">
        Saved scores cleared. Nothing was restored.
      </p>
    );
  }

  return (
    <button
      type="button"
      className="w-full bg-white/20 text-white font-black text-lg py-4 rounded-2xl"
      onClick={() => setStep("confirm")}
    >
      Clear saved scores
    </button>
  );
}
