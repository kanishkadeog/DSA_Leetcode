
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    const squares = nums.map(num => num * num);
    squares.sort((a, b) => a - b);

    let sum = 0;
    const n = squares.length;
    const negativeCount = Math.floor(n / 2);

    for (let i = 0; i < n; i++) {
        if (i < negativeCount) {
            sum -= squares[i];
        } else {
            sum += squares[i];
        }
    }

    return sum;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna