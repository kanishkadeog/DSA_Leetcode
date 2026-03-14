var minSwaps = function(grid) {
    const n = grid.length;
    const trailingZeros = [];
    
    // Step 1: compute trailing zeros for each row
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = n - 1; j >= 0; j--) {
            if (grid[i][j] === 0) count++;
            else break;
        }
        trailingZeros.push(count);
    }
    
    let swaps = 0;
    
    // Step 2: greedily fix rows
    for (let i = 0; i < n; i++) {
        let required = n - i - 1;
        let j = i;
        
        // find a row with enough trailing zeros
        while (j < n && trailingZeros[j] < required) {
            j++;
        }
        
        if (j === n) return -1; // not possible
        
        // bubble row j up to position i
        while (j > i) {
            [trailingZeros[j], trailingZeros[j - 1]] =
            [trailingZeros[j - 1], trailingZeros[j]];
            swaps++;
            j--;
        }
    }
    
    return swaps;
};