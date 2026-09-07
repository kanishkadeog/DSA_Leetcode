/**
 * @param {string} s
 * @return {number}
 */
var distinctSubseqII = function(s) {
    const MOD = 1000000007;

    // last[c] = dp value before the previous occurrence of c
    const last = new Array(26).fill(0);

    // Start with the empty subsequence
    let dp = 1;

    for (const ch of s) {
        const index = ch.charCodeAt(0) - 97;

        const newDp = (2 * dp - last[index] + MOD) % MOD;

        // Save the old dp for this character
        last[index] = dp;

        dp = newDp;
    }

    // Remove the empty subsequence
    return (dp - 1 + MOD) % MOD;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna