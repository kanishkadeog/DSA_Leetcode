/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    const n = img1.length;
    let maxOverlap = 0;

    // Shift rows from -(n-1) to (n-1)
    for (let rowShift = -(n - 1); rowShift <= n - 1; rowShift++) {

        // Shift columns from -(n-1) to (n-1)
        for (let colShift = -(n - 1); colShift <= n - 1; colShift++) {

            let overlap = 0;

            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {

                    // Position of img1[i][j] after translation
                    const newRow = i + rowShift;
                    const newCol = j + colShift;

                    // Check if translated position is inside img2
                    if (
                        newRow >= 0 &&
                        newRow < n &&
                        newCol >= 0 &&
                        newCol < n
                    ) {
                        if (
                            img1[i][j] === 1 &&
                            img2[newRow][newCol] === 1
                        ) {
                            overlap++;
                        }
                    }
                }
            }

            maxOverlap = Math.max(maxOverlap, overlap);
        }
    }

    return maxOverlap;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna