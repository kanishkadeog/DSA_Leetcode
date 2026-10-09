/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let insertions = 0;
    let open = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            open++;
        } else {
            // We found a closing ')'. Check if another ')' follows.
            if (i + 1 < s.length && s[i + 1] === ')') {
                i++; // Consume the second ')'
            } else {
                // Insert a missing ')' to make '))'
                insertions++;
            }

            if (open > 0) {
                open--;
            } else {
                // No '(' available: insert one
                insertions++;
            }
        }
    }

    // Each remaining '(' needs two closing ')'
    insertions += open * 2;

    return insertions;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna