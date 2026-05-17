/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {

    let stack = [];
    let result = 0;
    let num = 0;
    let sign = 1;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch >= '0' && ch <= '9') {
            num = num * 10 + Number(ch);
        }

        else if (ch === '+') {
            result += sign * num;
            num = 0;
            sign = 1;
        }

        else if (ch === '-') {
            result += sign * num;
            num = 0;
            sign = -1;
        }

        else if (ch === '(') {
            stack.push(result);
            stack.push(sign);

            result = 0;
            sign = 1;
        }

        else if (ch === ')') {
            result += sign * num;
            num = 0;

            let prevSign = stack.pop();
            let prevResult = stack.pop();

            result = prevResult + prevSign * result;
        }
    }

    return result + sign * num;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna