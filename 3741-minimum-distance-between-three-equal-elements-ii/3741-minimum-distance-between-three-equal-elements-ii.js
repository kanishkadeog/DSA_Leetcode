/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDistance = function(nums) {
    const map = new Map();

    // Step 1: store indices
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], []);
        map.get(nums[i]).push(i);
    }

    let res = Infinity;

    // Step 2: process each value
    for (let list of map.values()) {
        if (list.length < 3) continue;

        // Step 3: sliding window of size 3
        for (let i = 0; i + 2 < list.length; i++) {
            let left = list[i];
            let right = list[i + 2];

            res = Math.min(res, 2 * (right - left));
        }
    }

    return res === Infinity ? -1 : res;
};