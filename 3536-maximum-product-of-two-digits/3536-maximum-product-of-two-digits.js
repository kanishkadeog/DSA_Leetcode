/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    const digits = [];

    while (n > 0) {
        digits.push(n % 10);
        n = Math.floor(n / 10);
    }

    let ans = 0;

    for (let i = 0; i < digits.length; i++) {
        for (let j = i + 1; j < digits.length; j++) {
            ans = Math.max(ans, digits[i] * digits[j]);
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna