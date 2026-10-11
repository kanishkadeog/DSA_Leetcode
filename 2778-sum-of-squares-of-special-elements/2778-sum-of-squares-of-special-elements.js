
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let n = nums.length;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            sum += nums[i - 1] * nums[i - 1];
        }
    }

    return sum;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna