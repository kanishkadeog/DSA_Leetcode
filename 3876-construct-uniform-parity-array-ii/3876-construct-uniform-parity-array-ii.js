/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    let minOdd = Infinity;
    let minEven = Infinity;

    for (const num of nums1) {
        if (num % 2 === 0) {
            minEven = Math.min(minEven, num);
        } else {
            minOdd = Math.min(minOdd, num);
        }
    }

    // All numbers are already even
    if (minOdd === Infinity) {
        return true;
    }

    // No even numbers: all numbers are already odd
    if (minEven === Infinity) {
        return true;
    }

    // Make all numbers odd using the smallest odd number
    return minOdd < minEven;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna