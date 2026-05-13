/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1];

    for (let i = 1; i <= rowIndex; i++) {
        // Update from right to left
        for (let j = i - 1; j > 0; j--) {
            row[j] = row[j] + row[j - 1];
        }

        row.push(1);
    }

    return row;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna