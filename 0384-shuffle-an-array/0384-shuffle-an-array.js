/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = [...nums];
    this.nums = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.nums = [...this.original];
    return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {

    let arr = [...this.nums];

    // Fisher-Yates Shuffle
    for (let i = arr.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna