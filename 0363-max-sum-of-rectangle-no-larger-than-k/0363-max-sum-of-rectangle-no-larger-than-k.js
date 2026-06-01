/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var maxSumSubmatrix = function(matrix, k) {
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    let result = -Infinity;

    for (let left = 0; left < cols; left++) {

        let rowSums = new Array(rows).fill(0);

        for (let right = left; right < cols; right++) {

            // Compress columns into 1D array
            for (let r = 0; r < rows; r++) {
                rowSums[r] += matrix[r][right];
            }

            // Find max subarray <= k
            let prefixSums = [0];
            let currSum = 0;

            for (let num of rowSums) {

                currSum += num;

                // Need smallest prefix >= currSum-k
                let target = currSum - k;

                let idx = lowerBound(prefixSums, target);

                if (idx < prefixSums.length) {
                    result = Math.max(
                        result,
                        currSum - prefixSums[idx]
                    );
                }

                insertSorted(prefixSums, currSum);
            }
        }
    }

    return result;

    function lowerBound(arr, target) {
        let l = 0, r = arr.length;

        while (l < r) {
            let mid = (l + r) >> 1;

            if (arr[mid] < target) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }

        return l;
    }

    function insertSorted(arr, val) {
        let idx = lowerBound(arr, val);
        arr.splice(idx, 0, val);
    }
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna