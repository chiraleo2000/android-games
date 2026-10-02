import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RootErrorBoundary } from './ErrorBoundary';
import { WorkshopApp } from './App';
import './styles.css';

const root = document.getElementById('root');
if (!root) {
  throw new Error('Missing root element');
}

createRoot(root).render(
  <StrictMode>
    <RootErrorBoundary>
      <WorkshopApp />
    </RootErrorBoundary>
  </StrictMode>,
);
