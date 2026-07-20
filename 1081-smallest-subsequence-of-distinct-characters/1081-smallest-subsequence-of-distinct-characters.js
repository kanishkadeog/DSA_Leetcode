/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function(s) {
    const last = new Map();

    // Store last occurrence of each character
    for (let i = 0; i < s.length; i++) {
        last.set(s[i], i);
    }

    const stack = [];
    const seen = new Set();

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];

        if (seen.has(ch)) continue;

        while (
            stack.length &&
            stack[stack.length - 1] > ch &&
            last.get(stack[stack.length - 1]) > i
        ) {
            seen.delete(stack.pop());
        }

        stack.push(ch);
        seen.add(ch);
    }

    return stack.join('');
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna