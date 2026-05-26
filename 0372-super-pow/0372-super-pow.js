/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {

    const MOD = 1337;

    function modPow(base, exp) {

        base %= MOD;

        let result = 1;

        while (exp > 0) {

            if (exp & 1) {
                result = (result * base) % MOD;
            }

            base = (base * base) % MOD;

            exp >>= 1;
        }

        return result;
    }

    let result = 1;

    for (const digit of b) {

        result =
            (modPow(result, 10) *
             modPow(a, digit)) % MOD;
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna