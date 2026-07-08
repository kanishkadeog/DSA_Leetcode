/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumAndMultiply = function(s, queries) {
    const MOD = 1000000007n;
    const n = s.length;

    const digits = [];
    const pos = [];

    for (let i = 0; i < n; i++) {
        if (s[i] !== '0') {
            digits.push(Number(s[i]));
            pos.push(i);
        }
    }

    const m = digits.length;

    if (m === 0) {
        return new Array(queries.length).fill(0);
    }

    // prefix digit sums
    const prefSum = new Array(m + 1).fill(0);
    for (let i = 0; i < m; i++) {
        prefSum[i + 1] = prefSum[i] + digits[i];
    }

    // powers of 10 (BigInt)
    const pow10 = new Array(m + 1);
    pow10[0] = 1n;
    for (let i = 1; i <= m; i++) {
        pow10[i] = (pow10[i - 1] * 10n) % MOD;
    }

    // prefix concatenated numbers (BigInt)
    const prefNum = new Array(m + 1);
    prefNum[0] = 0n;
    for (let i = 0; i < m; i++) {
        prefNum[i + 1] = (prefNum[i] * 10n + BigInt(digits[i])) % MOD;
    }

    // next non-zero index
    const next = new Array(n).fill(-1);
    let p = 0;
    for (let i = 0; i < n; i++) {
        while (p < m && pos[p] < i) p++;
        if (p < m) next[i] = p;
    }

    // previous non-zero index
    const prev = new Array(n).fill(-1);
    p = m - 1;
    for (let i = n - 1; i >= 0; i--) {
        while (p >= 0 && pos[p] > i) p--;
        if (p >= 0) prev[i] = p;
    }

    const ans = [];

    for (const [l, r] of queries) {
        const L = next[l];
        const R = prev[r];

        if (L === -1 || R === -1 || L > R) {
            ans.push(0);
            continue;
        }

        const sum = BigInt(prefSum[R + 1] - prefSum[L]);

        const len = R - L + 1;

        let x =
            (prefNum[R + 1] -
                (prefNum[L] * pow10[len]) % MOD +
                MOD) % MOD;

        ans.push(Number((x * sum) % MOD));
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna