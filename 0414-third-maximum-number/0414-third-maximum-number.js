 /**
  * @param {number[]} nums
  * @return {number}
  */
var thirdMax = function(nums) {
    const unique = [...new Set(nums)];

    unique.sort((a, b) => b - a);

    if (unique.length >= 3) {
        return unique[2];
    }

    return unique[0];
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna