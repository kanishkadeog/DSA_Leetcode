/**
 * @param {character[]} s
 * @return {void}
 */
var reverseString = function(s) {

    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        [s[left], s[right]] = [s[right], s[left]];

        left++;
        right--;
    }
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna