/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const isValid = (row, col, char) => {
        for (let i = 0; i < 9; i++) {
            // Check row
            if (board[row][i] === char) return false;
            // Check column
            if (board[i][col] === char) return false;
            // Check 3x3 box
            const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
            const boxCol = 3 * Math.floor(col / 3) + (i % 3);
            if (board[boxRow][boxCol] === char) return false;
        }
        return true;
    };

    const backtrack = () => {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') {
                    for (let num = 1; num <= 9; num++) {
                        const char = num.toString();
                        if (isValid(r, c, char)) {
                            board[r][c] = char;
                            if (backtrack()) return true;
                            board[r][c] = '.'; // Backtrack
                        }
                    }
                    return false; // No valid number, trigger backtrack
                }
            }
        }
        return true; // All cells filled
    };

    backtrack();
};
