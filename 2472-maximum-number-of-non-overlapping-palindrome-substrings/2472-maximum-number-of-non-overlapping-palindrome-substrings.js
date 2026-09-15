/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxPalindromes = function(s, k) {
    const n = s.length;

    // palindrome[i][j] = true if s[i...j] is a palindrome
    const palindrome = Array.from(
        { length: n },
        () => new Array(n).fill(false)
    );

    // Length 1 palindromes
    for (let i = 0; i < n; i++) {
        palindrome[i][i] = true;
    }

    // Length 2 and greater
    for (let len = 2; len <= n; len++) {
        for (let left = 0; left + len <= n; left++) {
            const right = left + len - 1;

            if (
                s[left] === s[right] &&
                (len === 2 || palindrome[left + 1][right - 1])
            ) {
                palindrome[left][right] = true;
            }
        }
    }

    // dp[i] = maximum number of valid palindromes
    // that can be selected from s[0...i-1]
    const dp = new Array(n + 1).fill(0);

    for (let end = 0; end < n; end++) {
        // Don't use a palindrome ending at end
        if (end > 0) {
            dp[end + 1] = dp[end];
        }

        // Try every possible starting position
        for (let start = 0; start <= end; start++) {
            const length = end - start + 1;

            if (length >= k && palindrome[start][end]) {
                dp[end + 1] = Math.max(
                    dp[end + 1],
                    dp[start] + 1
                );
            }
        }
    }

    return dp[n];
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna