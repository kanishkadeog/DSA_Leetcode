/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // Minimum is in right half
            left = mid + 1;
        } 
        else if (nums[mid] < nums[right]) {
            // Minimum is in left half including mid
            right = mid;
        } 
        else {
            // Cannot determine side because of duplicates
            right--;
        }
    }

    return nums[left];
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna