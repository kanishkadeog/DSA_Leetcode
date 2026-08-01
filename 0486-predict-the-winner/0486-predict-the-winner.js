/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    const n = nums.length;
    const memo = Array.from({ length: n }, () => Array(n));

    function dfs(i, j) {
        if (i === j) return nums[i];

        if (memo[i][j] !== undefined) return memo[i][j];

        const takeLeft = nums[i] - dfs(i + 1, j);
        const takeRight = nums[j] - dfs(i, j - 1);

        return memo[i][j] = Math.max(takeLeft, takeRight);
    }

    return dfs(0, n - 1) >= 0;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna