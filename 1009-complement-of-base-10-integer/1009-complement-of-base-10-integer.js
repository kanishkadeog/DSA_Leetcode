/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    if (n === 0) return 1;

    let mask = 0;
    let temp = n;
    while (temp > 0) {
        mask = (mask << 1) | 1;  // add 1 bit for each bit in n
        temp >>= 1;               // shift n to process next bit
    }

    return n ^ mask;  // XOR n with mask to flip all bits
};