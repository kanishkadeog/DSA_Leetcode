/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    const target = totalSum - x;

    // We need to remove everything
    // if target is 0.
    if (target === 0) {
        return nums.length;
    }

    // If target is negative, impossible.
    if (target < 0) {
        return -1;
    }

    let left = 0;
    let sum = 0;
    let maxLength = -1;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        // Keep the window sum <= target
        while (sum > target) {
            sum -= nums[left];
            left++;
        }

        // Found a subarray with the required sum
        if (sum === target) {
            maxLength = Math.max(
                maxLength,
                right - left + 1
            );
        }
    }

    // No valid middle subarray
    if (maxLength === -1) {
        return -1;
    }

    // Everything outside the middle subarray is removed.
    return nums.length - maxLength;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna