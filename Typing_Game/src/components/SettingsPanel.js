import React, { useState } from 'react';
import { PRIVACY_POLICY_URL, SUPPORT_EMAIL, TERMS_OF_SERVICE_URL } from '../config/legal.js';
import { confirmAndClearAllData } from '../utils/clearLocalData.js';

export function SettingsPanel({ onFreshStart, notice }) {
  const [confirming, setConfirming] = useState(false);

  const confirmDelete = () => {
    confirmAndClearAllData(true, onFreshStart);
    setConfirming(false);
  };

  return React.createElement(
    'section',
    {
      className: 'mt-2 grid gap-3 rounded-3xl border-4 border-white bg-white/95 p-4 text-left text-slate-800 shadow-xl',
      'aria-label': 'Settings',
    },
    React.createElement('h2', { className: 'font-baloo text-2xl font-black text-teal-800' }, 'Settings'),
    React.createElement(
      'p',
      { className: 'font-nunito text-sm font-semibold text-slate-600' },
      'Progress and preferences stay on this device.'
    ),
    React.createElement(
      'a',
      { className: 'font-nunito font-extrabold text-teal-700 underline', href: PRIVACY_POLICY_URL },
      'Privacy Policy'
    ),
    React.createElement(
      'a',
      { className: 'font-nunito font-extrabold text-teal-700 underline', href: TERMS_OF_SERVICE_URL },
      'Terms of Service'
    ),
    React.createElement(
      'p',
      { className: 'font-nunito text-sm text-slate-600' },
      `Support: ${SUPPORT_EMAIL}`
    ),
    notice
      ? React.createElement(
          'p',
          { role: 'status', className: 'font-nunito font-extrabold text-emerald-700' },
          notice
        )
      : null,
    confirming
      ? React.createElement(
          'div',
          { className: 'grid gap-3' },
          React.createElement(
            'p',
            { className: 'font-nunito text-sm font-bold text-slate-700' },
            'Delete all local progress and preferences? This cannot be undone.'
          ),
          React.createElement(
            'div',
            { className: 'flex flex-wrap gap-2' },
            React.createElement(
              'button',
              {
                type: 'button',
                className: 'rounded-2xl bg-rose-500 px-4 py-3 font-baloo text-lg font-black text-white',
                onClick: confirmDelete,
              },
              'Confirm delete'
            ),
            React.createElement(
              'button',
              {
                type: 'button',
                className: 'rounded-2xl bg-slate-200 px-4 py-3 font-baloo text-lg font-black text-slate-700',
                onClick: () => setConfirming(false),
              },
              'Cancel'
            )
          )
        )
      : React.createElement(
          'button',
          {
            type: 'button',
            className: 'w-fit rounded-2xl bg-rose-500 px-4 py-3 font-baloo text-lg font-black text-white',
            onClick: () => setConfirming(true),
          },
          'Delete all local data'
        )
  );
}
