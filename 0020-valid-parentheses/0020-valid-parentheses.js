/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {

        // Opening bracket
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } 
        // Closing bracket
        else {
            // No opening bracket to match
            if (stack.length === 0) {
                return false;
            }

            // Top opening bracket must match
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    // All opening brackets must have been closed
    return stack.length === 0;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna