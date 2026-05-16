/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

    const result = [];

    function backtrack(start, path, sum) {

        // Valid combination found
        if (path.length === k && sum === n) {
            result.push([...path]);
            return;
        }

        // Stop if invalid
        if (path.length > k || sum > n) {
            return;
        }

        // Try numbers from start to 9
        for (let i = start; i <= 9; i++) {
            path.push(i);

            backtrack(i + 1, path, sum + i);

            path.pop(); // backtrack
        }
    }

    backtrack(1, [], 0);

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna