/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    let n = s.length;
    let ans = "";

    for (let i = 0; i < n; i++) {
        let ones = 0;

        for (let j = i; j < n; j++) {
            if (s[j] === '1') {
                ones++;
            }

            // We found k ones
            if (ones === k) {
                let candidate = s.substring(i, j + 1);

                // First valid candidate
                // OR shorter candidate
                // OR same length but lexicographically smaller
                if (
                    ans === "" ||
                    candidate.length < ans.length ||
                    (candidate.length === ans.length && candidate < ans)
                ) {
                    ans = candidate;
                }

                // Any longer substring starting at i
                // cannot be the shortest for this i.
                break;
            }
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna