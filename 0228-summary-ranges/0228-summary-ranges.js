/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {

    let result = [];

    for (let i = 0; i < nums.length; i++) {

        let start = nums[i];

        // Extend consecutive range
        while (
            i < nums.length - 1 &&
            nums[i + 1] === nums[i] + 1
        ) {
            i++;
        }

        let end = nums[i];

        if (start === end) {
            result.push(String(start));
        } else {
            result.push(start + "->" + end);
        }
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna