/**
 * @param {string} num
 * @return {boolean}
 */
var sumGame = function(num) {
    const n = num.length;
    const half = n / 2;

    let leftSum = 0;
    let rightSum = 0;

    let leftQ = 0;
    let rightQ = 0;

    // First half
    for (let i = 0; i < half; i++) {
        if (num[i] === '?') {
            leftQ++;
        } else {
            leftSum += Number(num[i]);
        }
    }

    // Second half
    for (let i = half; i < n; i++) {
        if (num[i] === '?') {
            rightQ++;
        } else {
            rightSum += Number(num[i]);
        }
    }

    const diff = leftSum - rightSum;
    const qDiff = leftQ - rightQ;

    /*
     * Each '?' can contribute 0..9.
     *
     * The average contribution is 4.5.
     *
     * Bob can force equality only when:
     *
     * 2 * diff + 9 * qDiff === 0
     *
     * Otherwise Alice can force the sums to be different.
     */
    return 2 * diff + 9 * qDiff !== 0;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna