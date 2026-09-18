/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function(s) {
    const n = s.length;

    const first = new Array(26).fill(n);
    const last = new Array(26).fill(-1);

    // Find first and last occurrence of every character
    for (let i = 0; i < n; i++) {
        const c = s.charCodeAt(i) - 97;

        first[c] = Math.min(first[c], i);
        last[c] = i;
    }

    const intervals = [];

    // Find the smallest valid substring for each character
    for (let c = 0; c < 26; c++) {
        if (last[c] === -1) continue;

        let left = first[c];
        let right = last[c];
        let valid = true;

        for (let i = left; i <= right; i++) {
            const current = s.charCodeAt(i) - 97;

            // This character has an occurrence before our left boundary.
            // Therefore, this substring cannot contain all occurrences
            // of this character.
            if (first[current] < left) {
                valid = false;
                break;
            }

            // We must include every occurrence of this character.
            right = Math.max(right, last[current]);
        }

        if (valid) {
            intervals.push([left, right]);
        }
    }

    // IMPORTANT:
    // Sort by ending position, not by length.
    intervals.sort((a, b) => a[1] - b[1]);

    const result = [];
    let previousEnd = -1;

    for (const [left, right] of intervals) {
        if (left > previousEnd) {
            result.push(s.slice(left, right + 1));
            previousEnd = right;
        }
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna