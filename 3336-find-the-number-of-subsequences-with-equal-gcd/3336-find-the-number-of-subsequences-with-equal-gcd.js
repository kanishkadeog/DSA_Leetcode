/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequencePairCount = function(nums) {
    const MOD = 1000000007;
    const MAX = 200;

    // Precompute gcd table
    const gcd = Array.from({ length: MAX + 1 }, () =>
        Array(MAX + 1).fill(0)
    );

    const calcGcd = (a, b) => {
        while (b !== 0) {
            let t = a % b;
            a = b;
            b = t;
        }
        return a;
    };

    for (let i = 0; i <= MAX; i++) {
        for (let j = 0; j <= MAX; j++) {
            if (i === 0) gcd[i][j] = j;
            else if (j === 0) gcd[i][j] = i;
            else gcd[i][j] = calcGcd(i, j);
        }
    }

    let dp = Array.from({ length: MAX + 1 }, () =>
        Array(MAX + 1).fill(0)
    );

    dp[0][0] = 1;

    for (const x of nums) {
        const ndp = dp.map(row => row.slice());

        for (let g1 = 0; g1 <= MAX; g1++) {
            for (let g2 = 0; g2 <= MAX; g2++) {
                if (dp[g1][g2] === 0) continue;

                // Put x into seq1
                const ng1 = gcd[g1][x];
                ndp[ng1][g2] =
                    (ndp[ng1][g2] + dp[g1][g2]) % MOD;

                // Put x into seq2
                const ng2 = gcd[g2][x];
                ndp[g1][ng2] =
                    (ndp[g1][ng2] + dp[g1][g2]) % MOD;
            }
        }

        dp = ndp;
    }

    let ans = 0;

    for (let g = 1; g <= MAX; g++) {
        ans = (ans + dp[g][g]) % MOD;
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna