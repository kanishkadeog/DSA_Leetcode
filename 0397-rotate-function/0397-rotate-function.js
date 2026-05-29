/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    let n = nums.length;

    let totalSum = 0;
    let F = 0;

    for (let i = 0; i < n; i++) {
        totalSum += nums[i];
        F += i * nums[i];
    }

    let maxVal = F;

    // compute F(1) to F(n-1)
    for (let k = 1; k < n; k++) {
        F = F + totalSum - n * nums[n - k];
        maxVal = Math.max(maxVal, F);
    }

    return maxVal;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna