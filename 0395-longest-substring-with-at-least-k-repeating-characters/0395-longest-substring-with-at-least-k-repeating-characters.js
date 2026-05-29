/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    
    // Divide and Conquer
    const dfs = (str) => {

        // If substring length is smaller than k
        if (str.length < k) return 0;

        // Count frequency
        let freq = {};

        for (let ch of str) {
            freq[ch] = (freq[ch] || 0) + 1;
        }

        // Find invalid character
        for (let ch of str) {

            if (freq[ch] < k) {

                // Split by invalid character
                let parts = str.split(ch);

                let maxLen = 0;

                for (let part of parts) {
                    maxLen = Math.max(maxLen, dfs(part));
                }

                return maxLen;
            }
        }

        // Entire string is valid
        return str.length;
    };

    return dfs(s);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna