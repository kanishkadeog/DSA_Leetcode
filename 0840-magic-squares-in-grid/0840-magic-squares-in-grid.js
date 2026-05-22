/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {

    let rows = grid.length;
    let cols = grid[0].length;

    function isMagic(r, c) {

        let seen = new Set();

        for (let i = r; i < r + 3; i++) {
            for (let j = c; j < c + 3; j++) {

                let val = grid[i][j];

                if (val < 1 || val > 9 || seen.has(val)) {
                    return false;
                }

                seen.add(val);
            }
        }

        let target =
            grid[r][c] +
            grid[r][c+1] +
            grid[r][c+2];

        // rows
        for (let i = 0; i < 3; i++) {
            let sum =
                grid[r+i][c] +
                grid[r+i][c+1] +
                grid[r+i][c+2];

            if (sum !== target) {
                return false;
            }
        }

        // cols
        for (let j = 0; j < 3; j++) {
            let sum =
                grid[r][c+j] +
                grid[r+1][c+j] +
                grid[r+2][c+j];

            if (sum !== target) {
                return false;
            }
        }

        // diagonals
        let diag1 =
            grid[r][c] +
            grid[r+1][c+1] +
            grid[r+2][c+2];

        let diag2 =
            grid[r][c+2] +
            grid[r+1][c+1] +
            grid[r+2][c];

        return diag1 === target &&
               diag2 === target;
    }

    let count = 0;

    for (let r = 0; r <= rows - 3; r++) {
        for (let c = 0; c <= cols - 3; c++) {

            if (isMagic(r, c)) {
                count++;
            }
        }
    }

    return count;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna