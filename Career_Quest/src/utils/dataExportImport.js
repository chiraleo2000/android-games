/**
 * Data Export/Import Utility
 * 
 * Handles exporting and importing user data for backup and restore
 */

import { storageService as StorageService } from '../services/StorageService.js';
import { validateData, migrateData, createEmptyData, getCurrentVersion } from './dataMigration.js';

const EXPORT_FILE_PREFIX = 'career-quest-backup';

/**
 * Export all user data to JSON
 */
export async function exportUserData() {
    try {
        // Gather all data from storage
        const careerResults = await StorageService.get('career_results') || [];
        const personalityResults = await StorageService.get('personality_results') || [];
        const theme = await StorageService.get('theme') || 'dark';
        const language = await StorageService.get('careerquest_language') || 'en';
        const musicEnabled = await StorageService.get('careerquest_music') !== 'false';
        const musicVolume = parseFloat(await StorageService.get('careerquest_volume') || '0.5');
        const progress = await StorageService.get('careerQuestState');

        // Create export object
        const exportData = {
            version: getCurrentVersion(),
            exportedAt: new Date().toISOString(),
            careerResults,
            personalityResults,
            preferences: {
                theme,
                language,
                musicEnabled,
                musicVolume
            },
            progress: progress ? JSON.parse(progress) : null
        };

        return {
            success: true,
            data: exportData
        };
    } catch (error) {
        console.error('Export failed:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

/**
 * Import user data from JSON
 */
export async function importUserData(importData) {
    try {
        // Validate data structure
        const validation = validateData(importData);
        if (!validation.valid) {
            return {
                success: false,
                error: validation.error
            };
        }

        // Migrate if needed
        const migratedData = migrateData(importData);

        // Import data to storage
        if (migratedData.careerResults) {
            await StorageService.set('career_results', migratedData.careerResults);
        }

        if (migratedData.personalityResults) {
            await StorageService.set('personality_results', migratedData.personalityResults);
        }

        if (migratedData.preferences) {
            const prefs = migratedData.preferences;
            if (prefs.theme) await StorageService.set('theme', prefs.theme);
            if (prefs.language) await StorageService.set('careerquest_language', prefs.language);
            if (prefs.musicEnabled !== undefined) await StorageService.set('careerquest_music', prefs.musicEnabled.toString());
            if (prefs.musicVolume !== undefined) await StorageService.set('careerquest_volume', prefs.musicVolume.toString());
        }

        if (migratedData.progress) {
            await StorageService.set('careerQuestState', JSON.stringify(migratedData.progress));
        }

        return {
            success: true,
            migratedFrom: migratedData.migratedFrom
        };
    } catch (error) {
        console.error('Import failed:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

/**
 * Download data as JSON file
 */
export function downloadDataAsFile(data) {
    try {
        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        const filename = `${EXPORT_FILE_PREFIX}-${timestamp}.json`;

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);

        return {
            success: true,
            filename
        };
    } catch (error) {
        console.error('Download failed:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

/**
 * Read data from uploaded file
 */
export function readDataFromFile(file) {
    return new Promise((resolve, reject) => {
        if (!file) {
            reject(new Error('No file provided'));
            return;
        }

        if (!file.name.endsWith('.json')) {
            reject(new Error('Invalid file type. Please upload a JSON file.'));
            return;
        }

        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                resolve(data);
            } catch (error) {
                reject(new Error('Invalid JSON file'));
            }
        };

        reader.onerror = () => {
            reject(new Error('Failed to read file'));
        };

        reader.readAsText(file);
    });
}

/**
 * Clear all user data
 */
const ALL_STORAGE_KEYS = [
    'career_results',
    'personality_results',
    'careerQuestState',
    'theme',
    'careerquest_language',
    'careerquest_music',
    'careerquest_volume',
    'careerquest_theme',
    'careerquest_career_results',
    'careerquest_personality_results',
    'careerquest_statistics_cache',
];

export { ALL_STORAGE_KEYS };

export async function clearAllData() {
    try {
        for (const key of ALL_STORAGE_KEYS) {
            await StorageService.remove(key);
        }
        return { success: true };
    } catch (error) {
        console.error('Clear data failed:', error);
        return {
            success: false,
            error: error.message
        };
    }
}
