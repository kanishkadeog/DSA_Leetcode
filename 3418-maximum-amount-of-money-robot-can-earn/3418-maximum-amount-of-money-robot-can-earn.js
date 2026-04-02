/**
 * @param {number[][]} coins
 * @return {number}
 */
var maximumAmount = function(coins) {
    let m = coins.length, n = coins[0].length;

    // dp[j][k] → current row
    let dp = Array.from({ length: n }, () => Array(3).fill(-Infinity));

    // initialize (0,0)
    for (let k = 0; k < 3; k++) dp[0][k] = -Infinity;

    dp[0][0] = coins[0][0];
    if (coins[0][0] < 0) {
        dp[0][1] = 0;
        dp[0][2] = 0;
    }

    // first row
    for (let j = 1; j < n; j++) {
        let val = coins[0][j];
        let newDp = Array(3).fill(-Infinity);

        for (let k = 0; k < 3; k++) {
            if (dp[j-1][k] === -Infinity) continue;

            // don't neutralize
            newDp[k] = Math.max(newDp[k], dp[j-1][k] + val);

            // neutralize if negative
            if (val < 0 && k < 2) {
                newDp[k+1] = Math.max(newDp[k+1], dp[j-1][k]);
            }
        }

        dp[j] = newDp;
    }

    // rest of grid
    for (let i = 1; i < m; i++) {
        let newRow = Array.from({ length: n }, () => Array(3).fill(-Infinity));

        for (let j = 0; j < n; j++) {
            let val = coins[i][j];

            for (let k = 0; k < 3; k++) {

                // from top
                if (dp[j][k] !== -Infinity) {
                    // don't neutralize
                    newRow[j][k] = Math.max(newRow[j][k], dp[j][k] + val);

                    // neutralize
                    if (val < 0 && k < 2) {
                        newRow[j][k+1] = Math.max(newRow[j][k+1], dp[j][k]);
                    }
                }

                // from left
                if (j > 0 && newRow[j-1][k] !== -Infinity) {
                    // don't neutralize
                    newRow[j][k] = Math.max(newRow[j][k], newRow[j-1][k] + val);

                    // neutralize
                    if (val < 0 && k < 2) {
                        newRow[j][k+1] = Math.max(newRow[j][k+1], newRow[j-1][k]);
                    }
                }
            }
        }

        dp = newRow;
    }

    return Math.max(...dp[n-1]);
};