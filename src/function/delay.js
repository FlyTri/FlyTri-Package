async function delay(ms) {
    if (!ms) return undefined
    
    return new Promise((resolve) => setTimeout(resolve, ms));
};

module.exports = delay