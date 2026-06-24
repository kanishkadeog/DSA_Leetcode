/**
 * @param {number} n
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var zigZagArrays = function(n, l, r) {
    const MOD = 1000000007n;
    const m = r - l + 1;
    const S = 2 * m;

    const modAdd = (a, b) => (a + b) % MOD;
    const modMul = (a, b) => (a * b) % MOD;

    // Build transition matrix
    let T = Array.from({ length: S }, () =>
        Array(S).fill(0n)
    );

    // up[x] -> down[y] for y < x
    for (let x = 0; x < m; x++) {
        for (let y = 0; y < x; y++) {
            T[m + y][x] = 1n;
        }
    }

    // down[x] -> up[y] for y > x
    for (let x = 0; x < m; x++) {
        for (let y = x + 1; y < m; y++) {
            T[y][m + x] = 1n;
        }
    }

    function multiply(A, B) {
        const n = A.length;
        const p = B[0].length;
        const k = B.length;

        let C = Array.from({ length: n }, () =>
            Array(p).fill(0n)
        );

        for (let i = 0; i < n; i++) {
            for (let t = 0; t < k; t++) {
                if (A[i][t] === 0n) continue;

                for (let j = 0; j < p; j++) {
                    if (B[t][j] === 0n) continue;

                    C[i][j] =
                        (C[i][j] + A[i][t] * B[t][j]) % MOD;
                }
            }
        }

        return C;
    }

    function matPow(mat, exp) {
        let size = mat.length;

        let res = Array.from({ length: size }, (_, i) =>
            Array.from({ length: size }, (_, j) =>
                i === j ? 1n : 0n
            )
        );

        while (exp > 0) {
            if (exp & 1) {
                res = multiply(mat, res);
            }

            mat = multiply(mat, mat);
            exp >>= 1;
        }

        return res;
    }

    function multiplyMatVec(M, V) {
        const n = M.length;
        let res = Array(n).fill(0n);

        for (let i = 0; i < n; i++) {
            let sum = 0n;

            for (let j = 0; j < n; j++) {
                if (M[i][j] !== 0n) {
                    sum = (sum + M[i][j] * V[j]) % MOD;
                }
            }

            res[i] = sum;
        }

        return res;
    }

    // Length-2 DP vector
    let v = Array(S).fill(0n);

    for (let x = 0; x < m; x++) {
        v[x] = BigInt(x);              // up[x]
        v[m + x] = BigInt(m - 1 - x); // down[x]
    }

    if (n === 2) {
        let ans = 0n;
        for (let x of v) ans = (ans + x) % MOD;
        return Number(ans);
    }

    const P = matPow(T, n - 2);

    const finalVec = multiplyMatVec(P, v);

    let ans = 0n;

    for (let val of finalVec) {
        ans = (ans + val) % MOD;
    }

    return Number(ans);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna