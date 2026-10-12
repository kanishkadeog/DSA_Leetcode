
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSum = function(nums, k) {
    const MOD = 1000000007n;
    const bitCount = new Array(30).fill(0);

    // Count the occurrences of each bit.
    for (const num of nums) {
        for (let bit = 0; bit < 30; bit++) {
            if (Math.floor(num / (2 ** bit)) % 2 === 1) {
                bitCount[bit]++;
            }
        }
    }

    let answer = 0n;

    // Construct the largest possible numbers.
    for (let i = 0; i < k; i++) {
        let num = 0;

        for (let bit = 29; bit >= 0; bit--) {
            if (bitCount[bit] > 0) {
                num += 2 ** bit;
                bitCount[bit]--;
            }
        }

        const bigNum = BigInt(num);
        answer = (answer + bigNum * bigNum) % MOD;
    }

    return Number(answer);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna