/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    
    let digits = 1;   // digits per number
    let count = 9;    // how many numbers in this group
    let start = 1;    // first number in group

    // Find correct digit-length group
    while (n > digits * count) {
        n -= digits * count;
        digits++;
        count *= 10;
        start *= 10;
    }

    // Find actual number containing nth digit
    let num = start + Math.floor((n - 1) / digits);

    // Find digit position inside that number
    let str = num.toString();

    return Number(str[(n - 1) % digits]);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna