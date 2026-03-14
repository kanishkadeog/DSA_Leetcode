/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    let result = [];
    
    function backtrack(str) {
        if (result.length >= k) return;

        if (str.length === n) {
            result.push(str);
            return;
        }

        for (let ch of ['a','b','c']) {
            if (str.length === 0 || str[str.length - 1] !== ch) {
                backtrack(str + ch);
            }
        }
    }

    backtrack("");

    return k <= result.length ? result[k - 1] : "";
};