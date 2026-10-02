/**
 * Error Logger Utility
 * 
 * Centralized error logging with context and export functionality
 */

const MAX_ERRORS = 100;
const errorLog = [];

/**
 * Log an error with context
 */
export function logError(error, context = {}) {
    const safeContext = {
        type: context.type,
        filename: context.filename,
        lineno: context.lineno,
        colno: context.colno,
        componentStack: context.componentStack,
        boundaryName: context.boundaryName
    };
    const errorEntry = {
        timestamp: new Date().toISOString(),
        message: error?.message || String(error),
        stack: error?.stack || null,
        context: safeContext
    };

    // Add to log (keep only last MAX_ERRORS)
    errorLog.push(errorEntry);
    if (errorLog.length > MAX_ERRORS) {
        errorLog.shift();
    }

    // Console log in development
    if (import.meta.env.DEV) {
        console.error('ErrorLogger:', errorEntry);
    }

    return errorEntry;
}

/**
 * Get all logged errors
 */
export function getErrors() {
    return [...errorLog];
}

/**
 * Clear all logged errors
 */
export function clearErrors() {
    errorLog.length = 0;
}

/**
 * Export errors as JSON string
 */
export function exportErrors() {
    return JSON.stringify({
        exportedAt: new Date().toISOString(),
        errorCount: errorLog.length,
        errors: errorLog
    }, null, 2);
}

/**
 * Download errors as file
 */
export function downloadErrors() {
    try {
        const jsonString = exportErrors();
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        const filename = `career-quest-errors-${timestamp}.json`;

        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        URL.revokeObjectURL(url);

        return { success: true, filename };
    } catch (error) {
        console.error('Failed to download errors:', error);
        return { success: false, error: error.message };
    }
}

/**
 * Initialize global error handlers
 */
export function initializeErrorHandlers() {
    if (typeof window === 'undefined') return;

    // Handle uncaught errors
    window.addEventListener('error', (event) => {
        logError(event.error || new Error(event.message), {
            type: 'uncaught_error',
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno
        });
    });

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
        const reason = event.reason;
        const error = reason instanceof Error ? reason : new Error(typeof reason === 'string' ? reason : 'Unhandled promise rejection');
        logError(error, { type: 'unhandled_rejection' });
    });

    if (import.meta.env.DEV) {
        console.log('ErrorLogger: Global error handlers initialized');
    }
}

// Auto-initialize in browser environment
if (typeof window !== 'undefined') {
    initializeErrorHandlers();
}
