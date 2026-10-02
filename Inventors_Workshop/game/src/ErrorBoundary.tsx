import { Component, type ReactNode } from 'react';
import { recordLocalError } from './logic/logging';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
  nonce: number;
}

export class RootErrorBoundary extends Component<Props, State> {
  state: State = { error: null, nonce: 0 };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error };
  }

  componentDidCatch(error: Error): void {
    try {
      recordLocalError(window.localStorage, error);
    } catch {
      /* storage may be unavailable; keep the fallback on screen */
    }
  }

  retry = (): void => {
    this.setState((prev) => ({ error: null, nonce: prev.nonce + 1 }));
  };

  render(): ReactNode {
    if (this.state.error) {
      return (
        <div className="fallback">
          <h1>Something went wrong</h1>
          <p>The workshop hit a problem on this device. Saved machines stay here, and this note does not include personal details.</p>
          <button type="button" onClick={this.retry}>
            Try again
          </button>
        </div>
      );
    }
    return <div key={this.state.nonce}>{this.props.children}</div>;
  }
}
