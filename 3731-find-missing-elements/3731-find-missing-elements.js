/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    const set = new Set(nums);

    let min = Math.min(...nums);
    let max = Math.max(...nums);

    const ans = [];

    for (let i = min; i <= max; i++) {
        if (!set.has(i)) {
            ans.push(i);
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna