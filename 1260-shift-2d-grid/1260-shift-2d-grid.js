/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const total = m * n;

    k %= total;

    const arr = [];

    // Flatten the grid
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            arr.push(grid[i][j]);
        }
    }

    // Shift elements
    const shifted = new Array(total);
    for (let i = 0; i < total; i++) {
        shifted[(i + k) % total] = arr[i];
    }

    // Convert back to 2D grid
    const ans = [];
    let idx = 0;

    for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            row.push(shifted[idx++]);
        }
        ans.push(row);
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna