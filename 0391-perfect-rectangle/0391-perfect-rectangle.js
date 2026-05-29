/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
    
    let minX = Infinity, minY = Infinity;
    let maxX = -Infinity, maxY = -Infinity;
    
    let area = 0;
    let corners = new Set();

    // Helper function to toggle corner points
    const toggle = (x, y) => {
        const key = `${x},${y}`;
        
        if (corners.has(key)) {
            corners.delete(key);
        } else {
            corners.add(key);
        }
    };

    for (let [x1, y1, x2, y2] of rectangles) {
        
        // Total area
        area += (x2 - x1) * (y2 - y1);

        // Bounding rectangle
        minX = Math.min(minX, x1);
        minY = Math.min(minY, y1);
        maxX = Math.max(maxX, x2);
        maxY = Math.max(maxY, y2);

        // Toggle all 4 corners
        toggle(x1, y1);
        toggle(x1, y2);
        toggle(x2, y1);
        toggle(x2, y2);
    }

    // Expected area of final rectangle
    const expectedArea = (maxX - minX) * (maxY - minY);

    // Areas must match
    if (area !== expectedArea) return false;

    // Only 4 corners should remain
    if (corners.size !== 4) return false;

    // These 4 corners must be the outer rectangle corners
    const expectedCorners = new Set([
        `${minX},${minY}`,
        `${minX},${maxY}`,
        `${maxX},${minY}`,
        `${maxX},${maxY}`
    ]);

    for (let corner of expectedCorners) {
        if (!corners.has(corner)) {
            return false;
        }
    }

    return true;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna