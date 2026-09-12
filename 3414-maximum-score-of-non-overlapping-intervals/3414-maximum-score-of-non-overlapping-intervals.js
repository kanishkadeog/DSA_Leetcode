/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var maximumWeight = function(intervals) {
    const n = intervals.length;

    // [left, right, weight, originalIndex]
    const arr = intervals.map((x, i) => [
        x[0],
        x[1],
        x[2],
        i
    ]);

    // Sort by right endpoint
    arr.sort((a, b) => a[1] - b[1]);

    const ends = arr.map(x => x[1]);

    // Find the last interval whose right < current left
    function findPrevious(left) {
        let lo = 0;
        let hi = n - 1;
        let ans = -1;

        while (lo <= hi) {
            const mid = Math.floor((lo + hi) / 2);

            if (ends[mid] < left) {
                ans = mid;
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }

        return ans;
    }

    // prev[i] = last compatible interval before i
    const prev = new Array(n);

    for (let i = 0; i < n; i++) {
        prev[i] = findPrevious(arr[i][0]);
    }

    /*
        dp[k][i] = best answer using at most k intervals
                   from the first i intervals.

        Each state:
        [score, indices]
    */
    const dp = Array.from(
        { length: 5 },
        () => Array(n + 1)
    );

    // Base cases
    for (let k = 0; k <= 4; k++) {
        dp[k][0] = [0, []];
    }

    for (let i = 1; i <= n; i++) {
        // Can't choose anything with 0 intervals
        dp[0][i] = [0, []];

        for (let k = 1; k <= 4; k++) {
            // Option 1: don't take current interval
            const skip = dp[k][i - 1];

            // Option 2: take current interval
            const current = arr[i - 1];

            const p = prev[i - 1];

            // dp index is p + 1 because dp[*][x]
            // represents first x intervals.
            const base = dp[k - 1][p + 1];

            const takeScore = base[0] + current[2];

            const takeIndices = [
                ...base[1],
                current[3]
            ];

            // Indices must be returned sorted
            takeIndices.sort((a, b) => a - b);

            if (
                takeScore > skip[0] ||
                (
                    takeScore === skip[0] &&
                    isLexicographicallySmaller(
                        takeIndices,
                        skip[1]
                    )
                )
            ) {
                dp[k][i] = [
                    takeScore,
                    takeIndices
                ];
            } else {
                dp[k][i] = skip;
            }
        }
    }

    return dp[4][n][1];
};

function isLexicographicallySmaller(a, b) {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] !== b[i]) {
            return a[i] < b[i];
        }
    }

    return a.length < b.length;
}

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna