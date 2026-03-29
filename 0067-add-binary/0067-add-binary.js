var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let res = [];

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;

        if (i >= 0) sum += a[i--] - '0';
        if (j >= 0) sum += b[j--] - '0';

        res.push(sum % 2);        // current bit
        carry = Math.floor(sum / 2);
    }

    return res.reverse().join('');
};