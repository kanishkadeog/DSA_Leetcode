/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    const [x1, y1, x2, y2] = rec1;
    const [a1, b1, a2, b2] = rec2;

    // Overlap on X-axis
    const overlapX = x1 < a2 && a1 < x2;

    // Overlap on Y-axis
    const overlapY = y1 < b2 && b1 < y2;

    return overlapX && overlapY;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna