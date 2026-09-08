/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    if (n < 1000) {
        return 0;
    }

    return n - 999;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna