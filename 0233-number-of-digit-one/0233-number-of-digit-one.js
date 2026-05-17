/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let count = 0;

    for (let place = 1; place <= n; place *= 10) {

        let higher = Math.floor(n / (place * 10));
        let current = Math.floor(n / place) % 10;
        let lower = n % place;

        if (current === 0) {
            count += higher * place;
        } 
        else if (current === 1) {
            count += higher * place + lower + 1;
        } 
        else {
            count += (higher + 1) * place;
        }
    }

    return count;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna