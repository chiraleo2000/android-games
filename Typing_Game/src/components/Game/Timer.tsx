import React from 'react';
import { formatTime } from '../../utils/gameLogic';

interface TimerProps {
  timeLeft: number;
  totalTime: number;
}

export const Timer: React.FC<TimerProps> = ({ timeLeft, totalTime }) => {
  const percentage = (timeLeft / totalTime) * 100;
  const isUrgent = timeLeft <= 30;
  const isCritical = timeLeft <= 10;

  let barColor = 'bg-gradient-to-r from-teal-500 to-emerald-500';
  let timeColor = 'text-teal-700 dark:text-teal-100';

  if (isUrgent) {
    barColor = 'bg-orange-400';
    timeColor = 'text-orange-500 dark:text-orange-300';
  }

  if (isCritical) {
    barColor = 'bg-red-500';
    timeColor = 'text-red-600 animate-pulse dark:text-red-300';
  }

  return React.createElement(
    'div',
    { className: 'flex flex-col items-center gap-1 w-full' },
    React.createElement(
      'div',
      { className: 'flex items-center gap-2' },
      React.createElement('span', { className: 'text-xl', 'aria-hidden': true }, '\u23F1\uFE0F'),
      React.createElement(
        'span',
        { className: `font-baloo font-bold text-3xl tabular-nums transition-colors ${timeColor}` },
        formatTime(timeLeft)
      )
    ),
    React.createElement(
      'div',
      { className: 'w-full h-3 bg-gray-200 rounded-full overflow-hidden dark:bg-slate-700' },
      React.createElement('div', {
        className: `h-full rounded-full transition-all duration-1000 ${barColor}`,
        style: { width: `${percentage}%` },
      })
    )
  );
};
