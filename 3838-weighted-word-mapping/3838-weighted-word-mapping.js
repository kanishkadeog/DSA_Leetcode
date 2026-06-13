/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
    let result = "";

    for (let word of words) {
        let sum = 0;

        // Calculate total weight of the word
        for (let ch of word) {
            sum += weights[ch.charCodeAt(0) - 97];
        }

        // Modulo 26
        let val = sum % 26;

        // Reverse mapping:
        // 0 -> z, 1 -> y, ..., 25 -> a
        result += String.fromCharCode(122 - val);
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna