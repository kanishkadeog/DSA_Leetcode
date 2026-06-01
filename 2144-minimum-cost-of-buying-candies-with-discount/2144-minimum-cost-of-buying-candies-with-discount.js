/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    
    // Sort in descending order
    cost.sort((a, b) => b - a);

    let total = 0;

    for (let i = 0; i < cost.length; i++) {

        // Every 3rd candy is free
        if ((i + 1) % 3 !== 0) {
            total += cost[i];
        }
    }

    return total;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna