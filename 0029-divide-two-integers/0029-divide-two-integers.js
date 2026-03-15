var divide = function(dividend, divisor) {
    const INT_MAX = 2**31 - 1;
    const INT_MIN = -(2**31);

    // Edge case: overflow
    if (dividend === INT_MIN && divisor === -1) return INT_MAX;

    // Determine the sign
    const sign = (dividend > 0) === (divisor > 0) ? 1 : -1;

    // Work with negative numbers to avoid overflow
    let a = dividend > 0 ? -dividend : dividend;
    let b = divisor > 0 ? -divisor : divisor;
    let result = 0;

    while (a <= b) {
        let temp = b;
        let multiple = 1;

        // Double temp but ensure it doesn’t overflow
        while (a <= temp + temp && temp + temp < 0) {
            temp += temp;
            multiple += multiple;
        }

        a -= temp;
        result += multiple;
    }

    return sign > 0 ? result : -result;
};
