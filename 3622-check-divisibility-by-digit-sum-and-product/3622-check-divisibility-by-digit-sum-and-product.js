/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let sum = 0;
    let product = 1;

    let x = n;

    while (x > 0) {
        const digit = x % 10;

        sum += digit;
        product *= digit;

        x = Math.floor(x / 10);
    }

    return n % (sum + product) === 0;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna