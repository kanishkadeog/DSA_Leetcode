/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let left = Math.max(...nums);
    let right = nums.reduce((sum, num) => sum + num, 0);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        let subarrays = 1;
        let currentSum = 0;

        for (const num of nums) {
            if (currentSum + num > mid) {
                // Start a new subarray
                subarrays++;
                currentSum = num;
            } else {
                currentSum += num;
            }
        }

        if (subarrays <= k) {
            // mid is possible, try smaller
            right = mid;
        } else {
            // mid is too small
            left = mid + 1;
        }
    }

    return left;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna