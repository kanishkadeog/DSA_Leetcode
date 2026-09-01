/**
 * @param {string[]} classroom
 * @param {number} energy
 * @return {number}
 */
var minMoves = function(classroom, energy) {
    const m = classroom.length;
    const n = classroom[0].length;

    let sr = 0;
    let sc = 0;

    // Give every litter cell a bit position
    const litterId = Array.from({ length: m }, () => Array(n).fill(-1));

    let litterCount = 0;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (classroom[r][c] === 'S') {
                sr = r;
                sc = c;
            }

            if (classroom[r][c] === 'L') {
                litterId[r][c] = litterCount++;
            }
        }
    }

    // No litter to collect
    if (litterCount === 0) {
        return 0;
    }

    const fullMask = (1 << litterCount) - 1;

    /*
        bestEnergy[r][c][mask]
        = maximum energy we have seen at this position
          after collecting this exact set of litter.

        If we reach the same (r,c,mask) with less or equal
        energy, that state can never be better.
    */
    const bestEnergy = Array.from({ length: m }, () =>
        Array.from({ length: n }, () =>
            new Int8Array(1 << litterCount).fill(-1)
        )
    );

    // BFS queue
    const queue = [];

    // State: [row, col, mask, remainingEnergy, steps]
    queue.push([sr, sc, 0, energy, 0]);

    bestEnergy[sr][sc][0] = energy;

    let head = 0;

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    while (head < queue.length) {
        const [r, c, mask, e, steps] = queue[head++];

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            // Outside the grid
            if (
                nr < 0 ||
                nr >= m ||
                nc < 0 ||
                nc >= n
            ) {
                continue;
            }

            // Cannot walk through obstacles
            if (classroom[nr][nc] === 'X') {
                continue;
            }

            // Every move costs 1 energy
            let ne = e - 1;

            // Cannot make a move without energy
            if (ne < 0) {
                continue;
            }

            let nmask = mask;

            // Collect litter
            if (classroom[nr][nc] === 'L') {
                const id = litterId[nr][nc];
                nmask |= (1 << id);
            }

            // Reset energy at R
            if (classroom[nr][nc] === 'R') {
                ne = energy;
            }

            // All litter collected
            if (nmask === fullMask) {
                return steps + 1;
            }

            /*
                If we've already reached this exact
                (position + litter mask) with >= energy,
                this state is useless.
            */
            if (ne <= bestEnergy[nr][nc][nmask]) {
                continue;
            }

            bestEnergy[nr][nc][nmask] = ne;

            queue.push([
                nr,
                nc,
                nmask,
                ne,
                steps + 1
            ]);
        }
    }

    return -1;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna