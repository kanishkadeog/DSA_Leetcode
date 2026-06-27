/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
    const cnt = new Map();

    for (const num of nums) {
        cnt.set(num, (cnt.get(num) || 0) + 1);
    }

    let ans = 1;

    // Special handling for 1
    if (cnt.has(1)) {
        let ones = cnt.get(1);

        if (ones % 2 === 0) ones--;

        ans = Math.max(ans, ones);
    }

    for (const [start] of cnt) {
        if (start === 1) continue;

        let x = start;
        let len = 0;

        while (cnt.get(x) >= 2) {
            len += 2;
            x = x * x;

            if (x > 1e18) break;
        }

        if (cnt.has(x)) {
            len += 1;
        } else {
            len -= 1;
        }

        ans = Math.max(ans, len);
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna