/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function(nums, target) {
    let n = nums.length;

    let dp = Array(n).fill(-1);
    dp[0] = 0;

    for (let i = 1; i < n; i++) {

        for (let j = 0; j < i; j++) {

            // valid jump
            if (
                dp[j] !== -1 &&
                Math.abs(nums[i] - nums[j]) <= target
            ) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return dp[n - 1];
};