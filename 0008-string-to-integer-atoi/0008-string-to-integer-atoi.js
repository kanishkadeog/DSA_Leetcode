/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    const INT_MAX = 2**31 - 1;
    const INT_MIN = -(2**31);

    let i = 0;
    let n = s.length;
    let sign = 1;
    let result = 0;

    // 1. Skip leading whitespaces
    while (i < n && s[i] === ' ') i++;

    // 2. Handle optional sign
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // 3. Convert digits
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i].charCodeAt(0) - '0'.charCodeAt(0);

        // 4. Check overflow
        if (result > Math.floor(INT_MAX / 10) || 
            (result === Math.floor(INT_MAX / 10) && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
};
