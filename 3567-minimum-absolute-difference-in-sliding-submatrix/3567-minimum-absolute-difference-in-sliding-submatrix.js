var minAbsDiff = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;

    const res = Array.from({ length: m - k + 1 }, () =>
        Array(n - k + 1).fill(0)
    );

    for (let i = 0; i <= m - k; i++) {
        for (let j = 0; j <= n - k; j++) {

            let set = new Set();

            // collect elements
            for (let x = i; x < i + k; x++) {
                for (let y = j; y < j + k; y++) {
                    set.add(grid[x][y]);
                }
            }

            let arr = Array.from(set);

            if (arr.length <= 1) {
                res[i][j] = 0;
                continue;
            }

            arr.sort((a, b) => a - b);

            let minDiff = Infinity;

            for (let t = 1; t < arr.length; t++) {
                minDiff = Math.min(minDiff, arr[t] - arr[t - 1]);
            }

            res[i][j] = minDiff;
        }
    }

    return res;
};