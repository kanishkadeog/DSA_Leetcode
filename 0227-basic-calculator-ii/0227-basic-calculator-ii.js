/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {

    let stack = [];
    let num = 0;
    let sign = '+';

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        // Build multi-digit number
        if (ch >= '0' && ch <= '9') {
            num = num * 10 + Number(ch);
        }

        // Process operator or end of string
        if ((isNaN(ch) && ch !== ' ') || i === s.length - 1) {

            if (sign === '+') {
                stack.push(num);
            }
            else if (sign === '-') {
                stack.push(-num);
            }
            else if (sign === '*') {
                stack.push(stack.pop() * num);
            }
            else if (sign === '/') {
                let prev = stack.pop();

                // truncate toward zero
                stack.push(prev < 0
                    ? Math.ceil(prev / num)
                    : Math.floor(prev / num));
            }

            sign = ch;
            num = 0;
        }
    }

    return stack.reduce((sum, val) => sum + val, 0);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna