/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    const MAX = 2048;

    // pairXor[x] = true if there exists j <= k with nums[j] ^ nums[k] = x
    const pairXor = new Array(MAX).fill(false);

    const n = nums.length;

    for (let j = 0; j < n; j++) {
        for (let k = j; k < n; k++) {
            pairXor[nums[j] ^ nums[k]] = true;
        }
    }

    // ansXor[x] = true if x is obtainable as nums[i] ^ pairXor
    const ansXor = new Array(MAX).fill(false);

    for (let i = 0; i < n; i++) {
        for (let x = 0; x < MAX; x++) {
            if (pairXor[x]) {
                ansXor[nums[i] ^ x] = true;
            }
        }
    }

    let ans = 0;
    for (let x = 0; x < MAX; x++) {
        if (ansXor[x]) ans++;
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna