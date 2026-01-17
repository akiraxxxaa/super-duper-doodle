// Super Duper Doodle - Feature Enhancement
// Super Duper Doodle

/**
 * Process and validate input data
 * @param {Array} data - Input data array
 * @returns {Array} Processed data
 */
function processData(data) {
    if (!data || !Array.isArray(data)) {
        throw new Error('Data must be a non-empty array');
    }
    
    return data.map(item => {
        if (typeof item === 'object' && item !== null) {
            return validateItem(item);
        }
        return String(item).trim();
    });
}

/**
 * Validate individual item structure
 * @param {Object} item - Item to validate
 * @returns {Object} Validated item
 */
function validateItem(item) {
    const requiredFields = ['id', 'name'];
    for (const field of requiredFields) {
        if (!(field in item)) {
            throw new Error(`Missing required field: ${field}`);
        }
    }
    return item;
}

class DataProcessor {
    constructor(config = {}) {
        this.config = config;
        this.cache = new Map();
    }
    
    process(data) {
        const cacheKey = JSON.stringify(data);
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }
        
        const result = processData(data);
        this.cache.set(cacheKey, result);
        return result;
    }
}

module.exports = { processData, validateItem, DataProcessor };


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
