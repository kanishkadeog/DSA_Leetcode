/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const dp = new Array(n).fill(1);
    const prev = new Array(n).fill(-1);

    let maxLen = 1;
    let maxIdx = 0;

    for (let i = 1; i < n; i++) {

        for (let j = 0; j < i; j++) {

            if (nums[i] % nums[j] === 0) {

                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    prev[i] = j;
                }
            }
        }

        if (dp[i] > maxLen) {
            maxLen = dp[i];
            maxIdx = i;
        }
    }

    // Reconstruct answer
    const result = [];

    while (maxIdx !== -1) {
        result.push(nums[maxIdx]);
        maxIdx = prev[maxIdx];
    }

    return result.reverse();
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna