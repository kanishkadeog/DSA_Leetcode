
/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
var createGrid = function(m, n) {
    const grid = Array.from({ length: m }, () => 
        Array(n).fill('#')
    );

    // Keep the entire top row free.
    for (let j = 0; j < n; j++) {
        grid[0][j] = '.';
    }

    // Keep the last column free.
    for (let i = 0; i < m; i++) {
        grid[i][n - 1] = '.';
    }

    return grid.map(row => row.join(''));
};


// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna