/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = 2**31 - 1;
    const INT_MIN = -(2**31);
    
    let rev = 0;
    let num = Math.abs(x);
    
    while (num > 0) {
        let pop = num % 10;        // get last digit
        num = Math.floor(num / 10); // remove last digit
        
        // Check overflow before multiplying by 10
        if (rev > Math.floor(INT_MAX / 10) || 
            (rev === Math.floor(INT_MAX / 10) && pop > 7)) {
            return 0;
        }
        
        rev = rev * 10 + pop;
    }
    
    return x < 0 ? -rev : rev;
};
