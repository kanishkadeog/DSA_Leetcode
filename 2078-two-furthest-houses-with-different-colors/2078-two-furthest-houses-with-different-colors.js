/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    let n = colors.length;
    let ans = 0;

    // compare with first house
    for (let i = n - 1; i >= 0; i--) {
        if (colors[i] !== colors[0]) {
            ans = Math.max(ans, i);
            break;
        }
    }

    // compare with last house
    for (let i = 0; i < n; i++) {
        if (colors[i] !== colors[n - 1]) {
            ans = Math.max(ans, (n - 1) - i);
            break;
        }
    }

    return ans;
};