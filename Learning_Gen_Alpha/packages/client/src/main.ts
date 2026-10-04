import { io, Socket } from 'socket.io-client';
import { api, setToken, getToken } from './api';
import {
  renderJoinScreen,
  renderLobbyScreen,
  renderGameScreen, GameState,
  renderProgressScreen,
  renderResultsOverlay, renderLoadingScreen,
  showToast,
} from './ui';
import { GameEngine } from './game3d';
import { startSolo } from './solo/startSolo';
import './styles.css';

// ─── Application State ──────────────────────────────────
type Screen = 'join' | 'lobby' | 'game' | 'progress';

interface AppState {
  screen: Screen;
  playerId: string;
  username: string;
  session: any;
  activity: any;
  currentStep: number;
  completedSteps: number[];
  myRole: any;
  hints: string[];
  feedback: { correct: boolean; text: string } | null;
  chatMessages: { sender: string; text: string; system?: boolean }[];
  score: number;
  level: number;
  xpProgress: number;
  difficulty: number;
}

const state: AppState = {
  screen: 'join',
  playerId: '',
  username: '',
  session: null,
  activity: null,
  currentStep: 1,
  completedSteps: [],
  myRole: null,
  hints: [],
  feedback: null,
  chatMessages: [],
  score: 0,
  level: 1,
  xpProgress: 0,
  difficulty: 1,
};

let socket: Socket | null = null;
let gameEngine: GameEngine | null = null;

// Helper: wrap async handler so it returns void (satisfies callback signatures)
function fire(fn: (...args: any[]) => Promise<void>): (...args: any[]) => void {
  return (...args: any[]) => { fn(...args).catch((e: unknown) => showToast(String(e), 'error')); };
}

// ─── Screen Router ──────────────────────────────────────
function navigate(screen: Screen) {
  if (state.screen === 'game' && screen !== 'game') {
    destroyGameEngine();
  }
  state.screen = screen;
  renderCurrentScreen();
}

function renderCurrentScreen() {
  switch (state.screen) {
    case 'join':
      renderJoinScreen({
        onCreateGame: fire(handleCreateGameAsGuest),
        onJoinGame: fire(handleJoinGameAsGuest),
        onSolo: () => startSolo({ onMultiplayer: () => navigate('join') }),
      });
      break;
    case 'lobby':
      renderLobbyScreen(
        {
          onCreate: fire(handleCreateSession),
          onJoin: fire(handleJoinSession),
          onStart: fire(handleStartGame),
          onLeave: handleLeaveSession,
          onProgress: () => navigate('progress'),
        },
        state.session
          ? {
              id: state.session.id,
              joinCode: state.session.joinCode,
              players: state.session.players || [],
              hostPlayerId: state.session.hostPlayerId,
            }
          : undefined,
        state.playerId,
      );
      break;
    case 'game':
      if (!state.activity) return;
      // Start 3D scene behind the overlay UI
      initGameEngine();
      renderGameScreen(buildGameState(), {
        onSubmitSolution: fire(handleSubmitSolution),
        onCompleteStep: fire(handleCompleteStep),
        onRequestHint: fire(handleRequestHint),
        onNextActivity: fire(handleNextActivity),
        onEndGame: fire(handleEndGame),
        onSendChat: fire(handleSendChat),
      });
      break;
    case 'progress':
      void handleViewProgress();
      break;
  }
}

function buildGameState(): GameState {
  return {
    sessionId: state.session?.id || '',
    activity: state.activity || {},
    currentStep: state.currentStep,
    completedSteps: state.completedSteps,
    myRole: state.myRole,
    myPlayerId: state.playerId,
    players: state.session?.players || [],
    hints: state.hints,
    feedback: state.feedback,
    chatMessages: state.chatMessages,
    difficulty: state.difficulty,
    score: state.score,
    level: state.level,
    xpProgress: state.xpProgress,
  };
}

// ─── 3D Game Engine ─────────────────────────────────────
function initGameEngine() {
  if (gameEngine) return;
  // Create a full-screen container for the 3D canvas
  let container = document.getElementById('game-3d-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'game-3d-container';
    container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:0;';
    document.body.prepend(container);
  }
  gameEngine = new GameEngine({ container });
  gameEngine.start();

  // Show activity info in 3D HUD
  if (state.activity) {
    gameEngine.showActivity(
      state.activity.title || 'Activity',
      state.activity.targetSkills || [],
      state.currentStep,
      state.activity.steps?.length || 1,
    );
  }

  // Add self
  gameEngine.addPlayer(state.playerId, state.username, 0);

  // Add other players
  const players = state.session?.players || [];
  players.forEach((p: any, i: number) => {
    if (p.id !== state.playerId) {
      gameEngine!.addPlayer(p.id, p.username || `Player ${i + 1}`, i + 1);
    }
  });
}

function destroyGameEngine() {
  if (!gameEngine) return;
  gameEngine.dispose();
  gameEngine = null;
  const container = document.getElementById('game-3d-container');
  if (container) container.remove();
}

// ─── Guest Join Handlers ────────────────────────────────
function leaveServerWait(abort: AbortController) {
  abort.abort();
  startSolo({ onMultiplayer: () => navigate('join') });
}

async function handleCreateGameAsGuest(nickname: string) {
  const abort = new AbortController();
  renderLoadingScreen('Getting ready...', () => leaveServerWait(abort));
  try {
    const data = await api.guestLogin(nickname, abort.signal);
    if (abort.signal.aborted) return;
    setToken(data.accessToken);
    state.playerId = data.playerId;
    state.username = data.username || nickname;
    connectSocket();
    navigate('lobby');
  } catch (err: any) {
    if (abort.signal.aborted) return;
    showToast(err.message || 'Failed to create game', 'error');
    navigate('join');
  }
}

async function handleJoinGameAsGuest(nickname: string, joinCode: string) {
  const abort = new AbortController();
  renderLoadingScreen('Joining game...', () => leaveServerWait(abort));
  try {
    const data = await api.guestLogin(nickname, abort.signal);
    if (abort.signal.aborted) return;
    setToken(data.accessToken);
    state.playerId = data.playerId;
    state.username = data.username || nickname;
    connectSocket();
    navigate('lobby');
    // Wait briefly for socket to connect, then auto-join the session
    await new Promise<void>(resolve => setTimeout(resolve, 400));
    if (abort.signal.aborted) return;
    await handleJoinSession(joinCode);
  } catch (err: any) {
    if (abort.signal.aborted) return;
    showToast(err.message || 'Failed to join game', 'error');
    navigate('join');
  }
}

function connectSocket() {
  if (socket?.connected) return;

  const token = getToken();
  if (!token) return;

  socket = io('http://localhost:4012', {
    auth: { token },
    reconnection: true,
    reconnectionAttempts: 10,
    reconnectionDelay: 1000,
  });

  socket.on('connect', () => {
    console.log('Connected to game server');
    showToast('Connected to server', 'success');
  });

  socket.on('disconnect', () => {
    showToast('Disconnected from server', 'warning');
  });

  // Game events
  socket.on('player_joined', (data: any) => {
    showToast(`${data.username || 'A player'} joined!`, 'info');
    if (state.session) {
      // Refresh lobby
      renderCurrentScreen();
    }
  });

  socket.on('player_left', (data: any) => {
    showToast(`${data.username || 'A player'} left`, 'warning');
  });

  socket.on('player_disconnected', (data: any) => {
    showToast(`${data.username || 'A player'} disconnected (reconnecting...)`, 'warning');
  });

  socket.on('player_reconnected', (data: any) => {
    showToast(`${data.username || 'A player'} reconnected!`, 'success');
  });

  socket.on('game_started', (data: any) => {
    if (data.activity) {
      state.activity = data.activity;
      state.currentStep = 1;
      state.completedSteps = [];
      state.hints = [];
      state.feedback = null;
      findMyRole();
      navigate('game');
    }
  });

  socket.on('solution_submitted', (data: any) => {
    if (data.playerId !== state.playerId) {
      addChatMessage(`${data.username || 'Teammate'} submitted a solution`, '', true);
    }
  });

  socket.on('step_completed', (data: any) => {
    addChatMessage(`Step ${data.stepNumber} completed by ${data.username || 'a teammate'}!`, '', true);
    if (!state.completedSteps.includes(data.stepNumber)) {
      state.completedSteps.push(data.stepNumber);
    }
    renderCurrentScreen();
  });

  socket.on('activity_completed', (data: any) => {
    state.score += data.points || 0;
    state.feedback = { correct: true, text: data.feedback || 'Great job!' };
    renderCurrentScreen();
  });

  socket.on('chat_message', (data: any) => {
    addChatMessage(data.content || data.text, data.username || data.sender || 'Player', data.type === 'system');
    renderCurrentScreen();
  });

  socket.on('game_ended', (data: any) => {
    renderResultsOverlay(data, () => {
      state.session = null;
      state.activity = null;
      navigate('lobby');
    });
  });

  socket.on('heartbeat_ping', () => {
    socket?.emit('heartbeat');
  });
}

function findMyRole() {
  if (!state.activity?.roles) return;
  state.myRole = state.activity.roles.find(
    (r: any) => r.assignedPlayerId === state.playerId,
  ) || state.activity.roles[0] || null;
}

function addChatMessage(text: string, sender: string, system = false) {
  state.chatMessages.push({ sender, text, system });
  // Keep last 200 messages
  if (state.chatMessages.length > 200) {
    state.chatMessages = state.chatMessages.slice(-200);
  }
}

// ─── Game Action Handlers ───────────────────────────────
async function handleCreateSession() {
  try {
    const data = await api.createSession({ difficulty: 1 });
    state.session = data.session;
    // Mark current player as host
    if (state.session && !state.session.hostPlayerId) {
      state.session.hostPlayerId = state.playerId;
    }
    socket?.emit('join_session', { sessionId: state.session.id });
    renderCurrentScreen();
    showToast('Game created! Share the code with friends.', 'success');
  } catch (err: any) {
    showToast(err.message, 'error');
  }
}

async function handleJoinSession(joinCode: string) {
  try {
    const data = await api.joinSession(joinCode);
    state.session = data.session;
    socket?.emit('join_session', { sessionId: state.session.id });
    renderCurrentScreen();
    showToast('Joined the game!', 'success');
  } catch (err: any) {
    showToast(err.message, 'error');
  }
}

async function handleStartGame() {
  if (!state.session) return;
  try {
    const data = await api.startGame(state.session.id);
    state.activity = data.activity;
    state.currentStep = 1;
    state.completedSteps = [];
    state.hints = [];
    state.feedback = null;
    state.chatMessages = [];
    findMyRole();
    navigate('game');
  } catch (err: any) {
    showToast(err.message, 'error');
  }
}

function handleLeaveSession() {
  socket?.emit('leave_session');
  state.session = null;
  state.activity = null;
  destroyGameEngine();
  renderCurrentScreen();
}

async function handleSubmitSolution(answer: string) {
  if (!state.session || !state.activity) return;
  try {
    const result = await api.submitSolution(state.session.id, state.activity.id, answer, answer);
    state.feedback = {
      correct: result.correct,
      text: result.feedback || (result.correct ? 'Correct!' : 'Not quite right. Try again!'),
    };
    if (result.correct) {
      state.score += result.points || 0;
    }
    renderCurrentScreen();
  } catch (err: any) {
    showToast(err.message, 'error');
  }
}

async function handleCompleteStep(stepNumber: number) {
  if (!state.session || !state.activity) return;
  try {
    await api.completeStep(state.session.id, state.activity.id, stepNumber);
    if (!state.completedSteps.includes(stepNumber)) {
      state.completedSteps.push(stepNumber);
    }
    state.currentStep = stepNumber + 1;
    renderCurrentScreen();
    showToast(`Step ${stepNumber} completed!`, 'success');
  } catch (err: any) {
    showToast(err.message, 'error');
  }
}

async function handleRequestHint() {
  if (!state.session || !state.activity) return;
  try {
    const result = await api.requestHint(state.session.id, state.activity.id);
    if (result?.hint) {
      state.hints.push(result.hint);
      renderCurrentScreen();
    }
  } catch (err: any) {
    showToast(err.message, 'warning');
  }
}

async function handleNextActivity() {
  if (!state.session) return;
  try {
    const data = await api.nextActivity(state.session.id);
    state.activity = data.activity;
    state.currentStep = 1;
    state.completedSteps = [];
    state.hints = [];
    state.feedback = null;
    findMyRole();
    renderCurrentScreen();
  } catch (err: any) {
    showToast(err.message, 'error');
  }
}

async function handleEndGame() {
  if (!state.session) return;
  try {
    const result = await api.endGame(state.session.id);
    destroyGameEngine();
    renderResultsOverlay(result, () => {
      state.session = null;
      state.activity = null;
      navigate('lobby');
    });
  } catch (err: any) {
    showToast(err.message, 'error');
  }
}

async function handleSendChat(message: string) {
  if (!state.session) return;
  try {
    await api.sendMessage(state.session.id, message);
    addChatMessage(message, state.username);
    renderCurrentScreen();
  } catch (err: any) {
    showToast(err.message, 'error');
  }
}

async function handleViewProgress() {
  if (!state.playerId) {
    navigate('lobby');
    return;
  }
  const abort = new AbortController();
  renderLoadingScreen('Loading your progress...', () => {
    abort.abort();
    navigate('lobby');
  }, 'Back');
  try {
    const data = await api.getProgress(state.playerId, abort.signal);
    if (abort.signal.aborted) return;
    renderProgressScreen(
      {
        totalScore: data.progress?.totalScore || data.totalScore || 0,
        technicalScore: data.progress?.technicalScore || data.technicalScore || 0,
        softSkillScore: data.progress?.softSkillScore || data.softSkillScore || 0,
        businessScore: data.progress?.businessScore || data.businessScore || 0,
        aiLiteracyScore: data.progress?.aiLiteracyScore || data.aiLiteracyScore || 0,
        level: data.level || 1,
        gamesPlayed: data.gamesPlayed || 0,
        totalPlayTime: data.totalPlayTime || 0,
        skillBreakdown: data.progress?.skillBreakdown || data.skillBreakdown || {},
        achievements: data.progress?.achievements || data.achievements || [],
      },
      { onBack: () => navigate('lobby') },
    );
  } catch (err: unknown) {
    if (abort.signal.aborted) return;
    console.error('Failed to load progress:', err);
    showToast('Could not load progress', 'error');
    navigate('lobby');
  }
}

// ─── Init ───────────────────────────────────────────────
function init() {
  startSolo({ onMultiplayer: () => navigate('join') });
}

init();
console.log('Learning Gen Alpha - Educational Game Client initialized');
