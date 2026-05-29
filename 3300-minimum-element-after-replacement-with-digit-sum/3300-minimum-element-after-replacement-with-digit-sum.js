/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    
    // Function to calculate digit sum
    const digitSum = (num) => {
        let sum = 0;
        
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        
        return sum;
    };

    let min = Infinity;

    for (let num of nums) {
        min = Math.min(min, digitSum(num));
    }

    return min;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna