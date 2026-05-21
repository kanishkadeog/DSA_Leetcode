/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {
    const set = new Set();
    let ans = 0;

    // Store all prefixes from arr1
    for (let num of arr1) {
        let s = num.toString();
        let prefix = "";

        for (let ch of s) {
            prefix += ch;
            set.add(prefix);
        }
    }

    // Check prefixes from arr2
    for (let num of arr2) {
        let s = num.toString();
        let prefix = "";

        for (let ch of s) {
            prefix += ch;

            if (set.has(prefix)) {
                ans = Math.max(ans, prefix.length);
            }
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna