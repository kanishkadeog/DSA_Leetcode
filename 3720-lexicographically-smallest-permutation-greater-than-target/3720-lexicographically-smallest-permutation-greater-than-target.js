/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexGreaterPermutation = function(s, target) {
    const n = s.length;

    // Frequency of characters in s
    const freq = new Array(26).fill(0);

    for (const ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    /*
     * We try to keep target[0...i-1] exactly the same
     * and make target[i] slightly larger.
     *
     * Start from the RIGHT because changing the rightmost
     * possible position gives the smallest lexicographical answer.
     */
    for (let i = n - 1; i >= 0; i--) {
        const cnt = freq.slice();

        // Use target[0 ... i-1]
        let possible = true;

        for (let j = 0; j < i; j++) {
            const c = target.charCodeAt(j) - 97;

            if (cnt[c] === 0) {
                possible = false;
                break;
            }

            cnt[c]--;
        }

        if (!possible) {
            continue;
        }

        // Try the smallest character > target[i]
        const current = target.charCodeAt(i) - 97;

        for (let c = current + 1; c < 26; c++) {
            if (cnt[c] > 0) {
                cnt[c]--;

                let ans = target.substring(0, i);
                ans += String.fromCharCode(97 + c);

                // Put remaining characters in sorted order
                for (let x = 0; x < 26; x++) {
                    ans += String.fromCharCode(97 + x).repeat(cnt[x]);
                }

                return ans;
            }
        }
    }

    return "";
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna