/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    let count = 0;

    for (let i = 1; i <= n; i++) {
        let num = i;
        let isValid = true;
        let isDifferent = false;

        while (num > 0) {
            let digit = num % 10;

            // invalid digits
            if (digit === 3 || digit === 4 || digit === 7) {
                isValid = false;
                break;
            }

            // digits that change
            if (digit === 2 || digit === 5 || digit === 6 || digit === 9) {
                isDifferent = true;
            }

            num = Math.floor(num / 10);
        }

        if (isValid && isDifferent) {
            count++;
        }
    }

    return count;
};