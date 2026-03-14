/**
 * @param {number} mountainHeight
 * @param {number[]} workerTimes
 * @return {number}
 */
var minNumberOfSeconds = function(mountainHeight, workerTimes) {

    function canFinish(T) {
        let total = 0n;

        for (let t of workerTimes) {
            let tt = BigInt(t);
            let x = BigInt(Math.floor((Math.sqrt(Number(1n + 8n * T / tt)) - 1) / 2));
            total += x;

            if (total >= BigInt(mountainHeight)) return true;
        }

        return total >= BigInt(mountainHeight);
    }

    let minWorker = Math.min(...workerTimes);

    let left = 0n;
    let right = BigInt(minWorker) * BigInt(mountainHeight) * BigInt(mountainHeight + 1) / 2n;

    while (left < right) {
        let mid = (left + right) / 2n;

        if (canFinish(mid)) right = mid;
        else left = mid + 1n;
    }

    return Number(left);
};