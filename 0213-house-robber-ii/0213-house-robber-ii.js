/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {

    // Helper function for House Robber I
    function robLinear(houses) {
        let prev1 = 0;
        let prev2 = 0;

        for (let money of houses) {
            let temp = Math.max(prev1, prev2 + money);
            prev2 = prev1;
            prev1 = temp;
        }

        return prev1;
    }

    // Edge case
    if (nums.length === 1) {
        return nums[0];
    }

    // Case 1: Exclude last house
    let case1 = robLinear(nums.slice(0, nums.length - 1));

    // Case 2: Exclude first house
    let case2 = robLinear(nums.slice(1));

    return Math.max(case1, case2);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna