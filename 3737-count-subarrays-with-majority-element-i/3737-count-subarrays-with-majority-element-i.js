/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    const n = nums.length;
    let ans = 0;

    for (let i = 0; i < n; i++) {
        let cnt = 0;

        for (let j = i; j < n; j++) {
            if (nums[j] === target) {
                cnt++;
            }

            const len = j - i + 1;

            if (2 * cnt > len) {
                ans++;
            }
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna