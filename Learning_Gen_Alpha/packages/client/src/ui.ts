/**
 * UI Renderer — builds and manages all game screens
 */

// Toast notification system
const toastContainer = document.createElement('div');
toastContainer.className = 'toast-container';
document.body.appendChild(toastContainer);

export function showToast(message: string, type: 'info' | 'success' | 'error' | 'warning' = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  toastContainer.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

/** Clear app container and return it */
function getApp(): HTMLDivElement {
  const app = document.getElementById('app') as HTMLDivElement;
  app.innerHTML = '';
  return app;
}

/** Utility: create element with optional className and innerHTML */
function el(tag: string, className?: string, html?: string): HTMLElement {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html) e.innerHTML = html;
  return e;
}

// ─── JOIN SCREEN (Kahoot-style — no login required) ───────────────────────
export interface JoinCallbacks {
  onCreateGame: (nickname: string) => void | Promise<void>;
  onJoinGame: (nickname: string, joinCode: string) => void | Promise<void>;
  onSolo?: () => void;
}

export function renderJoinScreen(callbacks: JoinCallbacks) {
  const app = getApp();
  const screen = el('div', 'join-screen');

  screen.innerHTML = `
    <div class="join-hero">
      <div class="join-logo">🎮</div>
      <h1 class="join-title">Learning Gen Alpha</h1>
      <p class="join-subtitle">AI Era Multiplayer Puzzle Game</p>
    </div>

    <div class="join-card card">
      <label class="join-label" for="join-nickname">Your nickname</label>
      <input
        class="input join-nickname-input"
        id="join-nickname"
        placeholder="e.g. CoolKid99"
        maxlength="20"
        autocomplete="off"
        autocapitalize="none"
        spellcheck="false"
      />
      <div class="join-error" id="join-error"></div>

      <button class="btn btn-primary join-host-btn" id="join-solo">
        Play solo
      </button>
      <p class="join-subtitle">Solo puzzles start immediately on this device. Online play is optional.</p>

      <button class="btn btn-secondary join-host-btn" id="join-create">
        Host a Game
      </button>

      <div class="join-divider"><span>— or join a game —</span></div>

      <div class="join-code-row">
        <input
          class="input"
          id="join-code"
          placeholder="Game PIN"
          maxlength="6"
          autocomplete="off"
          autocapitalize="characters"
          style="text-transform:uppercase;text-align:center;font-size:22px;letter-spacing:6px;flex:1"
        />
        <button class="btn btn-success" id="join-enter">▶ Enter</button>
      </div>
    </div>
  `;

  app.appendChild(screen);

  function nicknameEl() { return document.getElementById('join-nickname') as HTMLInputElement; }
  function codeEl()     { return document.getElementById('join-code') as HTMLInputElement; }

  function showError(msg: string) {
    const e = document.getElementById('join-error');
    if (e) e.textContent = msg;
  }

  function validateNickname(): string | null {
    const val = nicknameEl().value.trim();
    if (!val || val.length < 2) { showError('Please enter a nickname (at least 2 characters)'); return null; }
    if (!/^\w+$/.test(val)) { showError('Nickname: letters, numbers and _ only'); return null; }
    showError('');
    return val;
  }

  document.getElementById('join-solo')?.addEventListener('click', () => {
    callbacks.onSolo?.();
  });

  document.getElementById('join-create')?.addEventListener('click', () => {
    const nick = validateNickname();
    if (nick) void callbacks.onCreateGame(nick);
  });

  document.getElementById('join-enter')?.addEventListener('click', () => {
    const nick = validateNickname();
    if (!nick) return;
    const code = codeEl().value.trim().toUpperCase();
    if (code?.length !== 6) { showError('Enter the 6-character game PIN'); return; }
    void callbacks.onJoinGame(nick, code);
  });

  document.getElementById('join-nickname')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('join-create')?.click();
  });

  document.getElementById('join-code')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('join-enter')?.click();
  });

  setTimeout(() => nicknameEl()?.focus(), 80);
}

export function showJoinError(message: string) {
  const e = document.getElementById('join-error');
  if (e) e.textContent = message;
}

// ─── LOBBY SCREEN ─────────────────────────────────────
export interface LobbyCallbacks {
  onCreate: () => void | Promise<void>;
  onJoin: (joinCode: string) => void | Promise<void>;
  onStart: () => void | Promise<void>;
  onLeave: () => void | Promise<void>;
  onProgress: () => void | Promise<void>;
}

interface LobbyPlayer {
  playerId: string;
  username?: string;
  connected?: boolean;
  isHost?: boolean;
}

function getStartSection(isHost: boolean, playerCount: number): string {
  if (isHost && playerCount >= 2) {
    return '<button class="btn btn-success" id="lobby-start" style="flex:1">Start Game</button>';
  }
  if (playerCount < 2) {
    return '<div style="flex:1;text-align:center;color:rgba(255,255,255,0.4);font-size:13px;padding:12px">Waiting for at least 2 players...</div>';
  }
  return '<div style="flex:1;text-align:center;color:rgba(255,255,255,0.4);font-size:13px;padding:12px">Waiting for host to start...</div>';
}

export function renderLobbyScreen(
  callbacks: LobbyCallbacks,
  session?: { id: string; joinCode: string; players: LobbyPlayer[]; hostPlayerId?: string },
  currentPlayerId?: string,
) {
  const app = getApp();
  const screen = el('div', 'lobby-screen');
  const container = el('div', 'lobby-container');

  if (session) {
    const isHost = session.hostPlayerId === currentPlayerId;
    const playerCount = session.players.length;

    container.innerHTML = `
      <h2>Game Lobby</h2>
      <div class="card join-code-display">
        <div class="label">Share this code with friends</div>
        <div class="code">${session.joinCode}</div>
      </div>
      <div class="card">
        <h3 style="font-size:13px;color:rgba(255,255,255,0.4);text-transform:uppercase;margin-bottom:12px">
          Players (${playerCount}/5)
        </h3>
        <ul class="player-list" id="player-list">
          ${session.players.map((p: LobbyPlayer) => `
            <li>
              <span>
                <span class="status-dot ${p.connected === false ? 'offline' : ''}"></span>
                ${escapeHtml(p.username || p.playerId.slice(0, 8))}
              </span>
              ${p.isHost || p.playerId === session.hostPlayerId ? '<span class="host-badge">HOST</span>' : ''}
            </li>
          `).join('')}
        </ul>
        <div style="display:flex;gap:8px;margin-top:16px">
          ${getStartSection(isHost, playerCount)}
          <button class="btn btn-danger btn-small" id="lobby-leave">Leave</button>
        </div>
      </div>
    `;
  } else {
    // No active session — show create/join buttons
    container.innerHTML = `
      <h2>Game Lobby</h2>
      <div class="card" style="margin-bottom:16px">
        <div class="lobby-actions">
          <button class="btn btn-primary" id="lobby-create">Create Game</button>
        </div>
        <div style="text-align:center;color:rgba(255,255,255,0.3);margin:12px 0">— or —</div>
        <div style="display:flex;gap:8px">
          <input class="input" id="lobby-code" placeholder="Enter join code" maxlength="6" style="text-transform:uppercase;text-align:center;font-size:20px;letter-spacing:4px" />
          <button class="btn btn-success" id="lobby-join">Join</button>
        </div>
      </div>
      <button class="btn btn-secondary btn-small" id="lobby-progress" style="width:100%">View My Progress</button>
    `;
  }

  screen.appendChild(container);
  app.appendChild(screen);

  // Event listeners
  document.getElementById('lobby-create')?.addEventListener('click', callbacks.onCreate);
  document.getElementById('lobby-join')?.addEventListener('click', () => {
    const code = (document.getElementById('lobby-code') as HTMLInputElement)?.value.trim().toUpperCase();
    if (code?.length === 6) void callbacks.onJoin(code);
    else showToast('Enter a 6-character join code', 'warning');
  });
  document.getElementById('lobby-code')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('lobby-join')?.click();
  });
  document.getElementById('lobby-start')?.addEventListener('click', callbacks.onStart);
  document.getElementById('lobby-leave')?.addEventListener('click', callbacks.onLeave);
  document.getElementById('lobby-progress')?.addEventListener('click', callbacks.onProgress);
}

// ─── GAME SCREEN ──────────────────────────────────────
export interface GameCallbacks {
  onSubmitSolution: (answer: string) => void | Promise<void>;
  onCompleteStep: (stepNumber: number) => void | Promise<void>;
  onRequestHint: () => void | Promise<void>;
  onNextActivity: () => void | Promise<void>;
  onEndGame: () => void | Promise<void>;
  onSendChat: (message: string) => void | Promise<void>;
}

export interface GameState {
  sessionId: string;
  activity: any;
  currentStep: number;
  completedSteps: number[];
  myRole: any;
  myPlayerId: string;
  players: LobbyPlayer[];
  hints: string[];
  feedback: { correct: boolean; text: string } | null;
  chatMessages: { sender: string; text: string; system?: boolean }[];
  difficulty: number;
  score: number;
  level: number;
  xpProgress: number; // 0-100
}

export function renderGameScreen(state: GameState, callbacks: GameCallbacks) {
  const app = getApp();
  const screen = el('div', 'game-screen');

  // --- Header ---
  const header = el('div', 'game-header');
  const diffStars = '★'.repeat(state.difficulty) + '☆'.repeat(5 - state.difficulty);
  header.innerHTML = `
    <div class="session-info">
      <span class="difficulty-stars">${diffStars}</span>
      <span style="font-size:13px;color:rgba(255,255,255,0.4)">Difficulty</span>
    </div>
    <div style="display:flex;align-items:center;gap:16px">
      <span class="level-badge">Level ${state.level}</span>
      <button class="btn btn-danger btn-small" id="game-end">End Game</button>
    </div>
  `;
  screen.appendChild(header);

  // --- Activity Panel ---
  const actPanel = el('div', 'activity-panel');
  const act = state.activity;
  
  const skillTags = (act.educationalMeta?.skillCategories || [])
    .map((cat: string) => `<span class="skill-tag ${cat.toLowerCase()}">${cat.replace('_', ' ')}</span>`)
    .join('');

  let stepsHtml = '';
  if (act.steps && act.steps.length > 0) {
    stepsHtml = `
      <div class="steps-panel">
        <h3>Step-by-Step Guide</h3>
        ${act.steps.map((step: any, i: number) => {
          const stepNum = step.stepNumber || i + 1;
          const isCompleted = state.completedSteps.includes(stepNum);
          const isActive = stepNum === state.currentStep;
          return `
            <div class="step-item ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}">
              <div class="step-number">${isCompleted ? '✓' : stepNum}</div>
              <div class="step-content">
                <h4>${escapeHtml(step.title)}</h4>
                <p>${escapeHtml(step.description)}</p>
                ${step.coopRequirement ? `<div class="step-coop">Co-op: ${escapeHtml(step.coopRequirement)}</div>` : ''}
              </div>
              ${!isCompleted && isActive ? `<button class="btn btn-success btn-small step-complete-btn" data-step="${stepNum}">Done</button>` : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  let roleHtml = '';
  if (state.myRole) {
    roleHtml = `
      <div class="role-card">
        <h4>Your Role</h4>
        <div class="role-name">${escapeHtml(state.myRole.name)}</div>
        <div class="role-desc">${escapeHtml(state.myRole.description || '')}</div>
        <div class="role-capabilities">
          ${(state.myRole.capabilities || []).map((c: string) => `<span>${escapeHtml(c)}</span>`).join('')}
        </div>
      </div>
    `;
  }

  let hintsHtml = '';
  if (state.hints.length > 0) {
    hintsHtml = `
      <div class="hint-box">
        <div class="hint-label">Hints</div>
        ${state.hints.map((h: string) => `<div class="hint-text">${escapeHtml(h)}</div>`).join('')}
      </div>
    `;
  }

  let feedbackHtml = '';
  if (state.feedback) {
    feedbackHtml = `
      <div class="feedback-area ${state.feedback.correct ? 'correct' : 'incorrect'}">
        <h4>${state.feedback.correct ? '✅ Correct!' : '🔄 Try Again'}</h4>
        <p>${escapeHtml(state.feedback.text)}</p>
        ${state.feedback.correct ? '<button class="btn btn-primary btn-small" id="game-next" style="margin-top:12px">Next Activity →</button>' : ''}
      </div>
    `;
  }

  actPanel.innerHTML = `
    <div class="activity-type">${escapeHtml(act.type || '')}</div>
    <div class="activity-title">${escapeHtml(act.title || 'Activity')}</div>
    <div class="skill-tags">${skillTags}</div>
    <div class="activity-description">${escapeHtml(act.description || '')}</div>
    ${roleHtml}
    ${stepsHtml}
    ${hintsHtml}
    ${feedbackHtml}
    <div class="solution-area">
      <textarea id="solution-input" placeholder="Write your answer or explanation here...">${''}</textarea>
      <div class="solution-actions">
        <button class="btn btn-primary" id="game-submit">Submit Answer</button>
        <button class="btn btn-secondary btn-small" id="game-hint">Get Hint</button>
      </div>
    </div>
  `;
  screen.appendChild(actPanel);

  // --- Sidebar ---
  const sidebar = el('div', 'sidebar');
  sidebar.innerHTML = `
    <div class="sidebar-tabs">
      <div class="sidebar-tab active" data-tab="chat">Chat</div>
      <div class="sidebar-tab" data-tab="team">Team</div>
    </div>
    <div class="sidebar-content">
      <div id="tab-chat" style="display:flex;flex-direction:column;flex:1;overflow:hidden">
        <div class="chat-messages" id="chat-messages">
          ${state.chatMessages.map(m =>
            m.system
              ? `<div class="chat-msg system"><div class="text">${escapeHtml(m.text)}</div></div>`
              : `<div class="chat-msg"><div class="sender">${escapeHtml(m.sender)}</div><div class="text">${escapeHtml(m.text)}</div></div>`
          ).join('')}
        </div>
        <div class="chat-input-area">
          <input class="input" id="chat-input" placeholder="Type a message..." maxlength="500" />
          <button class="btn btn-primary btn-small" id="chat-send">Send</button>
        </div>
      </div>
      <div id="tab-team" class="team-panel hidden">
        ${state.players.map(p => {
          const initial = (p.username || 'P').charAt(0).toUpperCase();
          return `
            <div class="team-member">
              <div class="avatar">${initial}</div>
              <div class="info">
                <div class="name">${escapeHtml(p.username || p.playerId.slice(0, 8))}</div>
                <div class="role">${p.playerId === state.myPlayerId ? 'You' : ''}</div>
              </div>
              <span class="status-dot ${p.connected === false ? 'offline' : ''}"></span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
  screen.appendChild(sidebar);

  // --- Footer ---
  const footer = el('div', 'game-footer');
  footer.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px">
      <span class="level-badge">Lv ${state.level}</span>
      <div class="xp-bar"><div class="xp-bar-fill" style="width:${state.xpProgress}%"></div></div>
    </div>
    <div style="font-size:14px;color:rgba(255,255,255,0.5)">Score: <strong style="color:#4cc9f0">${state.score}</strong></div>
  `;
  screen.appendChild(footer);

  app.appendChild(screen);

  // --- Event Listeners ---
  // Submit solution
  document.getElementById('game-submit')?.addEventListener('click', () => {
    const val = (document.getElementById('solution-input') as HTMLTextAreaElement).value.trim();
    if (val) void callbacks.onSubmitSolution(val);
    else showToast('Please write your answer first', 'warning');
  });

  // Hint
  document.getElementById('game-hint')?.addEventListener('click', callbacks.onRequestHint);

  // Step complete buttons
  document.querySelectorAll('.step-complete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const step = Number.parseInt((btn as HTMLElement).dataset.step || '0');
      if (step) void callbacks.onCompleteStep(step);
    });
  });

  // Next activity
  document.getElementById('game-next')?.addEventListener('click', callbacks.onNextActivity);

  // End game
  document.getElementById('game-end')?.addEventListener('click', () => {
    if (confirm('Are you sure you want to end the game?')) void callbacks.onEndGame();
  });

  // Chat
  document.getElementById('chat-send')?.addEventListener('click', () => {
    const input = document.getElementById('chat-input') as HTMLInputElement;
    const val = input.value.trim();
    if (val) {
      void callbacks.onSendChat(val);
      input.value = '';
    }
  });
  document.getElementById('chat-input')?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('chat-send')?.click();
  });

  // Tab switching
  document.querySelectorAll('.sidebar-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.sidebar-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = (tab as HTMLElement).dataset.tab;
      document.getElementById('tab-chat')?.classList.toggle('hidden', target !== 'chat');
      document.getElementById('tab-team')?.classList.toggle('hidden', target !== 'team');
    });
  });

  // Auto-scroll chat to bottom
  const chatEl = document.getElementById('chat-messages');
  if (chatEl) chatEl.scrollTop = chatEl.scrollHeight;
}

// ─── PROGRESS SCREEN ──────────────────────────────────
export interface ProgressData {
  totalScore: number;
  technicalScore: number;
  softSkillScore: number;
  businessScore: number;
  aiLiteracyScore: number;
  level: number;
  gamesPlayed: number;
  totalPlayTime: number;
  skillBreakdown: Record<string, number>;
  achievements: { id: string; name: string; description: string; rarity: string; unlockedAt?: string; icon?: string }[];
}

export interface ProgressCallbacks {
  onBack: () => void;
}

export function renderProgressScreen(data: ProgressData, callbacks: ProgressCallbacks) {
  const app = getApp();
  const screen = el('div', 'progress-screen');

  const skillColors: Record<string, string> = {
    coding: '#4361ee', systemDesign: '#3a86ff', debugging: '#4895ef', problemSolving: '#4cc9f0',
    patternRecognition: '#06d6a0', algorithmicThinking: '#1b9aaa',
    communication: '#ffd166', leadership: '#ffaa00', collaboration: '#ffcc00',
    businessStrategy: '#ef476f', resourceManagement: '#d62828', publicSpeaking: '#ff6b6b', storyTelling: '#e76f51',
    aiLiteracy: '#a855f7', promptEngineering: '#9333ea', dataAnalysis: '#7c3aed',
  };

  const skillLabels: Record<string, string> = {
    coding: 'Coding', systemDesign: 'System Design', debugging: 'Debugging', problemSolving: 'Problem Solving',
    patternRecognition: 'Pattern Recognition', algorithmicThinking: 'Algorithmic Thinking',
    communication: 'Communication', leadership: 'Leadership', collaboration: 'Collaboration',
    businessStrategy: 'Business Strategy', resourceManagement: 'Resource Management',
    publicSpeaking: 'Public Speaking', storyTelling: 'Story Telling',
    aiLiteracy: 'AI Literacy', promptEngineering: 'Prompt Engineering', dataAnalysis: 'Data Analysis',
  };

  screen.innerHTML = `
    <button class="btn btn-secondary btn-small" id="progress-back" style="margin-bottom:24px">← Back to Lobby</button>
    <h2>Your Progress</h2>
    <div class="score-overview">
      <div class="card score-card technical"><div class="score-value">${Math.round(data.technicalScore)}</div><div class="score-label">Technical</div></div>
      <div class="card score-card soft"><div class="score-value">${Math.round(data.softSkillScore)}</div><div class="score-label">Soft Skills</div></div>
      <div class="card score-card business"><div class="score-value">${Math.round(data.businessScore)}</div><div class="score-label">Business</div></div>
      <div class="card score-card ai"><div class="score-value">${Math.round(data.aiLiteracyScore)}</div><div class="score-label">AI Literacy</div></div>
    </div>
    <div class="card" style="margin-bottom:24px">
      <h3 style="font-size:14px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:16px">Skill Breakdown</h3>
      <div class="skill-bars">
        ${Object.entries(data.skillBreakdown || {}).map(([key, val]) => `
          <div class="skill-bar-row">
            <div class="skill-bar-label">${skillLabels[key] || key}</div>
            <div class="skill-bar"><div class="skill-bar-fill" style="width:${val}%;background:${skillColors[key] || '#4361ee'}"></div></div>
            <div class="skill-bar-value">${Math.round(val)}</div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="card">
      <h3 style="font-size:14px;color:rgba(255,255,255,0.5);text-transform:uppercase;margin-bottom:16px">Achievements</h3>
      <div class="achievements-grid">
        ${(data.achievements || []).map(a => `
          <div class="card achievement-card ${a.unlockedAt ? 'unlocked' : ''}">
            <div class="icon">${a.icon || '🏆'}</div>
            <div class="name">${escapeHtml(a.name)}</div>
            <div class="desc">${escapeHtml(a.description)}</div>
          </div>
        `).join('')}
        ${(!data.achievements || data.achievements.length === 0)
          ? '<div style="grid-column:1/-1;text-align:center;color:rgba(255,255,255,0.3);padding:20px">Play games to unlock achievements!</div>'
          : ''}
      </div>
    </div>
    <div style="text-align:center;margin-top:16px;color:rgba(255,255,255,0.3);font-size:13px">
      Level ${data.level} · ${data.gamesPlayed} games played · ${Math.round(data.totalPlayTime / 60)} min playtime
    </div>
  `;

  app.appendChild(screen);

  document.getElementById('progress-back')?.addEventListener('click', callbacks.onBack);
}

// ─── RESULTS OVERLAY ──────────────────────────────────
export function renderResultsOverlay(
  results: any,
  onClose: () => void,
) {
  const overlay = el('div', 'results-overlay');
  const container = el('div', 'results-container card');

  const teamStats = results.teamStats || {};
  container.innerHTML = `
    <h2>Game Complete!</h2>
    <p style="color:rgba(255,255,255,0.5);margin-bottom:20px">${teamStats.activitiesCompleted || 0} activities completed</p>
    <div class="results-stats">
      <div class="result-stat">
        <div class="value">${teamStats.totalScore || 0}</div>
        <div class="label">Total Score</div>
      </div>
      <div class="result-stat">
        <div class="value">${Math.round(teamStats.averageDifficulty * 10) / 10 || 0}</div>
        <div class="label">Avg Difficulty</div>
      </div>
      <div class="result-stat">
        <div class="value">${Math.round((teamStats.totalTime || 0) / 60)}m</div>
        <div class="label">Play Time</div>
      </div>
    </div>
    <button class="btn btn-primary" id="results-close" style="margin-top:16px">Back to Lobby</button>
  `;

  overlay.appendChild(container);
  document.body.appendChild(overlay);

  document.getElementById('results-close')?.addEventListener('click', () => {
    overlay.remove();
    onClose();
  });
}

// ─── LOADING SCREEN ────────────────────────────────────
export function renderLoadingScreen(message = 'Loading...', onCancel?: () => void, cancelLabel = 'Play solo') {
  const app = getApp();
  app.innerHTML = `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;gap:16px;padding:24px">
      <div class="loading"><div class="spinner"></div></div>
      <p style="color:rgba(255,255,255,0.4);margin-top:12px">${escapeHtml(message)}</p>
    </div>
  `;
  if (!onCancel) return;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn btn-secondary';
  button.textContent = cancelLabel;
  button.addEventListener('click', onCancel);
  app.firstElementChild?.appendChild(button);
}

// ─── Utility ───────────────────────────────────────────
function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
