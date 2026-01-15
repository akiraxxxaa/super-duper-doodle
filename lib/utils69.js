// Super Duper Doodle - Bug Fix
// Super Duper Doodle

/**
 * Safely divide two numbers with error handling
 */
function safeDivide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}

/**
 * Parse configuration string with improved error handling
 */
function parseConfig(configStr) {
    if (!configStr) {
        return {};
    }
    
    try {
        return JSON.parse(configStr);
    } catch (e) {
        console.warn(`Warning: Invalid JSON config: ${e.message}`);
        return {};
    }
}

module.exports = { safeDivide, parseConfig };
