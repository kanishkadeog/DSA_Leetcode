/**
 * @param {number[]} stoneValue
 * @return {number}
 */
var stoneGameV = function(stoneValue) {
    const n = stoneValue.length;

    // Prefix sum for O(1) range-sum queries
    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + stoneValue[i];
    }

    // dp[l][r] = maximum score for subarray [l...r]
    const dp = Array.from(
        { length: n },
        () => new Array(n).fill(0)
    );

    // Length 2, 3, ..., n
    for (let len = 2; len <= n; len++) {

        for (let l = 0; l + len <= n; l++) {

            const r = l + len - 1;

            // Try every possible split
            for (let k = l; k < r; k++) {

                const leftSum =
                    prefix[k + 1] - prefix[l];

                const rightSum =
                    prefix[r + 1] - prefix[k + 1];

                if (leftSum < rightSum) {

                    // Right side is discarded
                    // Alice keeps left side
                    dp[l][r] = Math.max(
                        dp[l][r],
                        leftSum + dp[l][k]
                    );

                } else if (leftSum > rightSum) {

                    // Left side is discarded
                    // Alice keeps right side
                    dp[l][r] = Math.max(
                        dp[l][r],
                        rightSum + dp[k + 1][r]
                    );

                } else {

                    // Equal sums:
                    // Alice can choose either side
                    dp[l][r] = Math.max(
                        dp[l][r],
                        leftSum + dp[l][k],
                        rightSum + dp[k + 1][r]
                    );
                }
            }
        }
    }

    return dp[0][n - 1];
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna