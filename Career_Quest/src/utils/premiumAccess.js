/**
 * Premium Access Manager
 * 
 * Unified access layer for premium content. Delegates to licenseManager.js
 * for license validation while maintaining backward-compatible API.
 * 
 * In production, the licenseManager handles:
 *   - Google Play Billing API (Android)
 *   - Apple StoreKit 2 (iOS)
 *   - Receipt validation & offline grace periods
 *   - Trial system with career limits
 * 
 * This module provides the simple API consumed by UI components.
 */

import {
    isPremiumActive,
    activatePremium as licenseActivate,
    deactivatePremium as licenseDeactivate,
    togglePremium as licenseToggle,
    getEffectiveLicenseType,
    getLicenseInfo,
    LICENSE_TYPES,
} from './licenseManager.js';

/**
 * Check if the user has premium access (full or trial)
 * @returns {boolean}
 */
export const isPremiumUser = () => {
    return isPremiumActive();
};

/**
 * Activate premium access
 * @param {Object} [receipt] - Optional purchase receipt for production
 */
export const activatePremium = (receipt) => {
    licenseActivate(receipt);
};

/**
 * Deactivate premium access
 * @param {string} [reason] - Reason for deactivation
 */
export const deactivatePremium = (reason) => {
    licenseDeactivate(reason);
};

/**
 * Toggle premium access (for development/testing)
 * @returns {boolean} New premium state
 */
export const togglePremium = () => {
    return licenseToggle();
};

/**
 * Get detailed license information for UI display
 * @returns {Object} License info including type, trial status, purchase info
 */
export { getLicenseInfo };

/**
 * List of all premium career IDs
 */
export const PREMIUM_CAREER_IDS = [
    // Tech
    'ai-researcher',
    'cloud-architect',
    'devops-engineer',
    // Healthcare
    'veterinarian',
    'paramedic',
    'medical-researcher',
    // Business
    'ceo',
    'consultant',
    // Finance
    'financial-analyst',
    // Creative
    'director',
    'animator',
    'architect',
    // Education
    'professor',
    'education-admin',
    'curriculum-designer',
    // Service
    'journalist',
    'psychologist',
    // Science
    'astronomer',
    'marine-biologist',
    'physicist',
    'forensic-scientist',
    // Trades
    'pilot',
    'construction-manager',
    'hvac-technician'
];

/**
 * Check if a specific career ID is premium
 * @param {string} careerId
 * @returns {boolean}
 */
export const isPremiumCareer = (careerId) => {
    return PREMIUM_CAREER_IDS.includes(careerId);
};

/**
 * Check if user can access a specific career
 * @param {object} career - career object with isPremium flag
 * @returns {boolean}
 */
export const canAccessCareer = (career) => {
    if (!career.isPremium) return true;
    return isPremiumUser();
};
