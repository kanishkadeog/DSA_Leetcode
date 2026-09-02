/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const count = new Map();

    for (const ch of s) {
        count.set(ch, (count.get(ch) || 0) + 1);
    }

    let length = 0;
    let hasOdd = false;

    for (const freq of count.values()) {
        // Use the largest even portion
        length += Math.floor(freq / 2) * 2;

        if (freq % 2 === 1) {
            hasOdd = true;
        }
    }

    // One odd character can be placed in the center
    if (hasOdd) {
        length++;
    }

    return length;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna