/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVIII = function(stones) {
    const n = stones.length;

    // Prefix sums
    const prefix = new Array(n);
    prefix[0] = stones[0];

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + stones[i];
    }

    /*
     * dp[i] = maximum score difference starting
     * when the first i stones have effectively
     * been combined.
     *
     * Transition:
     * dp[i] = max(prefix[i] - dp[i + 1])
     *
     * We can compute this from right to left.
     */

    let dp = prefix[n - 1];

    for (let i = n - 2; i >= 1; i--) {
        dp = Math.max(dp, prefix[i] - dp);
    }

    return dp;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna