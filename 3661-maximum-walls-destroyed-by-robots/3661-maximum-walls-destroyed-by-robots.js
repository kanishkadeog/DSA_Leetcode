var maxWalls = function(robots, distance, walls) {
    let n = robots.length;

    // sort robots
    let arr = robots.map((r, i) => [r, distance[i]]);
    arr.sort((a, b) => a[0] - b[0]);

    robots = arr.map(x => x[0]);
    distance = arr.map(x => x[1]);

    walls.sort((a, b) => a - b);

    // binary search
    const lowerBound = (target) => {
        let l = 0, r = walls.length;
        while (l < r) {
            let m = (l + r) >> 1;
            if (walls[m] < target) l = m + 1;
            else r = m;
        }
        return l;
    };

    const upperBound = (target) => {
        let l = 0, r = walls.length;
        while (l < r) {
            let m = (l + r) >> 1;
            if (walls[m] <= target) l = m + 1;
            else r = m;
        }
        return l;
    };

    // store intervals as wall index ranges
    let leftRange = [];
    let rightRange = [];

    for (let i = 0; i < n; i++) {
        let L = robots[i] - distance[i];
        if (i > 0) L = Math.max(L, robots[i-1]);

        let R = robots[i] + distance[i];
        if (i < n - 1) R = Math.min(R, robots[i+1]);

        // left interval
        let l1 = lowerBound(L);
        let r1 = upperBound(robots[i]) - 1;

        // right interval
        let l2 = lowerBound(robots[i]);
        let r2 = upperBound(R) - 1;

        leftRange.push([l1, r1]);
        rightRange.push([l2, r2]);
    }

    // DP[i][j] = max walls using first i robots, last covered wall index = j
    let dp = new Map();
    dp.set(-1, 0); // no walls covered

    for (let i = 0; i < n; i++) {
        let newDp = new Map();

        for (let [last, val] of dp.entries()) {

            // try LEFT
            let [l, r] = leftRange[i];
            let gain = 0;
            if (r >= l) {
                let start = Math.max(l, last + 1);
                if (start <= r) gain = r - start + 1;
            }
            let newLast = Math.max(last, r);
            newDp.set(newLast, Math.max(newDp.get(newLast) || 0, val + gain));

            // try RIGHT
            [l, r] = rightRange[i];
            gain = 0;
            if (r >= l) {
                let start = Math.max(l, last + 1);
                if (start <= r) gain = r - start + 1;
            }
            newLast = Math.max(last, r);
            newDp.set(newLast, Math.max(newDp.get(newLast) || 0, val + gain));
        }

        dp = newDp;
    }

    return Math.max(...dp.values());
};