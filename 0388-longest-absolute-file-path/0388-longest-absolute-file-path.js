/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {

    let lines = input.split('\n');

    // depth -> current path length till that depth
    let stack = [0];

    let maxLen = 0;

    for (let line of lines) {

        // count depth using tabs
        let depth = 0;

        while (line[depth] === '\t') {
            depth++;
        }

        // remove tabs
        let name = line.slice(depth);

        // current total length
        let currLen = stack[depth] + name.length;

        // if file
        if (name.includes('.')) {

            maxLen = Math.max(maxLen, currLen);

        } else {

            // store length for next depth
            // +1 for '/'
            stack[depth + 1] = currLen + 1;
        }
    }

    return maxLen;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna