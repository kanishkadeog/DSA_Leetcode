/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {

    const memo = new Map();

    function solve(exp) {

        if (memo.has(exp)) {
            return memo.get(exp);
        }

        let result = [];

        for (let i = 0; i < exp.length; i++) {

            let ch = exp[i];

            if (ch === '+' || ch === '-' || ch === '*') {

                let left = solve(exp.slice(0, i));
                let right = solve(exp.slice(i + 1));

                for (let a of left) {
                    for (let b of right) {

                        if (ch === '+') {
                            result.push(a + b);
                        } 
                        else if (ch === '-') {
                            result.push(a - b);
                        } 
                        else {
                            result.push(a * b);
                        }
                    }
                }
            }
        }

        // Base case: pure number
        if (result.length === 0) {
            result.push(Number(exp));
        }

        memo.set(exp, result);

        return result;
    }

    return solve(expression);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna