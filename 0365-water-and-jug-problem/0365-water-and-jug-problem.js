/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function(x, y, target) {
    
    // Cannot exceed total capacity
    if (target > x + y) {
        return false;
    }

    // Exact match cases
    if (target === 0 || target === x || target === y || target === x + y) {
        return true;
    }

    // GCD helper
    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    // Bézout's theorem
    return target % gcd(x, y) === 0;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna