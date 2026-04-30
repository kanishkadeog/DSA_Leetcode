/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var maxPathScore = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;

    // dp[i][j][c] = max score
    let dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => Array(k + 1).fill(-1))
    );

    dp[0][0][0] = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let c = 0; c <= k; c++) {
                if (dp[i][j][c] === -1) continue;

                // move right
                if (j + 1 < n) {
                    let val = grid[i][j + 1];
                    let cost = val === 0 ? 0 : 1;
                    let score = val;

                    if (c + cost <= k) {
                        dp[i][j + 1][c + cost] = Math.max(
                            dp[i][j + 1][c + cost],
                            dp[i][j][c] + score
                        );
                    }
                }

                // move down
                if (i + 1 < m) {
                    let val = grid[i + 1][j];
                    let cost = val === 0 ? 0 : 1;
                    let score = val;

                    if (c + cost <= k) {
                        dp[i + 1][j][c + cost] = Math.max(
                            dp[i + 1][j][c + cost],
                            dp[i][j][c] + score
                        );
                    }
                }
            }
        }
    }

    let ans = Math.max(...dp[m - 1][n - 1]);
    return ans === -1 ? -1 : ans;
};