export type PartType =
  | 'gear-s'
  | 'gear-m'
  | 'gear-l'
  | 'motor'
  | 'pulley'
  | 'wheel'
  | 'spring'
  | 'hinge'
  | 'switch'
  | 'block';

export interface Part {
  id: string;
  type: PartType;
  x: number;
  y: number;
  rotation: number;
}

export interface Connection {
  id: string;
  from: string;
  to: string;
}

export interface Machine {
  parts: Part[];
  connections: Connection[];
}

export interface SimSample {
  speed: Record<string, number>;
  angle: Record<string, number>;
  lift: Record<string, number>;
  switchOn: Record<string, boolean>;
}

export const MOTOR_SPEED = 4;
export const LIFT_RATE = 0.35;
export const SIM_DT = 0.05;

export const WORKSPACE_TARGET = { x: 180, y: 200, radius: 48 };

const TEETH: Record<PartType, number> = {
  'gear-s': 8,
  'gear-m': 16,
  'gear-l': 32,
  motor: 8,
  pulley: 12,
  wheel: 20,
  spring: 8,
  hinge: 8,
  switch: 8,
  block: 8,
};

const GEARS = new Set<PartType>(['gear-s', 'gear-m', 'gear-l']);
const BELT = new Set<PartType>(['pulley', 'wheel']);
const RIGID = new Set<PartType>(['block', 'hinge']);
const SINKS = new Set<PartType>(['spring', 'switch']);

export function teethOf(type: PartType): number {
  return TEETH[type];
}

/** Ratio of driven speed to driver speed. A larger driven gear (more teeth) yields a smaller ratio. */
export function gearRatio(driverTeeth: number, drivenTeeth: number): number {
  if (!Number.isFinite(driverTeeth) || !Number.isFinite(drivenTeeth) || drivenTeeth === 0) {
    return 0;
  }
  return driverTeeth / drivenTeeth;
}

export function outputSpeed(driverSpeed: number, driverTeeth: number, drivenTeeth: number): number {
  return driverSpeed * gearRatio(driverTeeth, drivenTeeth);
}

function usesBelt(driver: PartType, driven: PartType): boolean {
  if (SINKS.has(driven) || RIGID.has(driven) || RIGID.has(driver)) return false;
  return BELT.has(driver) || BELT.has(driven);
}

export function transmittedSpeed(driver: PartType, driverSpeed: number, driven: PartType): number {
  if (SINKS.has(driven)) return 0;
  if (RIGID.has(driven)) return driverSpeed;
  const sign = usesBelt(driver, driven) ? 1 : -1;
  const driverTeeth = RIGID.has(driver) ? TEETH.motor : teethOf(driver);
  return sign * outputSpeed(driverSpeed, driverTeeth, teethOf(driven));
}

function adjacency(machine: Machine): Map<string, string[]> {
  const adj = new Map<string, string[]>();
  for (const part of machine.parts) adj.set(part.id, []);
  for (const link of machine.connections) {
    if (!adj.has(link.from) || !adj.has(link.to) || link.from === link.to) continue;
    adj.get(link.from)!.push(link.to);
    adj.get(link.to)!.push(link.from);
  }
  return adj;
}

function seedMotors(
  machine: Machine,
  speed: Record<string, number>,
  seen: Set<string>,
  queue: string[]
): void {
  for (const part of machine.parts) {
    if (part.type !== 'motor') continue;
    speed[part.id] = MOTOR_SPEED;
    seen.add(part.id);
    queue.push(part.id);
  }
}

function spreadFrom(
  id: string,
  parts: Map<string, Part>,
  adj: Map<string, string[]>,
  speed: Record<string, number>,
  seen: Set<string>,
  queue: string[]
): void {
  const driver = parts.get(id);
  if (!driver) return;
  for (const nextId of adj.get(id) ?? []) {
    if (seen.has(nextId)) continue;
    const driven = parts.get(nextId);
    if (!driven) continue;
    seen.add(nextId);
    speed[nextId] = transmittedSpeed(driver.type, speed[id] ?? 0, driven.type);
    if (!SINKS.has(driven.type)) queue.push(nextId);
  }
}

export function propagateSpeeds(machine: Machine): Record<string, number> {
  const parts = new Map(machine.parts.map((part) => [part.id, part]));
  const adj = adjacency(machine);
  const speed: Record<string, number> = {};
  const seen = new Set<string>();
  const queue: string[] = [];
  seedMotors(machine, speed, seen, queue);
  while (queue.length > 0) {
    spreadFrom(queue.shift()!, parts, adj, speed, seen, queue);
  }
  for (const part of machine.parts) {
    speed[part.id] ??= 0;
  }
  return speed;
}

function neighborDrive(id: string, adj: Map<string, string[]>, speed: Record<string, number>): number {
  let max = 0;
  for (const nextId of adj.get(id) ?? []) {
    max = Math.max(max, Math.abs(speed[nextId] ?? 0));
  }
  return max;
}

export function simulate(machine: Machine, seconds = 2): SimSample {
  const speed = propagateSpeeds(machine);
  const adj = adjacency(machine);
  const angle: Record<string, number> = {};
  const lift: Record<string, number> = {};
  const switchOn: Record<string, boolean> = {};

  for (const part of machine.parts) {
    angle[part.id] = 0;
    lift[part.id] = 0;
    switchOn[part.id] = false;
  }

  const steps = Math.max(0, Math.round(seconds / SIM_DT));
  for (let step = 0; step < steps; step += 1) {
    for (const part of machine.parts) {
      const omega = speed[part.id] ?? 0;
      angle[part.id] += omega * SIM_DT;
      if (part.type === 'spring') {
        const drive = neighborDrive(part.id, adj, speed);
        lift[part.id] = Math.min(1, lift[part.id] + drive * LIFT_RATE * SIM_DT);
      }
      if (part.type === 'switch' && neighborDrive(part.id, adj, speed) > 0.15) {
        switchOn[part.id] = true;
      }
    }
  }

  return { speed, angle, lift, switchOn };
}

export function isGear(type: PartType): boolean {
  return GEARS.has(type);
}

export function emptyMachine(): Machine {
  return { parts: [], connections: [] };
}
