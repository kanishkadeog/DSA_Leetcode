/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {

    let rows = grid.length;
    let cols = grid[0].length;

    let row = rows - 1;
    let col = 0;
    let count = 0;

    while (row >= 0 && col < cols) {

        if (grid[row][col] < 0) {

            count += (cols - col);
            row--;

        } else {
            col++;
        }
    }

    return count;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna