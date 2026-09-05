/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    const n = nums.length;

    // prefMax[i] = maximum of nums[0...i]
    const prefMax = new Array(n);
    prefMax[0] = nums[0];

    for (let i = 1; i < n; i++) {
        prefMax[i] = Math.max(prefMax[i - 1], nums[i]);
    }

    // suffMin[i] = minimum of nums[i...n-1]
    const suffMin = new Array(n);
    suffMin[n - 1] = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        suffMin[i] = Math.min(suffMin[i + 1], nums[i]);
    }

    // Find the smallest stable index
    for (let i = 0; i < n; i++) {
        if (prefMax[i] - suffMin[i] <= k) {
            return i;
        }
    }

    return -1;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna