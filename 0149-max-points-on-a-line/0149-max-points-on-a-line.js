/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const n = points.length;

    // If 2 or fewer points, all are on same line
    if (n <= 2) return n;

    let max = 0;

    for (let i = 0; i < n; i++) {
        const slopes = new Map();

        for (let j = i + 1; j < n; j++) {
            let dx = points[j][0] - points[i][0];
            let dy = points[j][1] - points[i][1];

            // Reduce slope using GCD
            const gcd = getGCD(dx, dy);

            dx /= gcd;
            dy /= gcd;

            // Normalize sign
            if (dx < 0) {
                dx *= -1;
                dy *= -1;
            }

            // Handle vertical lines
            if (dx === 0) {
                dy = 1;
            }

            // Handle horizontal lines
            if (dy === 0) {
                dx = 1;
            }

            const key = `${dy}/${dx}`;

            slopes.set(key, (slopes.get(key) || 0) + 1);

            max = Math.max(max, slopes.get(key) + 1);
        }
    }

    return max;
};

/**
 * Greatest Common Divisor
 */
function getGCD(a, b) {
    if (b === 0) return Math.abs(a);
    return getGCD(b, a % b);
}

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna