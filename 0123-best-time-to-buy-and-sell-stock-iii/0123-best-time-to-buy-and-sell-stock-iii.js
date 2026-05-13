/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy1 = Infinity;
    let profit1 = 0;

    let buy2 = Infinity;
    let profit2 = 0;

    for (let price of prices) {
        // First transaction
        buy1 = Math.min(buy1, price);
        profit1 = Math.max(profit1, price - buy1);

        // Second transaction
        buy2 = Math.min(buy2, price - profit1);
        profit2 = Math.max(profit2, price - buy2);
    }

    return profit2;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna