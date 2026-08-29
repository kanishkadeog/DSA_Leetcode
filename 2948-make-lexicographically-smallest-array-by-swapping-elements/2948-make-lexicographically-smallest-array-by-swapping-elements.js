/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
    const n = nums.length;

    // Store [value, originalIndex]
    const arr = nums.map((value, index) => [value, index]);

    // Sort by value
    arr.sort((a, b) => a[0] - b[0]);

    const result = new Array(n);

    let start = 0;

    while (start < n) {
        let end = start;

        // Find the complete connected component.
        // If consecutive sorted values differ by <= limit,
        // they can belong to the same component.
        while (
            end + 1 < n &&
            arr[end + 1][0] - arr[end][0] <= limit
        ) {
            end++;
        }

        /*
         * arr[start...end] is one connected component.
         *
         * Values are already sorted in ascending order.
         * Original indices are also collected and sorted.
         */
        const indices = [];

        for (let i = start; i <= end; i++) {
            indices.push(arr[i][1]);
        }

        indices.sort((a, b) => a - b);

        /*
         * Put the smallest value at the smallest index,
         * second smallest value at the second smallest index, etc.
         *
         * This gives the lexicographically smallest arrangement
         * for this component.
         */
        for (let i = 0; i < indices.length; i++) {
            result[indices[i]] = arr[start + i][0];
        }

        start = end + 1;
    }

    return result;
};



// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna