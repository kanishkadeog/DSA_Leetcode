/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    for (let token of tokens) {

        if (token === "+" || token === "-" || token === "*" || token === "/") {

            let b = stack.pop();
            let a = stack.pop();

            if (token === "+") {
                stack.push(a + b);
            } 
            else if (token === "-") {
                stack.push(a - b);
            } 
            else if (token === "*") {
                stack.push(a * b);
            } 
            else {
                // Division truncates toward zero
                stack.push(Math.trunc(a / b));
            }

        } else {
            // Number
            stack.push(Number(token));
        }
    }

    return stack.pop();
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna