/**
 * Data Migration Utility
 * 
 * Handles data schema versioning and migration between versions
 */

const CURRENT_VERSION = '1.0.0';

/**
 * Data schema versions
 */
const SCHEMA_VERSIONS = {
    '1.0.0': {
        description: 'Initial schema with career results and personality results',
        fields: ['version', 'careerResults', 'personalityResults', 'preferences', 'progress']
    }
};

/**
 * Validate data structure
 */
export function validateData(data) {
    if (!data || typeof data !== 'object') {
        return { valid: false, error: 'Invalid data format' };
    }

    if (!data.version) {
        return { valid: false, error: 'Missing version field' };
    }

    const schema = SCHEMA_VERSIONS[data.version];
    if (!schema) {
        return { valid: false, error: `Unknown version: ${data.version}` };
    }

    return { valid: true };
}

/**
 * Migrate data from old version to current version
 */
export function migrateData(data) {
    if (!data || !data.version) {
        // No version means very old data, create new structure
        return {
            version: CURRENT_VERSION,
            careerResults: [],
            personalityResults: [],
            preferences: {},
            progress: null,
            migratedFrom: 'legacy',
            migratedAt: new Date().toISOString()
        };
    }

    // If already current version, return as-is
    if (data.version === CURRENT_VERSION) {
        return data;
    }

    // Migration chain (add more as versions increase)
    let migratedData = { ...data };

    // Example: Migrate from 0.9.0 to 1.0.0
    // if (compareVersions(data.version, '1.0.0') < 0) {
    //     migratedData = migrate_0_9_to_1_0(migratedData);
    // }

    // Update version
    migratedData.version = CURRENT_VERSION;
    migratedData.migratedFrom = data.version;
    migratedData.migratedAt = new Date().toISOString();

    return migratedData;
}

/**
 * Create empty data structure with current version
 */
export function createEmptyData() {
    return {
        version: CURRENT_VERSION,
        careerResults: [],
        personalityResults: [],
        preferences: {
            theme: 'dark',
            language: 'en',
            musicEnabled: true,
            musicVolume: 0.5
        },
        progress: null,
        createdAt: new Date().toISOString()
    };
}

/**
 * Compare two version strings
 * Returns: -1 if v1 < v2, 0 if v1 === v2, 1 if v1 > v2
 */
function compareVersions(v1, v2) {
    const parts1 = v1.split('.').map(Number);
    const parts2 = v2.split('.').map(Number);

    for (let i = 0; i < Math.max(parts1.length, parts2.length); i++) {
        const part1 = parts1[i] || 0;
        const part2 = parts2[i] || 0;

        if (part1 < part2) return -1;
        if (part1 > part2) return 1;
    }

    return 0;
}

/**
 * Get current schema version
 */
export function getCurrentVersion() {
    return CURRENT_VERSION;
}

/**
 * Check if data needs migration
 */
export function needsMigration(data) {
    if (!data || !data.version) return true;
    return data.version !== CURRENT_VERSION;
}
