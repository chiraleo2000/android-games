const API_URL = 'http://localhost:4012';

let authToken: string | null = null;

export function setToken(token: string) {
  authToken = token;
  localStorage.setItem('authToken', token);
}

export function getToken(): string | null {
  if (!authToken) {
    authToken = localStorage.getItem('authToken');
  }
  return authToken;
}

export function clearToken() {
  authToken = null;
  localStorage.removeItem('authToken');
}

async function request(method: string, path: string, body?: any) {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || data.message || 'Request failed');
  return data;
}

// Auth
export const api = {
  /** Kahoot-style instant join — no email/password needed */
  guestLogin: (nickname: string) =>
    request('POST', '/auth/guest', { nickname }),

  register: (username: string, email: string, password: string) =>
    request('POST', '/auth/register', { username, email, password }),

  login: (username: string, password: string) =>
    request('POST', '/auth/login', { username, password }),

  // Game sessions
  createSession: (settings?: any) =>
    request('POST', '/game/sessions', { settings }),

  joinSession: (joinCode: string) =>
    request('POST', '/game/sessions/join', { joinCode }),

  startGame: (sessionId: string) =>
    request('POST', `/game/sessions/${encodeURIComponent(sessionId)}/start`),

  submitSolution: (sessionId: string, activityId: string, answer: any, explanation: string) =>
    request('POST', `/game/sessions/${encodeURIComponent(sessionId)}/submit`, { activityId, answer, explanation }),

  completeStep: (sessionId: string, activityId: string, stepNumber: number) =>
    request('POST', `/game/sessions/${encodeURIComponent(sessionId)}/step`, { activityId, stepNumber }),

  requestHint: (sessionId: string, activityId: string) =>
    request('POST', `/game/sessions/${encodeURIComponent(sessionId)}/hint`, { activityId }),

  nextActivity: (sessionId: string) =>
    request('POST', `/game/sessions/${encodeURIComponent(sessionId)}/next`),

  endGame: (sessionId: string) =>
    request('POST', `/game/sessions/${encodeURIComponent(sessionId)}/end`),

  // Chat
  sendMessage: (sessionId: string, content: string) =>
    request('POST', `/chat/${encodeURIComponent(sessionId)}/send`, { content }),

  getChatHistory: (sessionId: string, limit?: number) =>
    request('GET', `/chat/${encodeURIComponent(sessionId)}/history?limit=${limit || 50}`),

  // Progress
  getProgress: (playerId: string) =>
    request('GET', `/progress/${encodeURIComponent(playerId)}`),

  getAchievements: (playerId: string) =>
    request('GET', `/progress/${encodeURIComponent(playerId)}/achievements`),
};
