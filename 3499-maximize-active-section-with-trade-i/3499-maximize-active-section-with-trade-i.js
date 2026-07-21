/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function(s) {
    const n = s.length;
    let totalOnes = 0;

    for (const ch of s) {
        if (ch === '1') totalOnes++;
    }

    // Augment with '1' at both ends
    const t = '1' + s + '1';

    // Run-length encode
    const chars = [];
    const lens = [];

    let i = 0;
    while (i < t.length) {
        let j = i;
        while (j < t.length && t[j] === t[i]) j++;
        chars.push(t[i]);
        lens.push(j - i);
        i = j;
    }

    let maxGain = 0;

    // Look for 0 - 1 - 0 pattern
    for (let k = 1; k + 1 < chars.length; k++) {
        if (
            chars[k] === '1' &&
            chars[k - 1] === '0' &&
            chars[k + 1] === '0'
        ) {
            maxGain = Math.max(maxGain, lens[k - 1] + lens[k + 1]);
        }
    }

    return totalOnes + maxGain;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna