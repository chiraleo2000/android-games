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
    { className: 'settings-panel', 'aria-label': 'Settings' },
    React.createElement('h2', null, 'Settings'),
    React.createElement('p', null, 'Progress and preferences stay on this device.'),
    React.createElement('a', { href: PRIVACY_POLICY_URL, target: '_blank', rel: 'noreferrer' }, 'Privacy Policy'),
    React.createElement('a', { href: TERMS_OF_SERVICE_URL, target: '_blank', rel: 'noreferrer' }, 'Terms of Service'),
    React.createElement('p', null, `Support: ${SUPPORT_EMAIL}`),
    notice ? React.createElement('p', { role: 'status' }, notice) : null,
    confirming
      ? React.createElement(
          'div',
          { className: 'settings-confirm' },
          React.createElement(
            'p',
            null,
            'Delete all local progress and preferences? This cannot be undone.'
          ),
          React.createElement(
            'div',
            { className: 'settings-actions' },
            React.createElement(
              'button',
              { type: 'button', className: 'btn btn-primary', onClick: confirmDelete },
              'Confirm delete'
            ),
            React.createElement(
              'button',
              { type: 'button', className: 'btn btn-ghost', onClick: () => setConfirming(false) },
              'Cancel'
            )
          )
        )
      : React.createElement(
          'button',
          { type: 'button', className: 'btn btn-ghost', onClick: () => setConfirming(true) },
          'Delete all local data'
        )
  );
}
