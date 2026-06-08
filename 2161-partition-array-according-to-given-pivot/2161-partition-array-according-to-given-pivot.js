/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {

    let left = [];
    let equal = [];
    let right = [];

    for (let num of nums) {

        if (num < pivot) {
            left.push(num);

        } else if (num === pivot) {
            equal.push(num);

        } else {
            right.push(num);
        }
    }

    // Combine all parts
    return [...left, ...equal, ...right];
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna