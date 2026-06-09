/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {

    let minVal = Math.min(...nums);
    let maxVal = Math.max(...nums);

    // Best subarray value
    let best = maxVal - minVal;

    // We can choose same subarray multiple times
    return best * k;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna