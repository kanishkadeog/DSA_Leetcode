/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;

    // Initialize closest as first possible sum
    let closest = nums[0] + nums[1] + nums[2];

    for (let i = 0; i < n - 2; i++) {

        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            // Update closest
            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            // Move pointers
            if (sum === target) {
                return sum; // exact match
            } 
            else if (sum < target) {
                left++;
            } 
            else {
                right--;
            }
        }
    }

    return closest;
};
