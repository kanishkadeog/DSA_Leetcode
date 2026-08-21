/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */
var findKthSmallest = function(coins, k) {
    const n = coins.length;

    // Greatest Common Divisor
    function gcd(a, b) {
        while (b !== 0) {
            const temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }

    // Least Common Multiple
    function lcm(a, b) {
        return (a / gcd(a, b)) * b;
    }

    // Count how many distinct amounts <= x
    // can be made by at least one coin.
    function count(x) {
        let total = 0;

        // Inclusion-exclusion over all subsets
        for (let mask = 1; mask < (1 << n); mask++) {
            let multiple = 1;
            let bits = 0;
            let valid = true;

            for (let i = 0; i < n; i++) {
                if (mask & (1 << i)) {
                    bits++;

                    multiple = lcm(multiple, coins[i]);

                    // LCM is already larger than x.
                    if (multiple > x) {
                        valid = false;
                        break;
                    }
                }
            }

            if (!valid) continue;

            const cnt = Math.floor(x / multiple);

            if (bits % 2 === 1) {
                total += cnt;
            } else {
                total -= cnt;
            }
        }

        return total;
    }

    // The kth amount cannot be larger than k * minimum coin.
    let left = 1;
    let right = Math.min(...coins) * k;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (count(mid) >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna