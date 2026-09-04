/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        // Maximum from nums[0] to nums[i]
        let maxValue = -Infinity;
        for (let j = 0; j <= i; j++) {
            maxValue = Math.max(maxValue, nums[j]);
        }

        // Minimum from nums[i] to nums[n - 1]
        let minValue = Infinity;
        for (let j = i; j < n; j++) {
            minValue = Math.min(minValue, nums[j]);
        }

        // Check if index i is stable
        if (maxValue - minValue <= k) {
            return i;
        }
    }

    return -1;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna