/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let xor = 0;

    for (const num of nums) {
        xor ^= num;
    }

    // Entire array already has non-zero XOR
    if (xor !== 0) {
        return nums.length;
    }

    // Entire XOR is 0.
    // Remove one non-zero element if possible.
    for (const num of nums) {
        if (num !== 0) {
            return nums.length - 1;
        }
    }

    // All elements are zero.
    return 0;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna