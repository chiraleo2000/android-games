import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AppErrorBoundary } from '@/components/AppErrorBoundary';

export const metadata: Metadata = {
  title: 'Word Blitz! — Kids Learning Game',
  description: 'A fun word-typing game that helps kids learn vocabulary in English and Spanish!',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">
        <AppErrorBoundary>{children}</AppErrorBoundary>
      </body>
    </html>
  );
}
