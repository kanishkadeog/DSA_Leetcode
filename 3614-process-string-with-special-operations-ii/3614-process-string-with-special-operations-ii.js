/**
 * @param {string} s
 * @param {number} k
 * @return {character}
 */
var processStr = function(s, k) {

    const K = BigInt(k);

    const len = Array(s.length + 1).fill(0n);

    // Forward pass: track lengths
    for (let i = 0; i < s.length; i++) {

        const ch = s[i];
        let cur = len[i];

        if (ch >= 'a' && ch <= 'z') {
            len[i + 1] = cur + 1n;
        }
        else if (ch === '*') {
            len[i + 1] = cur > 0n ? cur - 1n : 0n;
        }
        else if (ch === '#') {
            len[i + 1] = cur * 2n;
        }
        else { // '%'
            len[i + 1] = cur;
        }
    }

    let pos = K;

    if (pos >= len[s.length]) {
        return '.';
    }

    // Backward pass
    for (let i = s.length - 1; i >= 0; i--) {

        const ch = s[i];
        const before = len[i];
        const after = len[i + 1];

        if (ch >= 'a' && ch <= 'z') {

            // This character was appended at index "before"
            if (pos === before) {
                return ch;
            }
        }

        else if (ch === '#') {

            // after = before * 2
            pos %= before;
        }

        else if (ch === '%') {

            // reverse
            if (before > 0n) {
                pos = before - 1n - pos;
            }
        }

        else { // '*'

            // after = before - 1 (if before > 0)
            if (before > 0n) {
                // deleted last char; current pos never points to it,
                // so index remains unchanged
            }
        }
    }

    return '.';
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna