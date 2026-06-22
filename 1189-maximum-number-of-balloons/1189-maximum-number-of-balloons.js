/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let freq = {};

    for (let ch of text) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    return Math.min(
        freq['b'] || 0,
        freq['a'] || 0,
        Math.floor((freq['l'] || 0) / 2),
        Math.floor((freq['o'] || 0) / 2),
        freq['n'] || 0
    );
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna