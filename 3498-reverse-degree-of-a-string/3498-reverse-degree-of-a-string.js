 /**
  * @param {string} s
  * @return {number}
  */
var reverseDegree = function(s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const normalPosition = s.charCodeAt(i) - 96;
        const reversePosition = 27 - normalPosition;

        result += reversePosition * (i + 1);
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna