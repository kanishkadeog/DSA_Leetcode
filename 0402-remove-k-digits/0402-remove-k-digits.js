/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    
    const stack = [];

    for (let digit of num) {

        while (
            k > 0 &&
            stack.length > 0 &&
            stack[stack.length - 1] > digit
        ) {
            stack.pop();
            k--;
        }

        stack.push(digit);
    }

    // Remove remaining digits from the end
    while (k > 0) {
        stack.pop();
        k--;
    }

    // Remove leading zeros
    let result = stack.join('').replace(/^0+/, '');

    return result === '' ? '0' : result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna