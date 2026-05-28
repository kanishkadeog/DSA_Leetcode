/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {

    let head = 1;
    let step = 1;
    let remaining = n;

    // true -> left to right
    // false -> right to left
    let left = true;

    while (remaining > 1) {

        // move head:
        // 1. always when left -> right
        // 2. when right -> left and remaining is odd
        if (left || remaining % 2 === 1) {
            head += step;
        }

        remaining = Math.floor(remaining / 2);

        step *= 2;

        left = !left;
    }

    return head;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna