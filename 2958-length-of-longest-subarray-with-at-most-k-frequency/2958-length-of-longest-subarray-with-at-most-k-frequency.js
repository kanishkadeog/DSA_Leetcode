/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    const freq = new Map();

    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {

        // Add nums[right] to the window
        freq.set(
            nums[right],
            (freq.get(nums[right]) || 0) + 1
        );

        // If nums[right] occurs more than k times,
        // shrink the window from the left.
        while (freq.get(nums[right]) > k) {
            freq.set(
                nums[left],
                freq.get(nums[left]) - 1
            );

            left++;
        }

        // Current window [left ... right] is valid
        maxLen = Math.max(
            maxLen,
            right - left + 1
        );
    }

    return maxLen;
};


// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna