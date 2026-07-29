/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var smallestPalindrome = function (s, k) {
    const LIMIT = 1000001;

    // Frequency
    const freq = new Array(26).fill(0);
    for (const ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    // Half counts + middle character
    const half = new Array(26).fill(0);
    let mid = "";

    for (let i = 0; i < 26; i++) {
        half[i] = Math.floor(freq[i] / 2);
        if (freq[i] % 2) {
            mid = String.fromCharCode(97 + i);
        }
    }

    // capped combination
    function comb(n, r) {
        if (r < 0 || r > n) return 0;
        r = Math.min(r, n - r);

        let res = 1;

        for (let i = 1; i <= r; i++) {
            res = res * (n - r + i) / i;
            if (res > LIMIT) return LIMIT;
        }

        return Math.min(LIMIT, Math.round(res));
    }

    // count permutations from remaining half counts
    function countWays(cnt) {
        let total = 0;
        for (let x of cnt) total += x;

        let ans = 1;
        let rem = total;

        for (let x of cnt) {
            if (x === 0) continue;
            ans *= comb(rem, x);
            if (ans > LIMIT) return LIMIT;
            rem -= x;
        }

        return Math.min(LIMIT, Math.round(ans));
    }

    if (countWays(half) < k) return "";

    const first = [];
    const len = s.length >> 1;

    for (let pos = 0; pos < len; pos++) {

        for (let c = 0; c < 26; c++) {

            if (half[c] === 0) continue;

            half[c]--;

            const ways = countWays(half);

            if (ways >= k) {
                first.push(String.fromCharCode(97 + c));
                break;
            }

            k -= ways;
            half[c]++;
        }
    }

    const left = first.join("");
    const right = left.split("").reverse().join("");

    return left + mid + right;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna