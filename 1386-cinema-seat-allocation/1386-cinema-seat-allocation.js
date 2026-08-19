/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    const rows = new Map();

    // Store reserved seats for each row as a bitmask
    for (const [row, seat] of reservedSeats) {
        if (!rows.has(row)) {
            rows.set(row, 0);
        }

        rows.set(
            row,
            rows.get(row) | (1 << seat)
        );
    }

    let answer = (n - rows.size) * 2;

    /*
     * Masks for the three possible groups:
     *
     * Left   -> seats 2,3,4,5
     * Middle -> seats 4,5,6,7
     * Right  -> seats 6,7,8,9
     */

    const LEFT = (1 << 2) | (1 << 3) | (1 << 4) | (1 << 5);
    const MIDDLE = (1 << 4) | (1 << 5) | (1 << 6) | (1 << 7);
    const RIGHT = (1 << 6) | (1 << 7) | (1 << 8) | (1 << 9);

    for (const mask of rows.values()) {

        // Can we put a family on the left?
        const canLeft = (mask & LEFT) === 0;

        // Can we put a family in the middle?
        const canMiddle = (mask & MIDDLE) === 0;

        // Can we put a family on the right?
        const canRight = (mask & RIGHT) === 0;

        if (canLeft && canRight) {
            // Two non-overlapping families
            answer += 2;
        } else if (canLeft || canMiddle || canRight) {
            // At least one family can be placed
            answer += 1;
        }
    }

    return answer;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna