/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n = s.length;

    // edge case
    if (s[0] === '0') return 0;

    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        let one = s[i - 1];
        let two = s.substring(i - 2, i);

        // single digit
        if (one !== '0') {
            dp[i] += dp[i - 1];
        }

        // two digits
        if (two >= "10" && two <= "26") {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n];
};