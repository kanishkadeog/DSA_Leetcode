var survivedRobotsHealths = function(positions, healths, directions) {
    const n = positions.length;

    let robots = [];
    for (let i = 0; i < n; i++) {
        robots.push({
            pos: positions[i],
            health: healths[i],
            dir: directions[i],
            index: i
        });
    }

    // sort by position
    robots.sort((a, b) => a.pos - b.pos);

    let stack = []; // only 'R'
    let survivors = new Array(n).fill(0);

    for (let robot of robots) {
        if (robot.dir === 'R') {
            stack.push(robot);
        } else {
            // fight with stack
            while (stack.length > 0 && robot.health > 0) {
                let top = stack[stack.length - 1];

                if (top.health === robot.health) {
                    stack.pop();
                    robot.health = 0;
                    break;
                } else if (top.health > robot.health) {
                    top.health--;
                    robot.health = 0;
                    break;
                } else {
                    robot.health--;
                    stack.pop();
                }
            }

            if (robot.health > 0) {
                survivors[robot.index] = robot.health;
            }
        }
    }

    // remaining stack robots survive
    for (let r of stack) {
        survivors[r.index] = r.health;
    }

    // build result
    let res = [];
    for (let h of survivors) {
        if (h > 0) res.push(h);
    }

    return res;
};