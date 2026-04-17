/**
 * @param {number[]} nums
 * @return {number}
 */
var minMirrorPairDistance = function(nums) {
    const map = new Map();
    let ans = Infinity;

    const reverse = (num) => {
        let res = 0;
        while (num > 0) {
            res = res * 10 + (num % 10);
            num = Math.floor(num / 10);
        }
        return res;
    };

    for (let i = 0; i < nums.length; i++) {
        let x = nums[i];

        // if we already saw reverse(x)
        if (map.has(x)) {
            ans = Math.min(ans, i - map.get(x));
        }

        // store reverse(x) → index
        let rev = reverse(x);
        map.set(rev, i);
    }

    return ans === Infinity ? -1 : ans;
};