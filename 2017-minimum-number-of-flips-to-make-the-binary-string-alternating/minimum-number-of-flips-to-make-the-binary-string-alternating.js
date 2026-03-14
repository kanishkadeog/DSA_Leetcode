var minFlips = function(s) {
    const n = s.length;
    const s2 = s + s;
    
    let diff1 = 0;
    let diff2 = 0;
    let res = Infinity;

    for (let i = 0; i < 2 * n; i++) {
        let expected1 = (i % 2 === 0) ? '0' : '1';
        let expected2 = (i % 2 === 0) ? '1' : '0';

        if (s2[i] !== expected1) diff1++;
        if (s2[i] !== expected2) diff2++;

        if (i >= n) {
            let oldExpected1 = ((i - n) % 2 === 0) ? '0' : '1';
            let oldExpected2 = ((i - n) % 2 === 0) ? '1' : '0';

            if (s2[i - n] !== oldExpected1) diff1--;
            if (s2[i - n] !== oldExpected2) diff2--;
        }

        if (i >= n - 1) {
            res = Math.min(res, diff1, diff2);
        }
    }

    return res;
};