var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;

    function dfs(i, j, k) {
        // matched entire word
        if (k === word.length) return true;

        // out of bounds or mismatch
        if (
            i < 0 || j < 0 || i >= m || j >= n ||
            board[i][j] !== word[k]
        ) return false;

        // mark visited
        let temp = board[i][j];
        board[i][j] = '#';

        // explore 4 directions
        let found =
            dfs(i + 1, j, k + 1) ||
            dfs(i - 1, j, k + 1) ||
            dfs(i, j + 1, k + 1) ||
            dfs(i, j - 1, k + 1);

        // backtrack
        board[i][j] = temp;

        return found;
    }

    // try every cell as starting point
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
};