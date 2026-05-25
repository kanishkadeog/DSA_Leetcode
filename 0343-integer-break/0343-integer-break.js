/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {

    if (n === 2) return 1;
    if (n === 3) return 2;

    let product = 1;

    while (n > 4) {
        product *= 3;
        n -= 3;
    }

    return product * n;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna