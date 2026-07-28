/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    const freq = new Array(26).fill(0);

    for (const ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    let firstHalf = "";
    let middle = "";

    for (let i = 0; i < 26; i++) {
        firstHalf += String.fromCharCode(i + 97).repeat(Math.floor(freq[i] / 2));
        if (freq[i] % 2 === 1) {
            middle = String.fromCharCode(i + 97);
        }
    }

    const secondHalf = firstHalf.split("").reverse().join("");

    return firstHalf + middle + secondHalf;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna