/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var zigZagArrays = function(n, l, r) {
    const MOD = 1000000007;
    const m = r - l + 1;

    let up = new Array(m).fill(0);
    let down = new Array(m).fill(0);

    // length = 2
    for (let y = 0; y < m; y++) {
        up[y] = y;
        down[y] = m - 1 - y;
    }

    // Build lengths 3 ... n
    for (let len = 3; len <= n; len++) {
        let prefixDown = new Array(m).fill(0);
        let suffixUp = new Array(m).fill(0);

        prefixDown[0] = down[0];
        for (let i = 1; i < m; i++) {
            prefixDown[i] =
                (prefixDown[i - 1] + down[i]) % MOD;
        }

        suffixUp[m - 1] = up[m - 1];
        for (let i = m - 2; i >= 0; i--) {
            suffixUp[i] =
                (suffixUp[i + 1] + up[i]) % MOD;
        }

        let newUp = new Array(m).fill(0);
        let newDown = new Array(m).fill(0);

        for (let y = 0; y < m; y++) {
            // previous move DOWN, now move UP
            if (y > 0) {
                newUp[y] = prefixDown[y - 1];
            }

            // previous move UP, now move DOWN
            if (y < m - 1) {
                newDown[y] = suffixUp[y + 1];
            }
        }

        up = newUp;
        down = newDown;
    }

    let ans = 0;

    if (n === 2) {
        for (let i = 0; i < m; i++) {
            ans = (ans + up[i] + down[i]) % MOD;
        }
        return ans;
    }

    for (let i = 0; i < m; i++) {
        ans = (ans + up[i] + down[i]) % MOD;
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna