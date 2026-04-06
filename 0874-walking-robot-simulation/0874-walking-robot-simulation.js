/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    // directions: N, E, S, W
    const dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    let dir = 0; // start facing north
    let x = 0, y = 0;
    let maxDist = 0;

    // store obstacles
    let set = new Set();
    for (let [ox, oy] of obstacles) {
        set.add(ox + "," + oy);
    }

    for (let cmd of commands) {
        if (cmd === -1) {
            dir = (dir + 1) % 4; // right
        } else if (cmd === -2) {
            dir = (dir + 3) % 4; // left
        } else {
            // move forward step by step
            for (let i = 0; i < cmd; i++) {
                let nx = x + dirs[dir][0];
                let ny = y + dirs[dir][1];

                if (set.has(nx + "," + ny)) break;

                x = nx;
                y = ny;

                maxDist = Math.max(maxDist, x * x + y * y);
            }
        }
    }

    return maxDist;
};