/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function(robot, factory) {
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);

    const n = robot.length;
    const m = factory.length;

    const dp = new Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let [pos, limit] of factory) {
        const newDp = [...dp];

        for (let i = 1; i <= n; i++) {
            let cost = 0;

            // assign k robots to this factory
            for (let k = 1; k <= limit && i - k >= 0; k++) {
                cost += Math.abs(robot[i - k] - pos);
                newDp[i] = Math.min(newDp[i], dp[i - k] + cost);
            }
        }

        for (let i = 0; i <= n; i++) {
            dp[i] = newDp[i];
        }
    }

    return dp[n];
};