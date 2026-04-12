/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function(word) {
    const getDist = (a, b) => {
        if (a === -1) return 0; // free start
        let x1 = Math.floor(a / 6), y1 = a % 6;
        let x2 = Math.floor(b / 6), y2 = b % 6;
        return Math.abs(x1 - x2) + Math.abs(y1 - y2);
    };

    const n = word.length;

    // dp map: key = "a,b"
    let dp = new Map();
    dp.set("-1,-1", 0); // both fingers unused

    for (let i = 0; i < n; i++) {
        let c = word.charCodeAt(i) - 65;
        let newDp = new Map();

        for (let [key, cost] of dp) {
            let [a, b] = key.split(",").map(Number);

            // move finger1 to c
            let cost1 = cost + getDist(a, c);
            let key1 = `${c},${b}`;
            newDp.set(key1, Math.min(newDp.get(key1) ?? Infinity, cost1));

            // move finger2 to c
            let cost2 = cost + getDist(b, c);
            let key2 = `${a},${c}`;
            newDp.set(key2, Math.min(newDp.get(key2) ?? Infinity, cost2));
        }

        dp = newDp;
    }

    // find min
    let res = Infinity;
    for (let val of dp.values()) {
        res = Math.min(res, val);
    }

    return res;
};