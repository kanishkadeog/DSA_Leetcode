/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {

    const rows = matrix.length;
    const cols = matrix[0].length;

    // DP table
    const dp = Array.from(
        { length: rows + 1 },
        () => new Array(cols + 1).fill(0)
    );

    let maxSide = 0;

    for (let r = 1; r <= rows; r++) {
        for (let c = 1; c <= cols; c++) {

            if (matrix[r - 1][c - 1] === '1') {

                dp[r][c] =
                    Math.min(
                        dp[r - 1][c],     // top
                        dp[r][c - 1],     // left
                        dp[r - 1][c - 1]  // top-left
                    ) + 1;

                maxSide = Math.max(maxSide, dp[r][c]);
            }
        }
    }

    // Return area
    return maxSide * maxSide;
};


// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna