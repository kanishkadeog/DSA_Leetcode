/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    let n = s.length;

    // palindrome[i][j] = true if s[i..j] is palindrome
    let palindrome = Array.from({ length: n }, () =>
        Array(n).fill(false)
    );

    // cuts[i] = minimum cuts needed for s[0..i]
    let cuts = Array(n).fill(0);

    for (let end = 0; end < n; end++) {
        cuts[end] = end; // maximum cuts

        for (let start = 0; start <= end; start++) {

            if (
                s[start] === s[end] &&
                (end - start <= 2 || palindrome[start + 1][end - 1])
            ) {
                palindrome[start][end] = true;

                // No cut needed
                if (start === 0) {
                    cuts[end] = 0;
                } else {
                    cuts[end] = Math.min(cuts[end], cuts[start - 1] + 1);
                }
            }
        }
    }

    return cuts[n - 1];
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna