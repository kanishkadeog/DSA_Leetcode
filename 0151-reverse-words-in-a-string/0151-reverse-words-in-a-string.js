/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // Remove extra spaces, split into words
    let words = s.trim().split(/\s+/);

    // Reverse words
    words.reverse();

    // Join with single space
    return words.join(" ");
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna