var maxProductPath = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const maxDP = Array.from({ length: m }, () => Array(n).fill(0));
    const minDP = Array.from({ length: m }, () => Array(n).fill(0));

    maxDP[0][0] = grid[0][0];
    minDP[0][0] = grid[0][0];

    // first column
    for (let i = 1; i < m; i++) {
        maxDP[i][0] = maxDP[i-1][0] * grid[i][0];
        minDP[i][0] = minDP[i-1][0] * grid[i][0];
    }

    // first row
    for (let j = 1; j < n; j++) {
        maxDP[0][j] = maxDP[0][j-1] * grid[0][j];
        minDP[0][j] = minDP[0][j-1] * grid[0][j];
    }

    // fill DP
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            let val = grid[i][j];

            let candidates = [
                val * maxDP[i-1][j],
                val * minDP[i-1][j],
                val * maxDP[i][j-1],
                val * minDP[i][j-1]
            ];

            maxDP[i][j] = Math.max(...candidates);
            minDP[i][j] = Math.min(...candidates);
        }
    }

    let result = maxDP[m-1][n-1];
    const MOD = 1e9 + 7;

    return result < 0 ? -1 : result % MOD;
};