/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    let total = 0;
    let start = 1000;
    let commas = 1;

    while (start <= n) {
        // Numbers in this group have the same number of commas
        const end = Math.min(n, start * 1000 - 1);

        const count = end - start + 1;

        total += count * commas;

        start *= 1000;
        commas++;
    }

    return total;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna