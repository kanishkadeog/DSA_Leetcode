/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {

    const deque = []; // store indices
    const result = [];

    for (let i = 0; i < nums.length; i++) {

        // Remove indices outside window
        if (deque.length && deque[0] <= i - k) {
            deque.shift();
        }

        // Maintain decreasing order
        while (
            deque.length &&
            nums[deque[deque.length - 1]] <= nums[i]
        ) {
            deque.pop();
        }

        deque.push(i);

        // Window formed
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna