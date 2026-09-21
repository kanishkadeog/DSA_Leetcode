 /**
  * @param {number[]} nums
  * @param {number} k
  * @return {number[]}
  */
var resultArray = function(nums, k) {
    const result = new Array(k).fill(0);

    // dp[r] = number of subarrays ending at the previous index
    // whose product % k === r
    let dp = new Array(k).fill(0);

    for (const num of nums) {
        const value = num % k;
        const next = new Array(k).fill(0);

        // Start a new subarray containing only num
        next[value]++;

        // Extend every previous subarray with num
        for (let r = 0; r < k; r++) {
            if (dp[r] > 0) {
                const newRemainder = (r * value) % k;
                next[newRemainder] += dp[r];
            }
        }

        // Every subarray ending here contributes to the answer
        for (let r = 0; r < k; r++) {
            result[r] += next[r];
        }

        dp = next;
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna