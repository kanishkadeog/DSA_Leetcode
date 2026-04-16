/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
    const n = nums.length;

    // map value → sorted indices
    const map = new Map();
    for (let i = 0; i < n; i++) {
        if (!map.has(nums[i])) map.set(nums[i], []);
        map.get(nums[i]).push(i);
    }

    const res = [];

    for (let q of queries) {
        const arr = map.get(nums[q]);

        if (arr.length === 1) {
            res.push(-1);
            continue;
        }

        // find index of q in arr (binary search)
        let l = 0, r = arr.length - 1, pos = -1;
        while (l <= r) {
            let mid = Math.floor((l + r) / 2);
            if (arr[mid] === q) {
                pos = mid;
                break;
            } else if (arr[mid] < q) l = mid + 1;
            else r = mid - 1;
        }

        // neighbors in circular list
        let prev = arr[(pos - 1 + arr.length) % arr.length];
        let next = arr[(pos + 1) % arr.length];

        let d1 = Math.abs(prev - q);
        let d2 = Math.abs(next - q);

        let dist1 = Math.min(d1, n - d1);
        let dist2 = Math.min(d2, n - d2);

        res.push(Math.min(dist1, dist2));
    }

    return res;
};