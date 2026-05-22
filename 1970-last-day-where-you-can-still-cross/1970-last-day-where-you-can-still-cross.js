/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function(row, col, cells) {

    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    function canCross(day) {

        let grid = Array.from(
            { length: row },
            () => Array(col).fill(0)
        );

        // flood first "day" cells
        for (let i = 0; i < day; i++) {
            let [r,c] = cells[i];
            grid[r-1][c-1] = 1;
        }

        let queue = [];
        let head = 0;

        // start from top row
        for (let c = 0; c < col; c++) {

            if (grid[0][c] === 0) {
                queue.push([0,c]);
                grid[0][c] = 1;
            }
        }

        while (head < queue.length) {

            let [r,c] = queue[head++];

            if (r === row - 1) {
                return true;
            }

            for (let [dr,dc] of dirs) {

                let nr = r + dr;
                let nc = c + dc;

                if (
                    nr >= 0 &&
                    nr < row &&
                    nc >= 0 &&
                    nc < col &&
                    grid[nr][nc] === 0
                ) {
                    grid[nr][nc] = 1;
                    queue.push([nr,nc]);
                }
            }
        }

        return false;
    }

    let left = 1;
    let right = cells.length;
    let ans = 0;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (canCross(mid)) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna