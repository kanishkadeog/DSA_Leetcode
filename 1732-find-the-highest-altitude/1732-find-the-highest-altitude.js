/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {

    let altitude = 0; // starting altitude
    let maxAltitude = 0;

    for (let g of gain) {
        altitude += g;
        maxAltitude = Math.max(maxAltitude, altitude);
    }

    return maxAltitude;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna