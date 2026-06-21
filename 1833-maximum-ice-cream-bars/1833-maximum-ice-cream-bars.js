/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let maxCost = Math.max(...costs);

    // Counting sort frequency array
    let count = new Array(maxCost + 1).fill(0);

    for (let cost of costs) {
        count[cost]++;
    }

    let bars = 0;

    for (let cost = 1; cost <= maxCost; cost++) {
        if (count[cost] === 0) continue;

        let canBuy = Math.min(count[cost], Math.floor(coins / cost));

        bars += canBuy;
        coins -= canBuy * cost;

        if (coins < cost) continue;
    }

    return bars;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna