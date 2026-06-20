/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function(n, restrictions) {

    // Building 1 must have height 0
    restrictions.push([1, 0]);

    // Building n can be at most n-1
    restrictions.push([n, n - 1]);

    restrictions.sort((a, b) => a[0] - b[0]);

    const m = restrictions.length;

    // Left -> Right pass
    for (let i = 1; i < m; i++) {
        const dist = restrictions[i][0] - restrictions[i - 1][0];

        restrictions[i][1] = Math.min(
            restrictions[i][1],
            restrictions[i - 1][1] + dist
        );
    }

    // Right -> Left pass
    for (let i = m - 2; i >= 0; i--) {
        const dist = restrictions[i + 1][0] - restrictions[i][0];

        restrictions[i][1] = Math.min(
            restrictions[i][1],
            restrictions[i + 1][1] + dist
        );
    }

    let ans = 0;

    // Find maximum achievable height between adjacent restrictions
    for (let i = 1; i < m; i++) {

        let x1 = restrictions[i - 1][0];
        let h1 = restrictions[i - 1][1];

        let x2 = restrictions[i][0];
        let h2 = restrictions[i][1];

        let dist = x2 - x1;

        // Peak height between two restricted buildings
        let peak = Math.floor((h1 + h2 + dist) / 2);

        ans = Math.max(ans, peak);
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna