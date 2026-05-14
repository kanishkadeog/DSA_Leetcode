/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i];

        // Swap when current number is negative
        if (curr < 0) {
            [maxProd, minProd] = [minProd, maxProd];
        }

        // Max product ending at current index
        maxProd = Math.max(curr, maxProd * curr);

        // Min product ending at current index
        minProd = Math.min(curr, minProd * curr);

        // Update answer
        result = Math.max(result, maxProd);
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna