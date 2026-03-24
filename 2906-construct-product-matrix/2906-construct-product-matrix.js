var constructProductMatrix = function(grid) {
    const MOD = 12345;
    const n = grid.length;
    const m = grid[0].length;

    // flatten
    let arr = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            arr.push(grid[i][j] % MOD);
        }
    }

    const size = arr.length;

    let prefix = new Array(size).fill(1);
    let suffix = new Array(size).fill(1);

    // prefix
    for (let i = 1; i < size; i++) {
        prefix[i] = (prefix[i - 1] * arr[i - 1]) % MOD;
    }

    // suffix
    for (let i = size - 2; i >= 0; i--) {
        suffix[i] = (suffix[i + 1] * arr[i + 1]) % MOD;
    }

    // result array
    let resArr = new Array(size);
    for (let i = 0; i < size; i++) {
        resArr[i] = (prefix[i] * suffix[i]) % MOD;
    }

    // reshape back to 2D
    let res = Array.from({ length: n }, () => Array(m).fill(0));

    let idx = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            res[i][j] = resArr[idx++];
        }
    }

    return res;
};