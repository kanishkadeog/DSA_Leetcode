/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    let map = new Map();
    let n = nums.length;
    let res = new Array(n).fill(0);

    // Step 1: group indices
    for (let i = 0; i < n; i++) {
        if (!map.has(nums[i])) map.set(nums[i], []);
        map.get(nums[i]).push(i);
    }

    // Step 2: process each group
    for (let indices of map.values()) {
        let k = indices.length;

        // prefix sum array
        let prefix = new Array(k).fill(0);
        prefix[0] = indices[0];

        for (let i = 1; i < k; i++) {
            prefix[i] = prefix[i - 1] + indices[i];
        }

        for (let i = 0; i < k; i++) {
            let idx = indices[i];

            // left
            let left = i > 0 ? idx * i - prefix[i - 1] : 0;

            // right
            let right = (prefix[k - 1] - prefix[i]) - idx * (k - i - 1);

            res[idx] = left + right;
        }
    }

    return res;
};