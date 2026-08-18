/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function(nums, k) {
    const n = nums.length;

    // Case 1: k = 1
    if (k === 1) {
        const freq = new Array(51).fill(0);

        for (const num of nums) {
            freq[num]++;
        }

        let ans = -1;

        for (let num = 0; num <= 50; num++) {
            if (freq[num] === 1) {
                ans = num;
            }
        }

        return ans;
    }

    // Case 2: k = n
    if (k === n) {
        return Math.max(...nums);
    }

    // Case 3: 1 < k < n
    const freq = new Array(51).fill(0);

    for (const num of nums) {
        freq[num]++;
    }

    const first = nums[0];
    const last = nums[n - 1];

    let ans = -1;

    // First element appears in exactly one subarray
    if (freq[first] === 1) {
        ans = Math.max(ans, first);
    }

    // Last element appears in exactly one subarray
    if (freq[last] === 1) {
        ans = Math.max(ans, last);
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna