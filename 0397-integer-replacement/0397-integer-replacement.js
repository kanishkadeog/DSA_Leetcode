/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    
    let steps = 0;

    while (n !== 1) {

        if (n % 2 === 0) {
            // Even → divide by 2
            n = n / 2;
        } else {

            // Special case: 3 → better to subtract
            if (n === 3 || (n & 2) === 0) {
                n--;
            } else {
                n++;
            }
        }

        steps++;
    }

    return steps;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna