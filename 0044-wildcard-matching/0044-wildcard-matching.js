/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let i = 0, j = 0;
    let starIdx = -1;
    let matchIdx = 0;

    while (i < s.length) {
        // Match single character or '?'
        if (j < p.length && (p[j] === s[i] || p[j] === '?')) {
            i++;
            j++;
        }
        // Found '*'
        else if (j < p.length && p[j] === '*') {
            starIdx = j;
            matchIdx = i;
            j++; // assume '*' matches empty
        }
        // Mismatch but we have seen a '*'
        else if (starIdx !== -1) {
            j = starIdx + 1;
            matchIdx++;
            i = matchIdx; // let '*' match one more character
        }
        // No match and no '*'
        else {
            return false;
        }
    }

    // Remaining characters in pattern must all be '*'
    while (j < p.length && p[j] === '*') {
        j++;
    }

    return j === p.length;
};
