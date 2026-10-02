export interface Puzzle {
  id: string;
  subject: string;
  title: string;
  prompt: string;
  choices: string[];
  answer: string;
  hints: string[];
  x: number;
  z: number;
}

export function normalizeAnswer(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

export function isPuzzleCorrect(puzzle: Puzzle, answer: string): boolean {
  return normalizeAnswer(answer) === normalizeAnswer(puzzle.answer);
}

export const PUZZLES: Puzzle[] = [
  {
    id: 'math-multiply',
    subject: 'Math',
    title: 'Times table',
    prompt: 'What is 8 × 7?',
    choices: ['54', '56', '63', '48'],
    answer: '56',
    hints: ['Split it into 8 × 5 and 8 × 2.', '8 × 5 is 40.'],
    x: -6,
    z: -4,
  },
  {
    id: 'science-freeze',
    subject: 'Science',
    title: 'Freezing point',
    prompt: 'At what temperature Celsius does water freeze?',
    choices: ['-10', '0', '32', '100'],
    answer: '0',
    hints: ['It is the mark between negative and positive on a Celsius thermometer.', 'Boiling is 100. Freezing is lower.'],
    x: 6,
    z: -3,
  },
  {
    id: 'logic-pattern',
    subject: 'Logic',
    title: 'Double the pattern',
    prompt: 'What comes next: 5, 10, 20, 40, ___?',
    choices: ['45', '60', '80', '100'],
    answer: '80',
    hints: ['Each number is double the one before it.', '40 doubled is the next term.'],
    x: -4,
    z: 5,
  },
  {
    id: 'geo-japan',
    subject: 'Geography',
    title: 'Capital city',
    prompt: 'What is the capital of Japan?',
    choices: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
    answer: 'Tokyo',
    hints: ['It is a city in Japan, not a neighbor country.', 'The name starts with T.'],
    x: 5,
    z: 4,
  },
  {
    id: 'words-opposite',
    subject: 'Words',
    title: 'Opposite word',
    prompt: 'Which word is the opposite of "begin"?',
    choices: ['start', 'open', 'end', 'first'],
    answer: 'end',
    hints: ['The opposite is what happens when something finishes.', 'It is not a synonym of begin.'],
    x: 0,
    z: -7,
  },
  {
    id: 'code-order',
    subject: 'Code',
    title: 'Order of operations',
    prompt: 'What is 3 + 4 × 2 when multiplication happens before addition?',
    choices: ['14', '11', '24', '9'],
    answer: '11',
    hints: ['Multiply 4 × 2 first.', 'Then add 3 to that product.'],
    x: -7,
    z: 1,
  },
  {
    id: 'fraction-add',
    subject: 'Fractions',
    title: 'Add fractions',
    prompt: 'What is 1/3 + 1/3?',
    choices: ['1/6', '2/6', '2/3', '1/9'],
    answer: '2/3',
    hints: ['The denominator stays 3.', 'Add the numerators: 1 + 1.'],
    x: 3,
    z: 7,
  },
  {
    id: 'ai-check',
    subject: 'AI literacy',
    title: 'Check the facts',
    prompt: 'Should you trust every chatbot answer without checking?',
    choices: ['yes', 'no'],
    answer: 'no',
    hints: ['Chatbots can be confidently wrong.', 'Checking another source is part of AI literacy.'],
    x: 7,
    z: -1,
  },
];
