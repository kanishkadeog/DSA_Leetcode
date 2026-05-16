/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {

    // Create events
    const events = [];

    for (let [left, right, height] of buildings) {
        // Start event => negative height
        events.push([left, -height]);

        // End event => positive height
        events.push([right, height]);
    }

    // Sort events
    events.sort((a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    });

    // Max Heap using array
    const heights = [0];
    const count = new Map();
    count.set(0, 1);

    const result = [];
    let prevMax = 0;

    function addHeight(h) {
        heights.push(h);
        heights.sort((a, b) => b - a);

        count.set(h, (count.get(h) || 0) + 1);
    }

    function removeHeight(h) {
        count.set(h, count.get(h) - 1);

        while (
            heights.length > 0 &&
            count.get(heights[0]) === 0
        ) {
            heights.shift();
        }
    }

    for (let [x, h] of events) {

        // Start building
        if (h < 0) {
            addHeight(-h);
        }
        // End building
        else {
            removeHeight(h);
        }

        let currentMax = heights[0];

        // Skyline changed
        if (currentMax !== prevMax) {
            result.push([x, currentMax]);
            prevMax = currentMax;
        }
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna