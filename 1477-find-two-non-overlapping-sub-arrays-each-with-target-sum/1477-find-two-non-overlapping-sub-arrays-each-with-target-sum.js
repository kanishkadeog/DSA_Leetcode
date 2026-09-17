/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    const n = arr.length;

    // best[i] = minimum length of a target-sum subarray
    // that ends at or before index i
    const best = new Array(n).fill(Infinity);

    let left = 0;
    let sum = 0;
    let answer = Infinity;

    for (let right = 0; right < n; right++) {
        sum += arr[right];

        // Shrink window while sum is too large
        while (sum > target && left <= right) {
            sum -= arr[left];
            left++;
        }

        // Current window has sum == target
        if (sum === target) {
            const length = right - left + 1;

            // We need another subarray completely before `left`
            if (left > 0 && best[left - 1] !== Infinity) {
                answer = Math.min(
                    answer,
                    length + best[left - 1]
                );
            }

            // Best target-sum subarray ending at or before right
            if (right === 0) {
                best[right] = length;
            } else {
                best[right] = Math.min(
                    best[right - 1],
                    length
                );
            }
        } else {
            // No target-sum window ending at right
            if (right > 0) {
                best[right] = best[right - 1];
            }
        }
    }

    return answer === Infinity ? -1 : answer;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna