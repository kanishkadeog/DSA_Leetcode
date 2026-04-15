/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    const n = words.length;
    let ans = Infinity;

    for (let i = 0; i < n; i++) {
        if (words[i] === target) {
            const clockwise = (i - startIndex + n) % n;
            const anticlockwise = (startIndex - i + n) % n;
            const dist = Math.min(clockwise, anticlockwise);
            ans = Math.min(ans, dist);
        }
    }

    return ans === Infinity ? -1 : ans;
};