/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {

    let totalApples = apple.reduce((sum, x) => sum + x, 0);

    capacity.sort((a, b) => b - a);

    let used = 0;
    let space = 0;

    for (let cap of capacity) {

        space += cap;
        used++;

        if (space >= totalApples) {
            return used;
        }
    }

    return used;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna