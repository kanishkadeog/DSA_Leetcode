/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

    let freq = new Array(26).fill(0);

    // count frequency
    for (let ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    // find first unique character
    for (let i = 0; i < s.length; i++) {

        let idx = s[i].charCodeAt(0) - 97;

        if (freq[idx] === 1) {
            return i;
        }
    }

    return -1;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna