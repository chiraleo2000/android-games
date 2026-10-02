/** Single in-app privacy policy URL. Replace the host before store release. */
export const PRIVACY_POLICY_URL = 'https://example.com/musical-instruments/privacy';

export function sanitizeLog(message: string): string {
  return message
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, '[redacted]')
    .replace(/[A-Za-z]:\\Users\\[^\\]+/g, '[local-user]')
    .replace(/\/Users\/[^/\s]+/g, '[local-user]');
}
