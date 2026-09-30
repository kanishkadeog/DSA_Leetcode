/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    const answer = [];
    let depth = 0;

    for (let char of seq) {
        if (char === '(') {
            depth++;

            // Put different nesting levels into different groups
            answer.push(depth % 2);
        } else {
            // Use the current depth before decreasing it
            answer.push(depth % 2);

            depth--;
        }
    }

    return answer;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna