/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const n = piles.length;

    // suffix[i] = sum of piles[i ... n-1]
    const suffix = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        suffix[i] = suffix[i + 1] + piles[i];
    }

    // dp[i][m] = maximum stones current player can get
    // starting from index i with M = m
    const dp = Array.from(
        { length: n },
        () => new Array(n + 1).fill(-1)
    );

    function solve(i, m) {
        // All piles have been taken
        if (i >= n) {
            return 0;
        }

        // We can take all remaining piles
        if (2 * m >= n - i) {
            return suffix[i];
        }

        // Already calculated
        if (dp[i][m] !== -1) {
            return dp[i][m];
        }

        let best = 0;

        // Try taking X piles
        for (let x = 1; x <= 2 * m && i + x <= n; x++) {

            const nextM = Math.max(m, x);

            // Opponent's best score
            const opponent = solve(i + x, nextM);

            // Total remaining stones - opponent's stones
            const current = suffix[i] - opponent;

            best = Math.max(best, current);
        }

        dp[i][m] = best;

        return best;
    }

    return solve(0, 1);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna