
/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function(nums) {
    const MOD = 1000000007n;
    const n = nums.length;

    // Precompute combinations using Pascal's triangle.
    const comb = Array.from({ length: n + 1 }, () =>
        Array(n + 1).fill(0n)
    );

    for (let i = 0; i <= n; i++) {
        comb[i][0] = 1n;
        comb[i][i] = 1n;

        for (let j = 1; j < i; j++) {
            comb[i][j] =
                (comb[i - 1][j - 1] + comb[i - 1][j]) % MOD;
        }
    }

    function countWays(arr) {
        if (arr.length <= 2) return 1n;

        const root = arr[0];
        const left = [];
        const right = [];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < root) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        const leftWays = countWays(left);
        const rightWays = countWays(right);

        const interleave = comb[arr.length - 1][left.length];

        return (((interleave * leftWays) % MOD) * rightWays) % MOD;
    }

    return Number((countWays(nums) - 1n + MOD) % MOD);
};


// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna