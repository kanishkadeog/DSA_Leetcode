/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {
    
    let total = 0;

    for (let num = num1; num <= num2; num++) {
        const s = String(num);

        if (s.length < 3) continue;

        for (let i = 1; i < s.length - 1; i++) {
            const prev = s.charCodeAt(i - 1) - 48;
            const curr = s.charCodeAt(i) - 48;
            const next = s.charCodeAt(i + 1) - 48;

            // Peak
            if (curr > prev && curr > next) {
                total++;
            }
            // Valley
            else if (curr < prev && curr < next) {
                total++;
            }
        }
    }

    return total;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna