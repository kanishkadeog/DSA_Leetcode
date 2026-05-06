/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(boxGrid) {
    let m = boxGrid.length;
    let n = boxGrid[0].length;

    // Step 1: simulate gravity (rightwards)
    for (let i = 0; i < m; i++) {
        let empty = n - 1; // position where next stone can fall

        for (let j = n - 1; j >= 0; j--) {
            if (boxGrid[i][j] === '*') {
                empty = j - 1; // reset after obstacle
            } else if (boxGrid[i][j] === '#') {
                // move stone to 'empty'
                [boxGrid[i][j], boxGrid[i][empty]] = [boxGrid[i][empty], boxGrid[i][j]];
                empty--;
            }
        }
    }

    // Step 2: rotate 90° clockwise
    let result = Array.from({ length: n }, () => Array(m));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result[j][m - 1 - i] = boxGrid[i][j];
        }
    }

    return result;
};