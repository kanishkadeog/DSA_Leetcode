/**
 * @param {number} n
 * @param {number[]} nums
 * @param {number} maxDiff
 * @param {number[][]} queries
 * @return {number[]}
 */
var pathExistenceQueries = function(n, nums, maxDiff, queries) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push([nums[i], i]);
    }
    arr.sort((a, b) => a[0] - b[0]);

    // position of each original node in sorted order
    const pos = new Array(n);
    const val = new Array(n);
    for (let i = 0; i < n; i++) {
        val[i] = arr[i][0];
        pos[arr[i][1]] = i;
    }

    // reach[i] = furthest index reachable in one edge
    const reach = new Array(n);
    let r = 0;
    for (let i = 0; i < n; i++) {
        while (r + 1 < n && val[r + 1] - val[i] <= maxDiff) {
            r++;
        }
        reach[i] = r;
    }

    const LOG = 18; // since n <= 1e5
    const up = Array.from({ length: LOG }, () => new Array(n));

    for (let i = 0; i < n; i++) up[0][i] = reach[i];

    for (let k = 1; k < LOG; k++) {
        for (let i = 0; i < n; i++) {
            up[k][i] = up[k - 1][up[k - 1][i]];
        }
    }

    const ans = [];

    for (const [u, v] of queries) {
        if (u === v) {
            ans.push(0);
            continue;
        }

        let L = pos[u];
        let R = pos[v];
        if (L > R) [L, R] = [R, L];

        if (reach[L] === L) {
            ans.push(-1);
            continue;
        }

        let cur = L;
        let steps = 0;

        for (let k = LOG - 1; k >= 0; k--) {
            if (up[k][cur] < R) {
                cur = up[k][cur];
                steps += 1 << k;
            }
        }

        if (reach[cur] < R) {
            ans.push(-1);
        } else {
            ans.push(steps + 1);
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna