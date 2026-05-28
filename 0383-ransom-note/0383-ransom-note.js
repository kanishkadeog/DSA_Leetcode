/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {

    let freq = new Array(26).fill(0);

    // count letters in magazine
    for (let ch of magazine) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    // use letters for ransomNote
    for (let ch of ransomNote) {

        let idx = ch.charCodeAt(0) - 97;

        freq[idx]--;

        if (freq[idx] < 0) {
            return false;
        }
    }

    return true;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna