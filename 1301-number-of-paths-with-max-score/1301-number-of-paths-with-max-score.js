/**
 * @param {string[]} board
 * @return {number[]}
 */
var pathsWithMaxScore = function(board) {
    const MOD = 1000000007;
    const n = board.length;

    const score = Array.from({ length: n }, () =>
        Array(n).fill(-1)
    );

    const ways = Array.from({ length: n }, () =>
        Array(n).fill(0)
    );

    score[n - 1][n - 1] = 0;
    ways[n - 1][n - 1] = 1;

    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {

            if (board[i][j] === 'X') continue;
            if (i === n - 1 && j === n - 1) continue;

            let best = -1;
            let cnt = 0;

            const dirs = [
                [1, 0],
                [0, 1],
                [1, 1]
            ];

            for (const [dr, dc] of dirs) {
                const ni = i + dr;
                const nj = j + dc;

                if (
                    ni >= n ||
                    nj >= n ||
                    score[ni][nj] === -1
                ) continue;

                if (score[ni][nj] > best) {
                    best = score[ni][nj];
                    cnt = ways[ni][nj];
                } else if (score[ni][nj] === best) {
                    cnt = (cnt + ways[ni][nj]) % MOD;
                }
            }

            if (best === -1) continue;

            score[i][j] = best;
            ways[i][j] = cnt;

            if (board[i][j] !== 'E') {
                score[i][j] += Number(board[i][j]);
            }
        }
    }

    if (ways[0][0] === 0) {
        return [0, 0];
    }

    return [score[0][0], ways[0][0]];
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna