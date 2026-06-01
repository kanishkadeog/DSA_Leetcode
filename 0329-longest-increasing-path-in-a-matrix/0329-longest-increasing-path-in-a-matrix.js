/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {

    const m = matrix.length;
    const n = matrix[0].length;

    const memo = Array.from(
        { length: m },
        () => Array(n).fill(0)
    );

    const dirs = [
        [1,0],
        [-1,0],
        [0,1],
        [0,-1]
    ];

    function dfs(r,c) {

        if (memo[r][c] !== 0) {
            return memo[r][c];
        }

        let best = 1;

        for (const [dr,dc] of dirs) {

            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 &&
                nr < m &&
                nc >= 0 &&
                nc < n &&
                matrix[nr][nc] > matrix[r][c]
            ) {
                best = Math.max(
                    best,
                    1 + dfs(nr,nc)
                );
            }
        }

        memo[r][c] = best;

        return best;
    }

    let ans = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            ans = Math.max(ans, dfs(i,j));
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna