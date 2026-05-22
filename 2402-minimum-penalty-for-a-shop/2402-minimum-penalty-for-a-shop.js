/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {

    let penalty = 0;

    for (let ch of customers) {
        if (ch === 'Y') penalty++;
    }

    let minPenalty = penalty;
    let answer = 0;

    for (let i = 0; i < customers.length; i++) {

        if (customers[i] === 'Y') {
            penalty--;
        } else {
            penalty++;
        }

        if (penalty < minPenalty) {
            minPenalty = penalty;
            answer = i + 1;
        }
    }

    return answer;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna