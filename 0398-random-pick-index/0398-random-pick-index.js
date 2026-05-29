/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    
    let count = 0;
    let result = -1;

    for (let i = 0; i < this.nums.length; i++) {

        if (this.nums[i] === target) {
            count++;

            // Reservoir Sampling
            if (Math.floor(Math.random() * count) === 0) {
                result = i;
            }
        }
    }

    return result;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna