/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Valid parentheses string must have even length
    if ((m + n - 1) % 2 === 1) {
        return false;
    }

    // dp[i][j] = set of possible balances at (i, j)
    const dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => new Set())
    );

    // Starting cell
    if (grid[0][0] === ')') {
        return false;
    }

    dp[0][0].add(1);

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (i === 0 && j === 0) {
                continue;
            }

            // Get possible balances from top and left
            const possibleBalances = [];

            if (i > 0) {
                possibleBalances.push(dp[i - 1][j]);
            }

            if (j > 0) {
                possibleBalances.push(dp[i][j - 1]);
            }

            for (const balances of possibleBalances) {
                for (const balance of balances) {

                    let newBalance;

                    if (grid[i][j] === '(') {
                        newBalance = balance + 1;
                    } else {
                        newBalance = balance - 1;
                    }

                    // A valid prefix can never have negative balance
                    if (newBalance >= 0) {
                        dp[i][j].add(newBalance);
                    }
                }
            }
        }
    }

    // At the end, balance must be exactly 0
    return dp[m - 1][n - 1].has(0);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna