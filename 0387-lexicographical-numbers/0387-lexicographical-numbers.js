/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {

    let result = [];
    let curr = 1;

    for (let i = 0; i < n; i++) {

        result.push(curr);

        // go deeper in lexicographical tree
        if (curr * 10 <= n) {

            curr *= 10;

        } else {

            // move to next valid number
            while (curr % 10 === 9 || curr + 1 > n) {
                curr = Math.floor(curr / 10);
            }

            curr++;
        }
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna