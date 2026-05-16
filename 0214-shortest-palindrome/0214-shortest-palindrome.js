/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {

    // Reverse string
    let rev = s.split('').reverse().join('');

    // Create combined string for KMP
    let combined = s + "#" + rev;

    // Build LPS array
    let lps = new Array(combined.length).fill(0);

    for (let i = 1; i < combined.length; i++) {
        let len = lps[i - 1];

        while (len > 0 && combined[i] !== combined[len]) {
            len = lps[len - 1];
        }

        if (combined[i] === combined[len]) {
            len++;
        }

        lps[i] = len;
    }

    // Longest palindromic prefix length
    let longestPrefix = lps[lps.length - 1];

    // Add remaining reversed part in front
    return rev.substring(0, s.length - longestPrefix) + s;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna