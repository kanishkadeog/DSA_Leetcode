/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxValue = function(nums) {
    let n = nums.length;

    let prefixMax = Array(n);
    let suffixMin = Array(n);

    // prefix max
    prefixMax[0] = nums[0];
    for (let i = 1; i < n; i++) {
        prefixMax[i] = Math.max(prefixMax[i - 1], nums[i]);
    }

    // suffix min
    suffixMin[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffixMin[i] = Math.min(suffixMin[i + 1], nums[i]);
    }

    let ans = Array(n);

    let start = 0;
    let segmentMax = nums[0];

    for (let i = 0; i < n; i++) {
        segmentMax = Math.max(segmentMax, nums[i]);

        // split point
        if (i === n - 1 || prefixMax[i] <= suffixMin[i + 1]) {

            for (let j = start; j <= i; j++) {
                ans[j] = segmentMax;
            }

            start = i + 1;

            if (start < n) {
                segmentMax = nums[start];
            }
        }
    }

    return ans;
};