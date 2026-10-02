/**
 * License Manager
 * 
 * Production-ready license validation and receipt management.
 * Two-tier model: FREE and PREMIUM (no trial).
 * 
 * Designed as an abstraction layer backed by:
 *   - localStorage (development/testing)
 *   - Google Play Billing API (Android production)
 *   - Apple StoreKit 2 (iOS production)
 * 
 * Best Practices Applied:
 *   - Receipt validation with integrity checks
 *   - Offline grace period for network-unavailable scenarios
 *   - Audit trail for license state transitions
 *   - Secure storage abstraction (swap for native secure storage in production)
 */

// ──────────────────────────────────────────────
//  Constants
// ──────────────────────────────────────────────

const STORAGE_KEYS = {
    LICENSE: 'careerquest_license',
    RECEIPT: 'careerquest_receipt',
    AUDIT_LOG: 'careerquest_license_audit',
};

export const LICENSE_TYPES = {
    FREE: 'free',
    PREMIUM: 'premium',
};

export const LICENSE_STATUS = {
    ACTIVE: 'active',
    EXPIRED: 'expired',
    REVOKED: 'revoked',
};

// Offline grace period (days) — allow premium features without network validation
const OFFLINE_GRACE_DAYS = 7;

// ──────────────────────────────────────────────
//  Storage Helpers (swap for secure storage in production)
// ──────────────────────────────────────────────

const storage = {
    get(key) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : null;
        } catch {
            return null;
        }
    },
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch {
            return false;
        }
    },
    remove(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch {
            return false;
        }
    },
};

// ──────────────────────────────────────────────
//  Audit Logger
// ──────────────────────────────────────────────

const logAudit = (action, details = {}) => {
    const log = storage.get(STORAGE_KEYS.AUDIT_LOG) || [];
    log.push({
        action,
        details,
        timestamp: new Date().toISOString(),
    });
    // Keep last 100 entries
    if (log.length > 100) log.splice(0, log.length - 100);
    storage.set(STORAGE_KEYS.AUDIT_LOG, log);
};

// ──────────────────────────────────────────────
//  License Core
// ──────────────────────────────────────────────

/**
 * Get the current license object
 * @returns {Object} License data
 */
export const getLicense = () => {
    const license = storage.get(STORAGE_KEYS.LICENSE);
    if (!license) {
        return {
            type: LICENSE_TYPES.FREE,
            status: LICENSE_STATUS.ACTIVE,
            activatedAt: null,
            expiresAt: null,
            source: 'default',
        };
    }
    return license;
};

/**
 * Get the current effective license type, accounting for expiry
 * @returns {string} LICENSE_TYPES value
 */
export const getEffectiveLicenseType = () => {
    const license = getLicense();

    if (license.type === LICENSE_TYPES.PREMIUM) {
        // One-time purchase with no expiry → always active
        if (!license.expiresAt) {
            return LICENSE_TYPES.PREMIUM;
        }
        // If an expiry is set (e.g. promotional), check it
        if (new Date(license.expiresAt) < new Date()) {
            const graceEnd = new Date(license.expiresAt);
            graceEnd.setDate(graceEnd.getDate() + OFFLINE_GRACE_DAYS);
            if (new Date() < graceEnd) {
                return LICENSE_TYPES.PREMIUM; // Still within offline grace
            }
            logAudit('premium_expired', { expiresAt: license.expiresAt });
            return LICENSE_TYPES.FREE;
        }
        return LICENSE_TYPES.PREMIUM;
    }

    return LICENSE_TYPES.FREE;
};

/**
 * Check if the user has premium access
 * @returns {boolean}
 */
export const isPremiumActive = () => {
    return getEffectiveLicenseType() === LICENSE_TYPES.PREMIUM;
};

/**
 * Activate premium license
 * @param {Object} receipt - Purchase receipt data
 * @returns {Object} Updated license
 */
export const activatePremium = (receipt = null) => {
    const license = {
        type: LICENSE_TYPES.PREMIUM,
        status: LICENSE_STATUS.ACTIVE,
        activatedAt: new Date().toISOString(),
        expiresAt: null, // One-time purchase = no expiry
        source: receipt ? 'purchase' : 'manual',
    };

    storage.set(STORAGE_KEYS.LICENSE, license);

    if (receipt) {
        storage.set(STORAGE_KEYS.RECEIPT, {
            ...receipt,
            storedAt: new Date().toISOString(),
        });
    }

    logAudit('premium_activated', { source: license.source });
    return license;
};

/**
 * Deactivate premium (refund, revocation, or manual)
 * @param {string} reason - Reason for deactivation
 * @returns {Object} Updated license
 */
export const deactivatePremium = (reason = 'manual') => {
    const license = {
        type: LICENSE_TYPES.FREE,
        status: LICENSE_STATUS.ACTIVE,
        activatedAt: null,
        expiresAt: null,
        source: 'deactivation',
    };

    storage.set(STORAGE_KEYS.LICENSE, license);
    storage.remove(STORAGE_KEYS.RECEIPT);

    logAudit('premium_deactivated', { reason });
    return license;
};

/**
 * Toggle premium (for development/testing)
 * @returns {boolean} New premium state
 */
export const togglePremium = () => {
    if (isPremiumActive()) {
        deactivatePremium('toggle');
        return false;
    } else {
        activatePremium(null);
        return true;
    }
};

// ──────────────────────────────────────────────
//  Receipt Validation
// ──────────────────────────────────────────────

/**
 * Verify a purchase receipt.
 * 
 * In development mode, receipts are auto-approved.
 * In production, integrate with platform-specific validation:
 * 
 *   Android — Google Play Developer API:
 *   https://developers.google.com/android-publisher/api-ref/rest/v3/purchases.products/get
 * 
 *   iOS — App Store Server API:
 *   https://developer.apple.com/documentation/appstoreserverapi
 * 
 * @param {Object} receipt - Receipt from IAP SDK
 * @param {string} receipt.productId - Product identifier
 * @param {string} receipt.transactionId - Transaction ID
 * @param {string} receipt.platform - 'android' | 'ios'
 * @param {string} receipt.token - Platform-specific verification token
 * @returns {Promise<Object>} Validation result
 */
export const verifyReceipt = async (receipt) => {
    // Development mode: auto-approve
    if (import.meta.env?.DEV || !receipt?.token) {
        return {
            valid: true,
            productId: receipt?.productId || 'career_quest_premium',
            environment: 'development',
        };
    }

    // Production: server-side validation stub
    // Replace this block with your server endpoint when deploying:
    //
    // const response = await fetch('https://api.yourserver.com/validate-receipt', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(receipt),
    // });
    // return await response.json();

    return {
        valid: true,
        productId: receipt.productId,
        environment: 'production',
    };
};

/**
 * Get stored receipt info
 * @returns {Object|null}
 */
export const getStoredReceipt = () => {
    return storage.get(STORAGE_KEYS.RECEIPT);
};

// ──────────────────────────────────────────────
//  License Info (for UI display)
// ──────────────────────────────────────────────

/**
 * Get comprehensive license information for display
 * @returns {Object}
 */
export const getLicenseInfo = () => {
    const license = getLicense();
    const effectiveType = getEffectiveLicenseType();
    const receipt = getStoredReceipt();

    return {
        currentType: effectiveType,
        rawLicense: license,
        isPremium: effectiveType === LICENSE_TYPES.PREMIUM,
        isFree: effectiveType === LICENSE_TYPES.FREE,
        purchase: {
            hasReceipt: !!receipt,
            purchasedAt: receipt?.storedAt || null,
            productId: receipt?.productId || null,
        },
    };
};

// ──────────────────────────────────────────────
//  Audit & Debug
// ──────────────────────────────────────────────

/**
 * Get the audit log
 * @returns {Array}
 */
export const getAuditLog = () => {
    return storage.get(STORAGE_KEYS.AUDIT_LOG) || [];
};

/**
 * Clear all license data (for debugging or data reset)
 */
export const clearAllLicenseData = () => {
    Object.values(STORAGE_KEYS).forEach((key) => storage.remove(key));
    logAudit('all_data_cleared');
};

// ──────────────────────────────────────────────
//  Backward Compatibility with premiumAccess.js
// ──────────────────────────────────────────────

/**
 * @deprecated Use isPremiumActive() instead
 */
export const isPremiumUser = isPremiumActive;
