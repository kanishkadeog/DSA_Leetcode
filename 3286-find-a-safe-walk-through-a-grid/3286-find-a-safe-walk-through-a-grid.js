/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {
    const m = grid.length;
    const n = grid[0].length;

    const INF = 1e9;
    const dist = Array.from({ length: m }, () => Array(n).fill(INF));

    const deque = [];

    const startCost = grid[0][0];
    dist[0][0] = startCost;
    deque.push([0, 0]);

    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    while (deque.length) {
        const [x, y] = deque.shift();

        for (const [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;

            const w = grid[nx][ny];
            const nd = dist[x][y] + w;

            if (nd < dist[nx][ny]) {
                dist[nx][ny] = nd;

                if (w === 0)
                    deque.unshift([nx, ny]);
                else
                    deque.push([nx, ny]);
            }
        }
    }

    return dist[m - 1][n - 1] < health;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna