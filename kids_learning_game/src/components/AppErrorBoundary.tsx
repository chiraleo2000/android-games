"use client";

import React from "react";

interface State {
  hasError: boolean;
}

function describeError(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "unknown";
}

function recordClientError(error: unknown): void {
  const raw = describeError(error);
  const message = raw.replace(/[A-Za-z]:\\[^\s]+/g, "[path]").slice(0, 240);
  try {
    const stored = localStorage.getItem("wordblitz_error_log");
    const list: unknown = stored ? JSON.parse(stored) : [];
    const next = Array.isArray(list) ? list : [];
    next.push({ t: Date.now(), message });
    localStorage.setItem("wordblitz_error_log", JSON.stringify(next.slice(-20)));
  } catch {
    // A logging failure must not replace the fallback screen.
  }
}

export class AppErrorBoundary extends React.Component<React.PropsWithChildren, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error): void {
    recordClientError(error);
  }

  componentDidMount(): void {
    window.addEventListener("error", this.onWindowError);
    window.addEventListener("unhandledrejection", this.onRejection);
  }

  componentWillUnmount(): void {
    window.removeEventListener("error", this.onWindowError);
    window.removeEventListener("unhandledrejection", this.onRejection);
  }

  onWindowError = (event: ErrorEvent): void => {
    if (!event.error) return;
    recordClientError(event.error);
    this.setState({ hasError: true });
  };

  onRejection = (event: PromiseRejectionEvent): void => {
    recordClientError(event.reason);
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-violet-700 text-white flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-4xl font-black mb-3">Something went wrong</h1>
          <p className="text-lg font-semibold mb-6">Your saved scores stay on this device.</p>
          <button
            type="button"
            className="bg-white text-violet-700 font-black text-xl px-6 py-4 rounded-2xl"
            onClick={() => {
              this.setState({ hasError: false });
              window.location.href = "/";
            }}
          >
            Back to menu
          </button>
        </main>
      );
    }
    return this.props.children;
  }
}
