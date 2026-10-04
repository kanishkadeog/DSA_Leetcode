/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let minOpen = 0;
    let maxOpen = 0;

    for (let char of s) {

        if (char === '(') {
            minOpen++;
            maxOpen++;
        } 
        else if (char === ')') {
            minOpen--;
            maxOpen--;
        } 
        else {
            // '*' can be ')' or '(' or empty
            minOpen--;  // treat '*' as ')'
            maxOpen++;  // treat '*' as '('
        }

        // Even the maximum possible opens cannot balance ')'
        if (maxOpen < 0) {
            return false;
        }

        // minOpen cannot be negative
        minOpen = Math.max(0, minOpen);
    }

    return minOpen === 0;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna