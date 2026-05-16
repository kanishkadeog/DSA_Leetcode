/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) return 0;

    // Assume all numbers are prime initially
    let isPrime = new Array(n).fill(true);

    isPrime[0] = false;
    isPrime[1] = false;

    // Sieve of Eratosthenes
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Count primes
    let count = 0;

    for (let i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }

    return count;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna