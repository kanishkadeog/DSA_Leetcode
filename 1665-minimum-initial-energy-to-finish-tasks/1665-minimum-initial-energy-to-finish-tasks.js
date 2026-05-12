/**
 * @param {number[][]} tasks
 * @return {number}
 */
/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function(tasks) {

    // Sort by (minimum - actual) descending
    tasks.sort((a, b) => {
        return (b[1] - b[0]) - (a[1] - a[0]);
    });

    let ans = 0;
    let energy = 0;

    for (let [actual, minimum] of tasks) {

        // Need more energy
        if (energy < minimum) {
            ans += (minimum - energy);
            energy = minimum;
        }

        // Finish task
        energy -= actual;
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna