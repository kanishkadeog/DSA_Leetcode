/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    const k = primes.length;

    const dp = new Array(n).fill(0);
    dp[0] = 1;

    const idx = new Array(k).fill(0);
    const next = [...primes];

    for (let i = 1; i < n; i++) {
        let minVal = Math.min(...next);
        dp[i] = minVal;

        for (let j = 0; j < k; j++) {
            if (next[j] === minVal) {
                idx[j]++;
                next[j] = dp[idx[j]] * primes[j];
            }
        }
    }

    return dp[n - 1];
};


// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna