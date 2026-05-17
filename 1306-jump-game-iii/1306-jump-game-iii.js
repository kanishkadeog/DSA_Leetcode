/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let n = arr.length;
    let queue = [start];
    let visited = new Set();

    while (queue.length > 0) {
        let idx = queue.shift();

        if (arr[idx] === 0) return true;

        if (visited.has(idx)) continue;
        visited.add(idx);

        let forward = idx + arr[idx];
        let backward = idx - arr[idx];

        if (forward < n) queue.push(forward);
        if (backward >= 0) queue.push(backward);
    }

    return false;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna