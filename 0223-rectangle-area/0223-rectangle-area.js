/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {

    // Area of rectangle A
    let areaA = (ax2 - ax1) * (ay2 - ay1);

    // Area of rectangle B
    let areaB = (bx2 - bx1) * (by2 - by1);

    // Overlap dimensions
    let overlapWidth = Math.min(ax2, bx2) - Math.max(ax1, bx1);
    let overlapHeight = Math.min(ay2, by2) - Math.max(ay1, by1);

    // Overlap area
    let overlap = 0;
    if (overlapWidth > 0 && overlapHeight > 0) {
        overlap = overlapWidth * overlapHeight;
    }

    return areaA + areaB - overlap;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna