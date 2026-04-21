/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function(source, target, allowedSwaps) {
    const n = source.length;

    // DSU
    const parent = Array.from({ length: n }, (_, i) => i);

    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    };

    const union = (a, b) => {
        let pa = find(a);
        let pb = find(b);
        if (pa !== pb) parent[pa] = pb;
    };

    // build components
    for (let [a, b] of allowedSwaps) {
        union(a, b);
    }

    // group indices by root
    const groups = new Map();
    for (let i = 0; i < n; i++) {
        let root = find(i);
        if (!groups.has(root)) groups.set(root, []);
        groups.get(root).push(i);
    }

    let distance = 0;

    // process each component
    for (let indices of groups.values()) {
        const count = new Map();

        // count source values
        for (let i of indices) {
            count.set(source[i], (count.get(source[i]) || 0) + 1);
        }

        // try matching target
        for (let i of indices) {
            if (count.get(target[i]) > 0) {
                count.set(target[i], count.get(target[i]) - 1);
            } else {
                distance++; // unmatched
            }
        }
    }

    return distance;
};