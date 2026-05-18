/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    const n = nums.length;
    const ans = new Array(n);

    // Prefix products
    ans[0] = 1;

    for (let i = 1; i < n; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }

    // Suffix products
    let suffix = 1;

    for (let i = n - 1; i >= 0; i--) {
        ans[i] *= suffix;
        suffix *= nums[i];
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna