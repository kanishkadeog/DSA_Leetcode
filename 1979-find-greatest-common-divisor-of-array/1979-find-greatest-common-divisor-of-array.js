/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let mn = Math.min(...nums);
    let mx = Math.max(...nums);

    const gcd = (a, b) => {
        while (b !== 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    };

    return gcd(mn, mx);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna