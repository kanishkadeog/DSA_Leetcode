/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) return "0";

    const hex = "0123456789abcdef";
    let result = "";

    while (num !== 0) {
        // Get the last 4 bits
        const digit = num & 15;

        result = hex[digit] + result;

        // Unsigned right shift by 4 bits
        num >>>= 4;
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna