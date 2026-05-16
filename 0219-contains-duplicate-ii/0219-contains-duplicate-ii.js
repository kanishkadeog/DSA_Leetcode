/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {

        // If number seen before
        if (map.has(nums[i])) {

            // Check distance
            if (i - map.get(nums[i]) <= k) {
                return true;
            }
        }

        // Store latest index
        map.set(nums[i], i);
    }

    return false;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna