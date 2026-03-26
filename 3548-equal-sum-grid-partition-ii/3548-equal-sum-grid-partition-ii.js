var canPartitionGrid = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // ================= HANDLE 1D GRID =================
    if (m === 1 || n === 1) {
        let arr = [];

        if (m === 1) arr = grid[0];
        else {
            for (let i = 0; i < m; i++) arr.push(grid[i][0]);
        }

        let total = arr.reduce((a, b) => a + b, 0);
        let leftSum = 0;

        for (let i = 0; i < arr.length - 1; i++) {
            leftSum += arr[i];
            let rightSum = total - leftSum;

            if (leftSum === rightSum) return true;

            let diff = Math.abs(leftSum - rightSum);

            if (leftSum > rightSum) {
                // remove from left
                if (arr[0] === diff || arr[i] === diff) return true;
            } else {
                // remove from right
                if (arr[i + 1] === diff || arr[arr.length - 1] === diff) return true;
            }
        }

        return false;
    }

    // ================= NORMAL 2D CASE =================
    let total = 0;
    for (let row of grid) {
        for (let val of row) total += val;
    }

    function canRemove(map, diff, is1D, arr) {
        if (!map.has(diff)) return false;
        if (!is1D) return true;
        if (arr.length === 1) return false;
        return arr[0] === diff || arr[arr.length - 1] === diff;
    }

    // ---------- HORIZONTAL ----------
    let topSum = 0;
    let topMap = new Map();
    let bottomMap = new Map();

    for (let i = 0; i < m; i++) {
        for (let val of grid[i]) {
            bottomMap.set(val, (bottomMap.get(val) || 0) + 1);
        }
    }

    for (let i = 0; i < m - 1; i++) {
        for (let val of grid[i]) {
            topSum += val;

            topMap.set(val, (topMap.get(val) || 0) + 1);
            bottomMap.set(val, bottomMap.get(val) - 1);
            if (bottomMap.get(val) === 0) bottomMap.delete(val);
        }

        let bottomSum = total - topSum;

        if (topSum === bottomSum) return true;

        let diff = Math.abs(topSum - bottomSum);

        if (topSum > bottomSum) {
            let is1D = (i + 1 === 1);
            if (canRemove(topMap, diff, is1D, grid[i])) return true;
        } else {
            let is1D = (m - i - 1 === 1);
            if (canRemove(bottomMap, diff, is1D, grid[i + 1])) return true;
        }
    }

    // ---------- VERTICAL ----------
    let leftSum = 0;
    let leftMap = new Map();
    let rightMap = new Map();

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
            let val = grid[i][j];
            rightMap.set(val, (rightMap.get(val) || 0) + 1);
        }
    }

    for (let j = 0; j < n - 1; j++) {
        for (let i = 0; i < m; i++) {
            let val = grid[i][j];

            leftSum += val;

            leftMap.set(val, (leftMap.get(val) || 0) + 1);
            rightMap.set(val, rightMap.get(val) - 1);
            if (rightMap.get(val) === 0) rightMap.delete(val);
        }

        let rightSum = total - leftSum;

        if (leftSum === rightSum) return true;

        let diff = Math.abs(leftSum - rightSum);

        if (leftSum > rightSum) {
            let is1D = (j + 1 === 1);
            let col = [];
            for (let i = 0; i < m; i++) col.push(grid[i][j]);

            if (canRemove(leftMap, diff, is1D, col)) return true;
        } else {
            let is1D = (n - j - 1 === 1);
            let col = [];
            for (let i = 0; i < m; i++) col.push(grid[i][j + 1]);

            if (canRemove(rightMap, diff, is1D, col)) return true;
        }
    }

    return false;
};