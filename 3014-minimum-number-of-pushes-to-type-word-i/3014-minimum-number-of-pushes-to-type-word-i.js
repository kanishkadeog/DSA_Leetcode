/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    let ans = 0;

    for (let i = 0; i < word.length; i++) {
        ans += Math.floor(i / 8) + 1;
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna