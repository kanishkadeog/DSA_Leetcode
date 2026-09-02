/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    // Tallest first.
    // For same height, smaller k first.
    people.sort((a, b) => {
        if (a[0] !== b[0]) {
            return b[0] - a[0];
        }
        return a[1] - b[1];
    });

    const queue = [];

    for (const person of people) {
        const [height, k] = person;

        // Insert person at index k
        queue.splice(k, 0, person);
    }

    return queue;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna