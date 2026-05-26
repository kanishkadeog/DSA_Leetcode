/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {

    const lower = new Set();
    const upper = new Set();

    for (const ch of word) {

        if (ch >= 'a' && ch <= 'z') {
            lower.add(ch);
        } else {
            upper.add(ch.toLowerCase());
        }
    }

    let count = 0;

    for (const ch of lower) {
        if (upper.has(ch)) {
            count++;
        }
    }

    return count;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna