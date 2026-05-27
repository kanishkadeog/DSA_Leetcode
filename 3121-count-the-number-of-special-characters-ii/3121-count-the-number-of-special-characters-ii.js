/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let firstUpper = new Array(26).fill(Infinity);
    let lastLower = new Array(26).fill(-1);

    for (let i = 0; i < word.length; i++) {
        let ch = word[i];

        if (ch >= 'a' && ch <= 'z') {
            let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            lastLower[idx] = i;
        } else {
            let idx = ch.charCodeAt(0) - 'A'.charCodeAt(0);
            firstUpper[idx] = Math.min(firstUpper[idx], i);
        }
    }

    let count = 0;

    for (let i = 0; i < 26; i++) {
        if (lastLower[i] !== -1 &&
            firstUpper[i] !== Infinity &&
            lastLower[i] < firstUpper[i]) {
            count++;
        }
    }

    return count;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna