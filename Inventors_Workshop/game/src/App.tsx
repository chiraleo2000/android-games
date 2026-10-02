import { useEffect, useMemo, useRef, useState } from 'react';
import { CHALLENGES, challengeWon } from './logic/challenges';
import { recordLocalError } from './logic/logging';
import {
  LIFT_RATE,
  WORKSPACE_TARGET,
  emptyMachine,
  propagateSpeeds,
  type Connection,
  type Machine,
  type Part,
  type PartType,
} from './logic/simulation';
import {
  clearAllData,
  loadMachine,
  loadProgress,
  machineFromJson,
  machineToJson,
  markTutorialSeen,
  saveMachine,
  saveProgress,
  tutorialSeen,
} from './logic/storage';
import { PRIVACY_POLICY_URL } from './privacy';

const CATALOG: Array<{ type: PartType; label: string }> = [
  { type: 'gear-s', label: 'Small gear' },
  { type: 'gear-m', label: 'Medium gear' },
  { type: 'gear-l', label: 'Large gear' },
  { type: 'motor', label: 'Motor' },
  { type: 'pulley', label: 'Pulley' },
  { type: 'wheel', label: 'Wheel' },
  { type: 'spring', label: 'Spring' },
  { type: 'hinge', label: 'Hinge' },
  { type: 'switch', label: 'Switch' },
  { type: 'block', label: 'Block' },
];

const SIZE: Record<PartType, number> = {
  'gear-s': 52,
  'gear-m': 74,
  'gear-l': 104,
  motor: 64,
  pulley: 58,
  wheel: 70,
  spring: 46,
  hinge: 46,
  switch: 50,
  block: 54,
};

const TUTORIAL = [
  'Tap a part in the tray to drop it on the workspace. Drag it to move it.',
  'Select a part, then Rotate or Delete. Turn on Connect and tap two parts to join them.',
  'Press Play. Motion travels through connections. A larger gear turns slower than a smaller gear on the same motor.',
  'Save keeps the machine on this device. Export writes a JSON file you can share locally. Challenges has 20 goals.',
];

interface Live {
  angle: Record<string, number>;
  lift: Record<string, number>;
  switchOn: Record<string, boolean>;
}

function blankLive(): Live {
  return { angle: {}, lift: {}, switchOn: {} };
}

function linkedPart(link: { from: string; to: string }, id: string): string {
  if (link.from === id) return link.to;
  if (link.to === id) return link.from;
  return '';
}

function neighborDrive(machine: Machine, speeds: Record<string, number>, id: string): number {
  let max = 0;
  for (const link of machine.connections) {
    const other = linkedPart(link, id);
    if (!other) continue;
    max = Math.max(max, Math.abs(speeds[other] ?? 0));
  }
  return max;
}

export function WorkshopApp() {
  const store = window.localStorage;
  const [machine, setMachine] = useState<Machine>(() => loadMachine(store) ?? emptyMachine());
  const [progress, setProgress] = useState<string[]>(() => loadProgress(store));
  const [playing, setPlaying] = useState(false);
  const [live, setLive] = useState<Live>(blankLive);
  const [selected, setSelected] = useState<string | null>(null);
  const [connectMode, setConnectMode] = useState(false);
  const [pending, setPending] = useState<string | null>(null);
  const [panel, setPanel] = useState<'none' | 'challenges' | 'settings'>('none');
  const [activeId, setActiveId] = useState<string>(CHALLENGES[0].id);
  const [notice, setNotice] = useState('');
  const [tutorialStep, setTutorialStep] = useState(() => (tutorialSeen(store) ? -1 : 0));
  const [confirmClear, setConfirmClear] = useState(false);
  const [clearedMsg, setClearedMsg] = useState('');
  const boardRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const machineRef = useRef(machine);
  const drag = useRef<{ id: string; x: number; y: number; ox: number; oy: number; moved: boolean } | null>(null);

  function nextId(prefix: 'p' | 'c'): string {
    const used = new Set([
      ...machine.parts.map((part) => part.id),
      ...machine.connections.map((link) => link.id),
    ]);
    let n = 1;
    while (used.has(`${prefix}${n}`)) n += 1;
    return `${prefix}${n}`;
  }

  machineRef.current = machine;
  const speeds = useMemo(() => propagateSpeeds(machine), [machine]);

  useEffect(() => {
    if (!playing) return undefined;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const current = machineRef.current;
      const nextSpeeds = propagateSpeeds(current);
      setLive((prev) => {
        const angle = { ...prev.angle };
        const lift = { ...prev.lift };
        const switchOn = { ...prev.switchOn };
        for (const part of current.parts) {
          angle[part.id] = (angle[part.id] ?? 0) + (nextSpeeds[part.id] ?? 0) * dt;
          if (part.type === 'spring') {
            const drive = neighborDrive(current, nextSpeeds, part.id);
            lift[part.id] = Math.min(1, (lift[part.id] ?? 0) + drive * LIFT_RATE * dt);
          }
          if (part.type === 'switch' && neighborDrive(current, nextSpeeds, part.id) > 0.15) {
            switchOn[part.id] = true;
          }
        }
        return { angle, lift, switchOn };
      });
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing]);

  function place(type: PartType) {
    const id = nextId('p');
    const count = machine.parts.length;
    const column = count % 4;
    const row = Math.floor(count / 4) % 5;
    const part: Part = {
      id,
      type,
      x: 72 + column * 68,
      y: 88 + row * 72,
      rotation: 0,
    };
    setMachine({ ...machine, parts: [...machine.parts, part] });
    setSelected(id);
    setNotice(`${type} placed.`);
  }

  function updatePart(id: string, patch: Partial<Part>) {
    setMachine({
      ...machine,
      parts: machine.parts.map((part) => (part.id === id ? { ...part, ...patch } : part)),
    });
  }

  function removePart(id: string) {
    setMachine({
      parts: machine.parts.filter((part) => part.id !== id),
      connections: machine.connections.filter((link) => link.from !== id && link.to !== id),
    });
    setSelected(null);
    setPending(null);
  }

  function addConnection(a: string, b: string) {
    if (a === b) return;
    const exists = machine.connections.some(
      (link) => (link.from === a && link.to === b) || (link.from === b && link.to === a),
    );
    if (exists) {
      setNotice('Those parts are already connected.');
      return;
    }
    const link: Connection = { id: nextId('c'), from: a, to: b };
    setMachine({ ...machine, connections: [...machine.connections, link] });
    setNotice('Connected. Press Play to send motion across the link.');
  }

  function onPartPointerDown(event: React.PointerEvent<HTMLButtonElement>, part: Part) {
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    drag.current = { id: part.id, x: event.clientX, y: event.clientY, ox: part.x, oy: part.y, moved: false };
  }

  function onPartPointerMove(event: React.PointerEvent<HTMLButtonElement>) {
    const current = drag.current;
    if (!current) return;
    const dx = event.clientX - current.x;
    const dy = event.clientY - current.y;
    if (Math.hypot(dx, dy) > 5) current.moved = true;
    if (!current.moved) return;
    const board = boardRef.current?.getBoundingClientRect();
    const maxX = board ? board.width - 20 : 760;
    const maxY = board ? board.height - 20 : 440;
    updatePart(current.id, {
      x: Math.max(24, Math.min(maxX, current.ox + dx)),
      y: Math.max(24, Math.min(maxY, current.oy + dy)),
    });
  }

  function onPartPointerUp(part: Part) {
    const current = drag.current;
    drag.current = null;
    if (current?.moved) return;
    setSelected(part.id);
    if (!connectMode) return;
    if (!pending) {
      setPending(part.id);
      setNotice('Tap another part to connect.');
      return;
    }
    addConnection(pending, part.id);
    setPending(null);
  }

  function save() {
    try {
      saveMachine(store, machine);
      saveProgress(store, progress);
      setNotice('Machine saved on this device.');
    } catch (error) {
      recordLocalError(store, error);
      setNotice('Could not save on this device.');
    }
  }

  function load() {
    const loaded = loadMachine(store);
    if (!loaded) {
      setNotice('No saved machine was found. Nothing was restored.');
      return;
    }
    setMachine(loaded);
    setProgress(loadProgress(store));
    setLive(blankLive());
    setNotice('Loaded the machine saved on this device.');
  }

  function exportJson() {
    const blob = new Blob([machineToJson(machine)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = 'inventors-workshop-machine.json';
    anchor.click();
    URL.revokeObjectURL(url);
    setNotice('Exported a JSON file for local sharing.');
  }

  function importJson(file: File) {
    void file.text().then((text) => {
      const parsed = machineFromJson(text);
      if (!parsed) {
        setNotice('That file is not a workshop machine.');
        return;
      }
      setMachine(parsed);
      setLive(blankLive());
      setNotice('Imported the machine from the JSON file.');
    });
  }

  function checkGoal() {
    const challenge = CHALLENGES.find((item) => item.id === activeId) ?? CHALLENGES[0];
    const won = challengeWon(challenge, machine);
    if (!won) {
      setNotice(`Not yet: ${challenge.title}. Keep building, then test again.`);
      return;
    }
    const next = progress.includes(challenge.id) ? progress : [...progress, challenge.id];
    setProgress(next);
    saveProgress(store, next);
    setNotice(`Goal complete: ${challenge.title}.`);
  }

  function finishTutorial() {
    markTutorialSeen(store);
    setTutorialStep(-1);
  }

  function doClear() {
    clearAllData(store);
    setMachine(emptyMachine());
    setProgress([]);
    setLive(blankLive());
    setPlaying(false);
    setSelected(null);
    setPending(null);
    setConfirmClear(false);
    setClearedMsg('All data cleared. Nothing was restored.');
    setNotice('');
    setTutorialStep(0);
  }

  const active = CHALLENGES.find((item) => item.id === activeId) ?? CHALLENGES[0];
  const gearReadout = machine.parts
    .filter((part) => part.type.startsWith('gear'))
    .map((part) => `${part.type} ${Math.abs(speeds[part.id] ?? 0).toFixed(2)} rad/s`)
    .join(' · ');

  return (
    <div className="app">
      <header className="topbar">
        <div>
          <p className="eyebrow">Educational workshop</p>
          <h1>Inventors Workshop</h1>
        </div>
        <p className="score">{progress.length}/20 goals</p>
      </header>

      <div className="toolbar">
        <button type="button" className={playing ? 'primary' : ''} onClick={() => setPlaying((value) => !value)}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <button type="button" onClick={save}>Save</button>
        <button type="button" onClick={load}>Load</button>
        <button type="button" onClick={exportJson}>Export</button>
        <button type="button" onClick={() => fileRef.current?.click()}>Import</button>
        <button type="button" onClick={() => setPanel(panel === 'challenges' ? 'none' : 'challenges')}>Challenges</button>
        <button type="button" onClick={() => setPanel(panel === 'settings' ? 'none' : 'settings')}>Settings</button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          hidden
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) importJson(file);
            event.target.value = '';
          }}
        />
      </div>

      <div className="tray">
        {CATALOG.map((item) => (
          <button key={item.type} type="button" className="tray-btn" onClick={() => place(item.type)}>
            {item.label}
          </button>
        ))}
      </div>

      <div className="workspace-wrap">
        <div
          className="workspace"
          ref={boardRef}
          onPointerDown={() => {
            setSelected(null);
          }}
        >
          <div
            className="target"
            style={{ left: WORKSPACE_TARGET.x, top: WORKSPACE_TARGET.y, width: WORKSPACE_TARGET.radius * 2, height: WORKSPACE_TARGET.radius * 2 }}
          />
          <svg className="links" aria-hidden="true">
            {machine.connections.map((link) => {
              const a = machine.parts.find((part) => part.id === link.from);
              const b = machine.parts.find((part) => part.id === link.to);
              if (!a || !b) return null;
              const belt =
                (a.type === 'pulley' || a.type === 'wheel') && (b.type === 'pulley' || b.type === 'wheel');
              return (
                <line
                  key={link.id}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  strokeDasharray={belt ? '8 6' : undefined}
                />
              );
            })}
          </svg>
          {machine.parts.map((part) => {
            const size = SIZE[part.type];
            const spin = live.angle[part.id] ?? 0;
            const turned = part.rotation + (spin * 180) / Math.PI;
            return (
              <button
                key={part.id}
                type="button"
                className={`part ${part.type} ${selected === part.id ? 'selected' : ''} ${pending === part.id ? 'pending' : ''}`}
                style={{
                  width: size,
                  height: size,
                  left: part.x - size / 2,
                  top: part.y - size / 2,
                  transform: `rotate(${turned}deg)`,
                }}
                onPointerDown={(event) => onPartPointerDown(event, part)}
                onPointerMove={onPartPointerMove}
                onPointerUp={() => onPartPointerUp(part)}
              >
                <span>{part.type}</span>
                {part.type === 'spring' && <i style={{ height: `${Math.round((live.lift[part.id] ?? 0) * 100)}%` }} />}
                {part.type === 'switch' && live.switchOn[part.id] && <b>ON</b>}
              </button>
            );
          })}
        </div>
        <div className="editbar">
          <button type="button" className={connectMode ? 'primary' : ''} onClick={() => { setConnectMode((value) => !value); setPending(null); }}>
            {connectMode ? 'Connecting…' : 'Connect'}
          </button>
          <button
            type="button"
            disabled={!selected}
            onClick={() => selected && updatePart(selected, { rotation: ((machine.parts.find((part) => part.id === selected)?.rotation ?? 0) + 45) % 360 })}
          >
            Rotate
          </button>
          <button type="button" disabled={!selected} onClick={() => selected && removePart(selected)}>
            Delete
          </button>
          <button
            type="button"
            onClick={() => {
              const last = machine.connections.at(-1);
              if (!last) return;
              setMachine({ ...machine, connections: machine.connections.filter((link) => link.id !== last.id) });
            }}
          >
            Undo link
          </button>
        </div>
      </div>

      <section className="readout">
        <p>{gearReadout || 'Add a motor and gears, then connect them. Speeds show up here.'}</p>
        <p className="goal">
          <strong>{active.title}.</strong> {active.prompt}
        </p>
        <button type="button" className="primary" onClick={checkGoal}>Test this machine</button>
        {notice && <p className="notice">{notice}</p>}
      </section>

      {panel === 'challenges' && (
        <section className="sheet">
          <h2>20 challenges</h2>
          <ul>
            {CHALLENGES.map((challenge) => (
              <li key={challenge.id}>
                <button
                  type="button"
                  className={challenge.id === activeId ? 'primary' : ''}
                  onClick={() => {
                    setActiveId(challenge.id);
                    setPanel('none');
                    setNotice(challenge.prompt);
                  }}
                >
                  {progress.includes(challenge.id) ? 'Done' : challenge.theme} · {challenge.title}
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {panel === 'settings' && (
        <section className="sheet">
          <h2>Settings</h2>
          <p>Play stays on this device. There are no accounts, ads, or off-device analytics.</p>
          <a className="privacy" href={PRIVACY_POLICY_URL} target="_blank" rel="noreferrer">
            Privacy policy
          </a>
          {!confirmClear && (
            <button type="button" className="danger" onClick={() => setConfirmClear(true)}>
              Clear All Data
            </button>
          )}
          {confirmClear && (
            <div className="confirm">
              <p>Clear the saved machine, challenge progress, and tutorial on this device? Progress will not be restored.</p>
              <button type="button" className="danger" onClick={doClear}>Clear All Data</button>
              <button type="button" onClick={() => setConfirmClear(false)}>Cancel</button>
            </div>
          )}
          {clearedMsg && <output className="notice">{clearedMsg}</output>}
        </section>
      )}

      {tutorialStep >= 0 && (
        <div className="tutorial">
          <p>Step {tutorialStep + 1} of {TUTORIAL.length}</p>
          <h2>How the workshop works</h2>
          <p>{TUTORIAL[tutorialStep]}</p>
          <div>
            {tutorialStep < TUTORIAL.length - 1 ? (
              <button type="button" className="primary" onClick={() => setTutorialStep((step) => step + 1)}>Next</button>
            ) : (
              <button type="button" className="primary" onClick={finishTutorial}>Start building</button>
            )}
            <button type="button" onClick={finishTutorial}>Skip</button>
          </div>
        </div>
      )}
    </div>
  );
}
