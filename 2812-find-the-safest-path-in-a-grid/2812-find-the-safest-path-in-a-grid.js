/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    const n = grid.length;
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    // Step 1: Multi-source BFS
    const dist = Array.from({ length: n }, () =>
        Array(n).fill(-1)
    );

    const queue = [];
    let head = 0;

    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                dist[r][c] = 0;
                queue.push([r, c]);
            }
        }
    }

    while (head < queue.length) {
        const [r, c] = queue[head++];

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 &&
                nr < n &&
                nc >= 0 &&
                nc < n &&
                dist[nr][nc] === -1
            ) {
                dist[nr][nc] = dist[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }

    // Check if safeness >= limit is possible
    function can(limit) {
        if (
            dist[0][0] < limit ||
            dist[n - 1][n - 1] < limit
        ) {
            return false;
        }

        const visited = Array.from({ length: n }, () =>
            Array(n).fill(false)
        );

        const q = [[0, 0]];
        let idx = 0;
        visited[0][0] = true;

        while (idx < q.length) {
            const [r, c] = q[idx++];

            if (r === n - 1 && c === n - 1) {
                return true;
            }

            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 &&
                    nr < n &&
                    nc >= 0 &&
                    nc < n &&
                    !visited[nr][nc] &&
                    dist[nr][nc] >= limit
                ) {
                    visited[nr][nc] = true;
                    q.push([nr, nc]);
                }
            }
        }

        return false;
    }

    // Binary search answer
    let left = 0;
    let right = 2 * (n - 1);
    let ans = 0;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (can(mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna