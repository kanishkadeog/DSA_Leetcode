/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const ans = [];

    for (let start = 1; start <= 9; start++) {
        let num = 0;

        for (let digit = start; digit <= 9; digit++) {
            num = num * 10 + digit;

            if (num >= low && num <= high) {
                ans.push(num);
            }
        }
    }

    ans.sort((a, b) => a - b);
    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna