/**
 * @param {string[]} queries
 * @param {string[]} dictionary
 * @return {string[]}
 */
var twoEditWords = function(queries, dictionary) {
    
    const withinTwoEdits = (a, b) => {
        let diff = 0;
        
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                diff++;
                if (diff > 2) return false; // early stop
            }
        }
        
        return true;
    };

    const res = [];

    for (let q of queries) {
        for (let d of dictionary) {
            if (withinTwoEdits(q, d)) {
                res.push(q);
                break; // no need to check further
            }
        }
    }

    return res;
};