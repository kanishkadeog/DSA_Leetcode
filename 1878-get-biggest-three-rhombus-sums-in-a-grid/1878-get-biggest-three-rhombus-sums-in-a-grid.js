/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var getBiggestThree = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const sums = new Set();

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {

            // size 0 rhombus
            sums.add(grid[r][c]);

            // try larger rhombus
            for (let k = 1; r-k >= 0 && r+k < m && c-k >= 0 && c+k < n; k++) {
                let total = 0;

                // top → right
                for (let i = 0; i < k; i++)
                    total += grid[r-k+i][c+i];

                // right → bottom
                for (let i = 0; i < k; i++)
                    total += grid[r+i][c+k-i];

                // bottom → left
                for (let i = 0; i < k; i++)
                    total += grid[r+k-i][c-i];

                // left → top
                for (let i = 0; i < k; i++)
                    total += grid[r-i][c-k+i];

                sums.add(total);
            }
        }
    }

    return [...sums].sort((a,b)=>b-a).slice(0,3);
};