var numberOfSubmatrices = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    // prefix arrays
    let sum = Array.from({ length: m }, () => Array(n).fill(0));
    let countX = Array.from({ length: m }, () => Array(n).fill(0));
    
    let result = 0;
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            
            // convert value
            let val = 0;
            if (grid[i][j] === 'X') val = 1;
            else if (grid[i][j] === 'Y') val = -1;
            
            // build prefix sum
            sum[i][j] = val;
            countX[i][j] = (grid[i][j] === 'X') ? 1 : 0;
            
            if (i > 0) {
                sum[i][j] += sum[i-1][j];
                countX[i][j] += countX[i-1][j];
            }
            if (j > 0) {
                sum[i][j] += sum[i][j-1];
                countX[i][j] += countX[i][j-1];
            }
            if (i > 0 && j > 0) {
                sum[i][j] -= sum[i-1][j-1];
                countX[i][j] -= countX[i-1][j-1];
            }
            
            // check conditions
            if (sum[i][j] === 0 && countX[i][j] > 0) {
                result++;
            }
        }
    }
    
    return result;
};