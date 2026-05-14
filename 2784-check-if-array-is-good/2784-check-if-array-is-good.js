/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    nums.sort((a, b) => a - b);

    let n = nums[nums.length - 1];

    // Length must be n + 1
    if (nums.length !== n + 1) {
        return false;
    }

    // Check 1 to n-1 appear exactly once
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] !== i + 1) {
            return false;
        }
    }

    // Last two elements must both be n
    return nums[n - 1] === n && nums[n] === n;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna