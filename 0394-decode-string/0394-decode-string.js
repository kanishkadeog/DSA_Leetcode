/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    let stack = [];
    let currentStr = "";
    let currentNum = 0;

    for (let ch of s) {

        // Build full number (handles 10, 100, etc.)
        if (!isNaN(ch)) {
            currentNum = currentNum * 10 + Number(ch);
        }

        // Start of encoded part
        else if (ch === "[") {
            stack.push(currentStr);
            stack.push(currentNum);

            currentStr = "";
            currentNum = 0;
        }

        // End of encoded part
        else if (ch === "]") {
            let repeatTimes = stack.pop();
            let prevStr = stack.pop();

            currentStr = prevStr + currentStr.repeat(repeatTimes);
        }

        // Normal character
        else {
            currentStr += ch;
        }
    }

    return currentStr;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna