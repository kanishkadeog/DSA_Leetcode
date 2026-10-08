/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = [];
    let depth = 0;

    for (let ch of s) {
        if (ch === '(') {
            // Skip outer opening bracket
            if (depth > 0) {
                result.push(ch);
            }
            depth++;
        } else {
            depth--;

            // Skip outer closing bracket
            if (depth > 0) {
                result.push(ch);
            }
        }
    }

    return result.join('');
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna