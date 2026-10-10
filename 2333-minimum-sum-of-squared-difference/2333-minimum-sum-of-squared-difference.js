
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    const n = nums1.length;
    const k = k1 + k2;
    const diff = new Array(n);
    let maxDiff = 0;
    let totalDiff = 0;

    for (let i = 0; i < n; i++) {
        diff[i] = Math.abs(nums1[i] - nums2[i]);
        maxDiff = Math.max(maxDiff, diff[i]);
        totalDiff += diff[i];
    }

    // Enough operations to make every difference zero
    if (k >= totalDiff) return 0;

    // Find the smallest threshold T where
    // reducing every difference above T down to T
    // requires at most k operations.
    let left = 0;
    let right = maxDiff;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let operations = 0;

        for (const d of diff) {
            if (d > mid) {
                operations += d - mid;
            }
        }

        if (operations <= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    const threshold = left;
    let remaining = k;
    let answer = 0;

    // Reduce differences above the threshold to the threshold.
    for (const d of diff) {
        remaining -= Math.max(0, d - threshold);
    }

    // Use leftover operations to reduce some threshold values by 1.
    for (const d of diff) {
        let value = Math.min(d, threshold);

        if (value === threshold && remaining > 0) {
            value--;
            remaining--;
        }

        answer += value * value;
    }

    return answer;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna