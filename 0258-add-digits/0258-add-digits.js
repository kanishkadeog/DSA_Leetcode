/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (num === 0) return 0;
    return num % 9 === 0 ? 9 : num % 9;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna