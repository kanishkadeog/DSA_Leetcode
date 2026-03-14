/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Negative or ends with 0 (except 0 itself)
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;
    let num = x;

    while (num > reversed) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }

    // For odd-length numbers, discard middle digit
    return num === reversed || num === Math.floor(reversed / 10);
};
