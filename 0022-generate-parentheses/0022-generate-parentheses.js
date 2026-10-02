 /**
  * @param {number} n
  * @return {string[]}
  */
var generateParenthesis = function(n) {
    const result = [];

    function backtrack(str, open, close) {
        // We have used all n pairs
        if (str.length === 2 * n) {
            result.push(str);
            return;
        }

        // We can add '(' if we haven't used all opening brackets
        if (open < n) {
            backtrack(str + "(", open + 1, close);
        }

        // We can add ')' only if there is an unmatched '('
        if (close < open) {
            backtrack(str + ")", open, close + 1);
        }
    }

    backtrack("", 0, 0);

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna