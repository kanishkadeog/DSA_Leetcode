/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    const stack = [0];

    for (let char of s) {
        if (char === '(') {
            // Start a new nested group
            stack.push(0);
        } else {
            // Score inside the current pair
            const inner = stack.pop();

            // "()" = 1
            // "(A)" = 2 * A
            const score = inner === 0 ? 1 : 2 * inner;

            // Add this group's score to its parent
            stack[stack.length - 1] += score;
        }
    }

    return stack[0];
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna