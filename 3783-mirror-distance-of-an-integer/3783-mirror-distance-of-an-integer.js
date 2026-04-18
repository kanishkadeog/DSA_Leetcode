/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let original = n;
    let rev = 0;

    // reverse number
    while (n > 0) {
        rev = rev * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    return Math.abs(original - rev);
};