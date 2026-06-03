/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(
    landStartTime,
    landDuration,
    waterStartTime,
    waterDuration
) {
    
    const land = [];
    const water = [];

    for (let i = 0; i < landStartTime.length; i++) {
        land.push([landStartTime[i], landDuration[i]]);
    }

    for (let i = 0; i < waterStartTime.length; i++) {
        water.push([waterStartTime[i], waterDuration[i]]);
    }

    water.sort((a, b) => a[0] - b[0]);
    land.sort((a, b) => a[0] - b[0]);

    let ans = Infinity;

    function solve(first, second) {
        let best = Infinity;
        const m = second.length;

        const starts = second.map(x => x[0]);

        // prefix minimum duration
        const prefixMinDur = new Array(m);
        prefixMinDur[0] = second[0][1];

        for (let i = 1; i < m; i++) {
            prefixMinDur[i] = Math.min(
                prefixMinDur[i - 1],
                second[i][1]
            );
        }

        // suffix minimum (start + duration)
        const suffixMinFinish = new Array(m);
        suffixMinFinish[m - 1] =
            second[m - 1][0] + second[m - 1][1];

        for (let i = m - 2; i >= 0; i--) {
            suffixMinFinish[i] = Math.min(
                suffixMinFinish[i + 1],
                second[i][0] + second[i][1]
            );
        }

        for (const [start1, dur1] of first) {

            const finish1 = start1 + dur1;

            // upper_bound(starts, finish1)
            let l = 0, r = m;

            while (l < r) {
                let mid = (l + r) >> 1;

                if (starts[mid] <= finish1) {
                    l = mid + 1;
                } else {
                    r = mid;
                }
            }

            const pos = l;

            // rides already open when finish1 occurs
            if (pos > 0) {
                best = Math.min(
                    best,
                    finish1 + prefixMinDur[pos - 1]
                );
            }

            // rides opening later
            if (pos < m) {
                best = Math.min(
                    best,
                    suffixMinFinish[pos]
                );
            }
        }

        return best;
    }

    ans = Math.min(
        solve(land, water), // land -> water
        solve(water, land)  // water -> land
    );

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna