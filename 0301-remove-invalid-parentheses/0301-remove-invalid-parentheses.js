/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {

    let leftRemove = 0;
    let rightRemove = 0;

    for (let ch of s) {
        if (ch === '(') {
            leftRemove++;
        } else if (ch === ')') {

            if (leftRemove > 0) {
                leftRemove--;
            } else {
                rightRemove++;
            }
        }
    }

    let result = new Set();

    function dfs(index, path, balance, left, right) {

        if (index === s.length) {

            if (left === 0 && right === 0 && balance === 0) {
                result.add(path);
            }

            return;
        }

        let ch = s[index];

        if (ch === '(') {

            // remove '('
            if (left > 0) {
                dfs(index + 1, path, balance, left - 1, right);
            }

            // keep '('
            dfs(index + 1, path + ch, balance + 1, left, right);

        } else if (ch === ')') {

            // remove ')'
            if (right > 0) {
                dfs(index + 1, path, balance, left, right - 1);
            }

            // keep ')'
            if (balance > 0) {
                dfs(index + 1, path + ch, balance - 1, left, right);
            }

        } else {
            dfs(index + 1, path + ch, balance, left, right);
        }
    }

    dfs(0, "", 0, leftRemove, rightRemove);

    return [...result];
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna