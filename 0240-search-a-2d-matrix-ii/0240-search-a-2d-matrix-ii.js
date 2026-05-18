/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    let rows = matrix.length;
    let cols = matrix[0].length;

    let r = 0;
    let c = cols - 1;

    while (r < rows && c >= 0) {

        if (matrix[r][c] === target) {
            return true;
        }

        if (matrix[r][c] > target) {
            c--; // move left
        } else {
            r++; // move down
        }
    }

    return false;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna