/**
 * @param {number} n
 * @return {number}
 */
var sumAndMultiply = function(n) {
    let x = "";
    let sum = 0;

    for (const ch of String(n)) {
        if (ch !== "0") {
            x += ch;
            sum += Number(ch);
        }
    }

    const num = x === "" ? 0 : Number(x);

    return num * sum;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna