/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const res = [];

    const backtrack = (start, parts, path) => {
        // if 4 parts formed
        if (parts === 4 && start === s.length) {
            res.push(path.join('.'));
            return;
        }

        // invalid cases
        if (parts === 4 || start === s.length) return;

        // try 1 to 3 digits
        for (let len = 1; len <= 3; len++) {
            if (start + len > s.length) break;

            let segment = s.substring(start, start + len);

            // check leading zero
            if (segment.length > 1 && segment[0] === '0') continue;

            // check range
            if (Number(segment) > 255) continue;

            path.push(segment);
            backtrack(start + len, parts + 1, path);
            path.pop();
        }
    };

    backtrack(0, 0, []);
    return res;
};