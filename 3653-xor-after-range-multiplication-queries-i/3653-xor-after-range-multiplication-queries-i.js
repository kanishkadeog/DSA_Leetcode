/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var xorAfterQueries = function(nums, queries) {
    const MOD = 1e9 + 7;

    for (let [l, r, k, v] of queries) {
        for (let i = l; i <= r; i += k) {
            nums[i] = (nums[i] * v) % MOD;
        }
    }

    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }

    return xor;
};