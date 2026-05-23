/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {

    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {

        if (nums[i] > nums[(i + 1) % n]) {
            count++;
        }

        if (count > 1) {
            return false;
        }
    }

    return true;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna