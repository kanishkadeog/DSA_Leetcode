/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    const nodes = preorder.split(',');
    let slots = 1;

    for (let node of nodes) {
        slots--; // consume one slot

        if (slots < 0) return false;

        if (node !== '#') {
            slots += 2; // non-null node creates 2 slots
        }
    }

    return slots === 0;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna