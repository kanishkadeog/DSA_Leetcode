/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prev1 = 0; // max loot till previous house
    let prev2 = 0; // max loot till house before previous

    for (let num of nums) {
        let temp = Math.max(prev1, prev2 + num);
        prev2 = prev1;
        prev1 = temp;
    }

    return prev1;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna