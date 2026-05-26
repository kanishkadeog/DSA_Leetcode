/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    const dp = Array.from({ length: n + 2 }, () =>
        Array(n + 2).fill(0)
    );

    for (let len = 2; len <= n; len++) {
        for (let start = 1; start <= n - len + 1; start++) {
            let end = start + len - 1;
            dp[start][end] = Infinity;

            for (let guess = start; guess <= end; guess++) {
                let cost = guess + Math.max(
                    dp[start][guess - 1],
                    dp[guess + 1][end]
                );

                dp[start][end] = Math.min(dp[start][end], cost);
            }
        }
    }

    return dp[1][n];
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna