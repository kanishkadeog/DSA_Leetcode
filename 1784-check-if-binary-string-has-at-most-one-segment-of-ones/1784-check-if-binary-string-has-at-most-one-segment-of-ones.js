/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let segments = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1' && (i === 0 || s[i - 1] === '0')) {
            segments++;
        }
    }

    return segments <= 1;
};