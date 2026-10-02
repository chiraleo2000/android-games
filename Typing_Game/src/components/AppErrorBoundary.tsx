import React from 'react';
import { recordDeviceLog } from '../utils/deviceLog.js';

interface AppErrorBoundaryState {
  hasError: boolean;
  resetKey: number;
}

export class AppErrorBoundary extends React.Component<
  { children: React.ReactNode },
  AppErrorBoundaryState
> {
  state: AppErrorBoundaryState = { hasError: false, resetKey: 0 };

  static getDerivedStateFromError(): Partial<AppErrorBoundaryState> {
    return { hasError: true };
  }

  componentDidCatch(error: Error): void {
    recordDeviceLog({ name: error.name });
  }

  private tryAgain = (): void => {
    this.setState((current) => ({ hasError: false, resetKey: current.resetKey + 1 }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <div role="alert" style={{ padding: 24, fontFamily: 'Nunito, sans-serif' }}>
          <p>Something went wrong.</p>
          <button type="button" onClick={this.tryAgain}>
            Try again
          </button>
        </div>
      );
    }

    return <React.Fragment key={this.state.resetKey}>{this.props.children}</React.Fragment>;
  }
}
