/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    let arr = [];

    // flatten grid
    for (let row of grid) {
        for (let val of row) {
            arr.push(val);
        }
    }

    // check feasibility
    let mod = arr[0] % x;
    for (let val of arr) {
        if (val % x !== mod) return -1;
    }

    // sort
    arr.sort((a, b) => a - b);

    // median
    let median = arr[Math.floor(arr.length / 2)];

    // compute operations
    let ops = 0;
    for (let val of arr) {
        ops += Math.abs(val - median) / x;
    }

    return ops;
};