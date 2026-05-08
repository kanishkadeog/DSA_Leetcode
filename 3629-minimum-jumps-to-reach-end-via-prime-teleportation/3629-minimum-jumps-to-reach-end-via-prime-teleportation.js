/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minJumps = function(nums) {
    const n = nums.length;

    if (n === 1) return 0;

    // -----------------------------
    // Generate primes up to sqrt(max)
    // -----------------------------
    const maxVal = Math.max(...nums);
    const limit = Math.floor(Math.sqrt(maxVal));

    const sieve = Array(limit + 1).fill(true);
    sieve[0] = sieve[1] = false;

    const primes = [];

    for (let i = 2; i <= limit; i++) {
        if (sieve[i]) {
            primes.push(i);

            for (let j = i * i; j <= limit; j += i) {
                sieve[j] = false;
            }
        }
    }

    // -----------------------------
    // Prime factorization
    // -----------------------------
    function getPrimeFactors(x) {
        const factors = [];

        for (const p of primes) {
            if (p * p > x) break;

            if (x % p === 0) {
                factors.push(p);

                while (x % p === 0) {
                    x /= p;
                }
            }
        }

        if (x > 1) factors.push(x);

        return factors;
    }

    // -----------------------------
    // Build buckets:
    // bucket[p] = indices divisible by p
    // -----------------------------
    const bucket = new Map();

    for (let i = 0; i < n; i++) {
        const factors = getPrimeFactors(nums[i]);

        for (const p of factors) {
            if (!bucket.has(p)) {
                bucket.set(p, []);
            }

            bucket.get(p).push(i);
        }
    }

    // -----------------------------
    // Prime check
    // -----------------------------
    function isPrime(x) {
        if (x < 2) return false;

        for (const p of primes) {
            if (p * p > x) break;

            if (x % p === 0) return false;
        }

        return true;
    }

    // -----------------------------
    // BFS
    // -----------------------------
    const visited = Array(n).fill(false);

    const queue = [0];
    visited[0] = true;

    let front = 0;
    let steps = 0;

    while (front < queue.length) {
        let size = queue.length - front;

        while (size--) {
            const i = queue[front++];

            if (i === n - 1) {
                return steps;
            }

            // adjacent left
            if (i - 1 >= 0 && !visited[i - 1]) {
                visited[i - 1] = true;
                queue.push(i - 1);
            }

            // adjacent right
            if (i + 1 < n && !visited[i + 1]) {
                visited[i + 1] = true;
                queue.push(i + 1);
            }

            // teleportation
            if (isPrime(nums[i])) {
                const p = nums[i];

                if (bucket.has(p)) {
                    for (const ni of bucket.get(p)) {
                        if (!visited[ni]) {
                            visited[ni] = true;
                            queue.push(ni);
                        }
                    }

                    // IMPORTANT
                    bucket.delete(p);
                }
            }
        }

        steps++;
    }

    return -1;
};