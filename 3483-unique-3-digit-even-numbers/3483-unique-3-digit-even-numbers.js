/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    const count = new Array(10).fill(0);

    // Count how many times each digit appears
    for (const digit of digits) {
        count[digit]++;
    }

    let ans = 0;

    // Hundreds digit: 1-9 (no leading zero)
    for (let a = 1; a <= 9; a++) {
        if (count[a] === 0) continue;

        // Tens digit: 0-9
        for (let b = 0; b <= 9; b++) {
            if (count[b] === 0) continue;

            // Last digit must be even
            for (let c = 0; c <= 8; c += 2) {
                if (count[c] === 0) continue;

                // Use each copy only once
                count[a]--;
                count[b]--;
                count[c]--;

                if (count[a] >= 0 && count[b] >= 0 && count[c] >= 0) {
                    ans++;
                }

                // Restore counts
                count[a]++;
                count[b]++;
                count[c]++;
            }
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna