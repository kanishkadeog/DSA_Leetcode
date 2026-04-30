/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // directions: [dx, dy]
    const dirs = {
        1: [[0, -1], [0, 1]],     // left, right
        2: [[-1, 0], [1, 0]],     // up, down
        3: [[0, -1], [1, 0]],     // left, down
        4: [[0, 1], [1, 0]],      // right, down
        5: [[0, -1], [-1, 0]],    // left, up
        6: [[0, 1], [-1, 0]]      // right, up
    };

    // reverse direction check
    function isConnected(fromDir, toCell) {
        const [dx, dy] = fromDir;
        const reverse = [-dx, -dy];

        return dirs[toCell].some(([x, y]) => x === reverse[0] && y === reverse[1]);
    }

    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    let queue = [[0, 0]];
    visited[0][0] = true;

    while (queue.length) {
        let [x, y] = queue.shift();

        if (x === m - 1 && y === n - 1) return true;

        for (let [dx, dy] of dirs[grid[x][y]]) {
            let nx = x + dx;
            let ny = y + dy;

            if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
            if (visited[nx][ny]) continue;

            // check if neighbor connects back
            if (!isConnected([dx, dy], grid[nx][ny])) continue;

            visited[nx][ny] = true;
            queue.push([nx, ny]);
        }
    }

    return false;
};