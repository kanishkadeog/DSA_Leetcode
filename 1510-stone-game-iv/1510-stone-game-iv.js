/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function(n) {
    // dp[i] tells whether the current player
    // can win when there are i stones.
    const dp = new Array(n + 1).fill(false);

    // dp[0] = false
    // No stones -> no move -> current player loses.

    for (let i = 1; i <= n; i++) {

        // Try every possible square number.
        for (let j = 1; j * j <= i; j++) {

            const square = j * j;

            // If removing this square leaves
            // the opponent in a losing state,
            // current player wins.
            if (dp[i - square] === false) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna