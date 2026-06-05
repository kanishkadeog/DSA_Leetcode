/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var totalWaviness = function(num1, num2) {

    function solve(limit) {
        if (limit <= 0) return 0n;

        const digits = String(limit);
        const n = digits.length;
        const memo = new Map();

        function dfs(pos, tight, started, last2, last1, lenState) {
            if (pos === n) {
                return [1n, 0n]; // [count, totalWaviness]
            }

            const key = !tight
                ? `${pos}|${started}|${last2}|${last1}|${lenState}`
                : null;

            if (key !== null && memo.has(key)) {
                return memo.get(key);
            }

            const limitDigit = tight ? Number(digits[pos]) : 9;

            let totalCount = 0n;
            let totalWave = 0n;

            for (let d = 0; d <= limitDigit; d++) {
                const nextTight = tight && (d === limitDigit);

                if (!started && d === 0) {
                    const [cnt, wav] = dfs(
                        pos + 1,
                        nextTight,
                        false,
                        -1,
                        -1,
                        0
                    );

                    totalCount += cnt;
                    totalWave += wav;
                    continue;
                }

                if (!started) {
                    const [cnt, wav] = dfs(
                        pos + 1,
                        nextTight,
                        true,
                        -1,
                        d,
                        1
                    );

                    totalCount += cnt;
                    totalWave += wav;
                } else if (lenState === 1) {
                    const [cnt, wav] = dfs(
                        pos + 1,
                        nextTight,
                        true,
                        last1,
                        d,
                        2
                    );

                    totalCount += cnt;
                    totalWave += wav;
                } else {
                    let add = 0n;

                    if (
                        (last1 > last2 && last1 > d) ||
                        (last1 < last2 && last1 < d)
                    ) {
                        add = 1n;
                    }

                    const [cnt, wav] = dfs(
                        pos + 1,
                        nextTight,
                        true,
                        last1,
                        d,
                        2
                    );

                    totalCount += cnt;
                    totalWave += wav + add * cnt;
                }
            }

            const res = [totalCount, totalWave];

            if (key !== null) {
                memo.set(key, res);
            }

            return res;
        }

        return dfs(0, true, false, -1, -1, 0)[1];
    }

    const ans = solve(num2) - solve(num1 - 1);

    return Number(ans);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna