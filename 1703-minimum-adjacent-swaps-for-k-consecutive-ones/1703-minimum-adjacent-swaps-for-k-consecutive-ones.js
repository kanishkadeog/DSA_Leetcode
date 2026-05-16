/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minMoves = function(nums, k) {

    // Store indices of all 1s
    const pos = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            pos.push(i);
        }
    }

    const m = pos.length;

    // Adjust positions to remove spacing effect
    const adjusted = [];

    for (let i = 0; i < m; i++) {
        adjusted.push(pos[i] - i);
    }

    // Prefix sums
    const prefix = new Array(m + 1).fill(0);

    for (let i = 0; i < m; i++) {
        prefix[i + 1] = prefix[i] + adjusted[i];
    }

    let result = Infinity;

    // Sliding window of size k
    for (let left = 0; left + k - 1 < m; left++) {

        let right = left + k - 1;
        let mid = Math.floor((left + right) / 2);

        let median = adjusted[mid];

        // Left cost
        let leftCost =
            median * (mid - left) -
            (prefix[mid] - prefix[left]);

        // Right cost
        let rightCost =
            (prefix[right + 1] - prefix[mid + 1]) -
            median * (right - mid);

        result = Math.min(result, leftCost + rightCost);
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna