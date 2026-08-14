/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    const freq = new Array(26).fill(0);

    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        const index = s.charCodeAt(right) - 97;

        freq[index]++;

        // If the current character appears
        // more than 2 times, shrink the window.
        while (freq[index] > 2) {
            const leftIndex = s.charCodeAt(left) - 97;

            freq[leftIndex]--;
            left++;
        }

        // Current window is valid
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna