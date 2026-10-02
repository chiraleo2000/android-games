import {
  Machine,
  PartType,
  SimSample,
  WORKSPACE_TARGET,
  isGear,
  simulate,
} from './simulation';

export type ChallengeTheme = 'transmit' | 'lift' | 'switch' | 'target';

export type WinRule =
  | { kind: 'larger-gear-slower' }
  | { kind: 'smaller-gear-faster' }
  | { kind: 'gears-spinning'; count: number }
  | { kind: 'parts-spinning'; part: PartType; count: number }
  | { kind: 'belt-drive' }
  | { kind: 'spring-lift'; min: number; max?: number; seconds: number; count?: number }
  | { kind: 'spring-and-large'; min: number; seconds: number }
  | { kind: 'hinge-angle'; min: number; seconds: number }
  | { kind: 'switches-on'; count: number }
  | { kind: 'switch-and-wheel' }
  | { kind: 'switch-and-ratio' }
  | { kind: 'switch-and-hinge' }
  | { kind: 'wheel-reaches'; seconds: number }
  | { kind: 'wheel-on-target' }
  | { kind: 'speed-band'; part: PartType; min: number; max: number }
  | { kind: 'combo'; seconds: number };

export interface Challenge {
  id: string;
  theme: ChallengeTheme;
  title: string;
  prompt: string;
  rule: WinRule;
}

export const CHALLENGES: Challenge[] = [
  {
    id: 'transmit-large-slower',
    theme: 'transmit',
    title: 'Big gears turn slowly',
    prompt: 'Drive a small gear and a large gear from the same motor. The large gear must spin, and it must spin slower than the small gear.',
    rule: { kind: 'larger-gear-slower' },
  },
  {
    id: 'transmit-small-faster',
    theme: 'transmit',
    title: 'Small gears speed up',
    prompt: 'Mesh a medium gear into a small gear. The small gear must turn faster than the medium gear.',
    rule: { kind: 'smaller-gear-faster' },
  },
  {
    id: 'transmit-belt',
    theme: 'transmit',
    title: 'Belt a wheel',
    prompt: 'Connect a motor to a pulley and a wheel so the belt carries power. Both the pulley and the wheel must spin.',
    rule: { kind: 'belt-drive' },
  },
  {
    id: 'transmit-three-gears',
    theme: 'transmit',
    title: 'Three gears alive',
    prompt: 'Get three different gears spinning at once from one motor.',
    rule: { kind: 'gears-spinning', count: 3 },
  },
  {
    id: 'transmit-two-wheels',
    theme: 'transmit',
    title: 'Two wheels rolling',
    prompt: 'Power two wheels from the motor so both are turning.',
    rule: { kind: 'parts-spinning', part: 'wheel', count: 2 },
  },
  {
    id: 'lift-spring',
    theme: 'lift',
    title: 'Stretch the spring',
    prompt: 'Connect a spinning part to a spring until the spring is at least half extended.',
    rule: { kind: 'spring-lift', min: 0.5, seconds: 2 },
  },
  {
    id: 'lift-spring-high',
    theme: 'lift',
    title: 'Full lift',
    prompt: 'Drive a spring hard enough that it reaches nearly full extension.',
    rule: { kind: 'spring-lift', min: 0.85, seconds: 3 },
  },
  {
    id: 'lift-through-large',
    theme: 'lift',
    title: 'Lift through a large gear',
    prompt: 'Spin a large gear and use it to extend a spring at least a little.',
    rule: { kind: 'spring-and-large', min: 0.3, seconds: 2 },
  },
  {
    id: 'lift-hinge',
    theme: 'lift',
    title: 'Open the hinge',
    prompt: 'Connect the motor to a hinge so the hinge swings more than a radian.',
    rule: { kind: 'hinge-angle', min: 1.2, seconds: 2 },
  },
  {
    id: 'lift-two-springs',
    theme: 'lift',
    title: 'Twin springs',
    prompt: 'Extend two springs at the same time.',
    rule: { kind: 'spring-lift', min: 0.4, seconds: 2, count: 2 },
  },
  {
    id: 'switch-one',
    theme: 'switch',
    title: 'Hit the switch',
    prompt: 'Send motion into a switch so it turns on.',
    rule: { kind: 'switches-on', count: 1 },
  },
  {
    id: 'switch-wheel',
    theme: 'switch',
    title: 'Wheel and switch',
    prompt: 'Keep a wheel spinning and turn a switch on in the same machine.',
    rule: { kind: 'switch-and-wheel' },
  },
  {
    id: 'switch-two',
    theme: 'switch',
    title: 'Two switches',
    prompt: 'Turn on two switches with one motor.',
    rule: { kind: 'switches-on', count: 2 },
  },
  {
    id: 'switch-ratio',
    theme: 'switch',
    title: 'Switch plus ratio',
    prompt: 'Turn a switch on while a large gear still turns slower than a small gear.',
    rule: { kind: 'switch-and-ratio' },
  },
  {
    id: 'switch-hinge',
    theme: 'switch',
    title: 'Hinge hits the switch',
    prompt: 'Swing a hinge and turn a switch on together.',
    rule: { kind: 'switch-and-hinge' },
  },
  {
    id: 'target-spin',
    theme: 'target',
    title: 'Wheel goes full circle',
    prompt: 'Drive a wheel until it has turned at least one full revolution.',
    rule: { kind: 'wheel-reaches', seconds: 4 },
  },
  {
    id: 'target-zone',
    theme: 'target',
    title: 'Park on the target',
    prompt: 'Place a spinning wheel on the gold target circle.',
    rule: { kind: 'wheel-on-target' },
  },
  {
    id: 'target-speed',
    theme: 'target',
    title: 'Slow and steady',
    prompt: 'Make a large gear turn between 0.5 and 1.5 radians per second.',
    rule: { kind: 'speed-band', part: 'gear-l', min: 0.5, max: 1.5 },
  },
  {
    id: 'target-height',
    theme: 'target',
    title: 'Just the right lift',
    prompt: 'After one second, a spring should be partly lifted: more than 20% and less than 70%. A large gear is slow enough. A motor alone is too fast.',
    rule: { kind: 'spring-lift', min: 0.2, max: 0.7, seconds: 1 },
  },
  {
    id: 'target-combo',
    theme: 'target',
    title: 'Workshop finale',
    prompt: 'In one machine, turn a switch on, extend a spring, and spin a wheel through a full turn.',
    rule: { kind: 'combo', seconds: 4 },
  },
];

function absSpeed(sample: SimSample, id: string): number {
  return Math.abs(sample.speed[id] ?? 0);
}

function spinning(machine: Machine, sample: SimSample, type: PartType): boolean {
  return machine.parts.some((part) => part.type === type && absSpeed(sample, part.id) > 0.05);
}

function largerSlower(machine: Machine, sample: SimSample): boolean {
  const small = machine.parts.filter((part) => part.type === 'gear-s' && absSpeed(sample, part.id) > 0.05);
  const large = machine.parts.filter((part) => part.type === 'gear-l' && absSpeed(sample, part.id) > 0.05);
  if (small.length === 0 || large.length === 0) return false;
  const smallMax = Math.max(...small.map((part) => absSpeed(sample, part.id)));
  const largeMax = Math.max(...large.map((part) => absSpeed(sample, part.id)));
  return largeMax < smallMax;
}

function smallerFaster(machine: Machine, sample: SimSample): boolean {
  const medium = machine.parts.filter((part) => part.type === 'gear-m' && absSpeed(sample, part.id) > 0.05);
  const small = machine.parts.filter((part) => part.type === 'gear-s' && absSpeed(sample, part.id) > 0.05);
  if (medium.length === 0 || small.length === 0) return false;
  const mediumMax = Math.max(...medium.map((part) => absSpeed(sample, part.id)));
  const smallMax = Math.max(...small.map((part) => absSpeed(sample, part.id)));
  return smallMax > mediumMax;
}

function springInBand(sample: SimSample, machine: Machine, min: number, max?: number): boolean {
  return machine.parts.some((part) => {
    if (part.type !== 'spring') return false;
    const value = sample.lift[part.id] ?? 0;
    return value >= min && (max === undefined || value <= max);
  });
}

function switchesOn(machine: Machine, sample: SimSample): number {
  return machine.parts.filter((part) => part.type === 'switch' && sample.switchOn[part.id]).length;
}

function hingeMoved(machine: Machine, sample: SimSample, min: number): boolean {
  return machine.parts.some((part) => part.type === 'hinge' && Math.abs(sample.angle[part.id] ?? 0) >= min);
}

function wheelReached(machine: Machine, sample: SimSample): boolean {
  return machine.parts.some(
    (part) => part.type === 'wheel' && Math.abs(sample.angle[part.id] ?? 0) >= Math.PI * 2,
  );
}

export function evaluateChallenge(challenge: Challenge, machine: Machine, sample: SimSample): boolean {
  const rule = challenge.rule;
  switch (rule.kind) {
    case 'larger-gear-slower':
      return largerSlower(machine, sample);
    case 'smaller-gear-faster':
      return smallerFaster(machine, sample);
    case 'gears-spinning':
      return machine.parts.filter((part) => isGear(part.type) && absSpeed(sample, part.id) > 0.05).length >= rule.count;
    case 'parts-spinning':
      return machine.parts.filter((part) => part.type === rule.part && absSpeed(sample, part.id) > 0.05).length >= rule.count;
    case 'belt-drive':
      return spinning(machine, sample, 'pulley') && spinning(machine, sample, 'wheel');
    case 'spring-lift': {
      const springs = machine.parts.filter((part) => part.type === 'spring');
      const ready = springs.filter((part) => {
        const value = sample.lift[part.id] ?? 0;
        return value >= rule.min && (rule.max === undefined || value <= rule.max);
      });
      return ready.length >= (rule.count ?? 1);
    }
    case 'spring-and-large':
      return spinning(machine, sample, 'gear-l') && springInBand(sample, machine, rule.min);
    case 'hinge-angle':
      return hingeMoved(machine, sample, rule.min);
    case 'switches-on':
      return switchesOn(machine, sample) >= rule.count;
    case 'switch-and-wheel':
      return switchesOn(machine, sample) >= 1 && spinning(machine, sample, 'wheel');
    case 'switch-and-ratio':
      return switchesOn(machine, sample) >= 1 && largerSlower(machine, sample);
    case 'switch-and-hinge':
      return switchesOn(machine, sample) >= 1 && hingeMoved(machine, sample, 0.8);
    case 'wheel-reaches':
      return wheelReached(machine, sample);
    case 'wheel-on-target':
      return machine.parts.some((part) => {
        if (part.type !== 'wheel' || absSpeed(sample, part.id) <= 0.05) return false;
        const dx = part.x - WORKSPACE_TARGET.x;
        const dy = part.y - WORKSPACE_TARGET.y;
        return Math.hypot(dx, dy) <= WORKSPACE_TARGET.radius;
      });
    case 'speed-band':
      return machine.parts.some((part) => {
        if (part.type !== rule.part) return false;
        const value = absSpeed(sample, part.id);
        return value >= rule.min && value <= rule.max;
      });
    case 'combo':
      return (
        switchesOn(machine, sample) >= 1 &&
        machine.parts.some((part) => part.type === 'spring' && (sample.lift[part.id] ?? 0) >= 0.3) &&
        wheelReached(machine, sample)
      );
    default:
      return false;
  }
}

function secondsFor(challenge: Challenge): number {
  const rule = challenge.rule;
  if ('seconds' in rule && typeof rule.seconds === 'number') return rule.seconds;
  return 2;
}

export function challengeWon(challenge: Challenge, machine: Machine): boolean {
  const sample = simulate(machine, secondsFor(challenge));
  return evaluateChallenge(challenge, machine, sample);
}

export function challengeById(id: string): Challenge | undefined {
  return CHALLENGES.find((challenge) => challenge.id === id);
}
