/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var minMoves = function(nums, limit) {

    let n = nums.length;

    // possible sums: 2 -> 2*limit
    let diff = Array(2 * limit + 2).fill(0);

    for (let i = 0; i < n / 2; i++) {

        let a = nums[i];
        let b = nums[n - 1 - i];

        let minVal = Math.min(a, b);
        let maxVal = Math.max(a, b);

        let sum = a + b;

        // Initially assume 2 moves everywhere

        // 1 move range starts
        diff[minVal + 1] -= 1;

        // 0 move at exact sum
        diff[sum] -= 1;
        diff[sum + 1] += 1;

        // back to 2 moves after range
        diff[maxVal + limit + 1] += 1;
    }

    let pairs = n / 2;

    let ans = Infinity;

    // initial cost = 2 moves per pair
    let curr = pairs * 2;

    for (let s = 2; s <= 2 * limit; s++) {

        curr += diff[s];

        ans = Math.min(ans, curr);
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna