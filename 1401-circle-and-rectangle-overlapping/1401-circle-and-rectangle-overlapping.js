/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, xCenter, yCenter, x1, y1, x2, y2) {
    // Closest x-coordinate in the rectangle
    const closestX = Math.max(x1, Math.min(xCenter, x2));

    // Closest y-coordinate in the rectangle
    const closestY = Math.max(y1, Math.min(yCenter, y2));

    // Distance squared from circle center to closest point
    const dx = xCenter - closestX;
    const dy = yCenter - closestY;

    return dx * dx + dy * dy <= radius * radius;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna