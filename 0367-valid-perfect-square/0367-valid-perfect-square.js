/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    
    if (num === 1) return true;

    let left = 1;
    let right = num;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);
        let square = mid * mid;

        if (square === num) {
            return true;
        }

        if (square < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return false;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna