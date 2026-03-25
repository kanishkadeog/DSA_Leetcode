var canPartitionGrid = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    let total = 0;

    // compute total sum
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            total += grid[i][j];
        }
    }

    // if total is odd → impossible
    if (total % 2 !== 0) return false;

    // check horizontal cuts
    let topSum = 0;
    for (let i = 0; i < m - 1; i++) {
        let rowSum = 0;
        for (let j = 0; j < n; j++) {
            rowSum += grid[i][j];
        }
        topSum += rowSum;

        if (topSum === total - topSum) return true;
    }

    // check vertical cuts
    let leftSum = 0;
    for (let j = 0; j < n - 1; j++) {
        let colSum = 0;
        for (let i = 0; i < m; i++) {
            colSum += grid[i][j];
        }
        leftSum += colSum;

        if (leftSum === total - leftSum) return true;
    }

    return false;
};