/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {

    const n = arr.length;
    if (n === 1) return 0;

    // value -> list of indices
    const map = new Map();

    for (let i = 0; i < n; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], []);
        }
        map.get(arr[i]).push(i);
    }

    const queue = [0];
    const visited = new Array(n).fill(false);
    visited[0] = true;

    let steps = 0;

    while (queue.length) {

        let size = queue.length;

        while (size--) {

            const i = queue.shift();

            if (i === n - 1) {
                return steps;
            }

            // i-1
            if (i - 1 >= 0 && !visited[i - 1]) {
                visited[i - 1] = true;
                queue.push(i - 1);
            }

            // i+1
            if (i + 1 < n && !visited[i + 1]) {
                visited[i + 1] = true;
                queue.push(i + 1);
            }

            // same value jumps
            if (map.has(arr[i])) {

                for (const next of map.get(arr[i])) {

                    if (!visited[next]) {
                        visited[next] = true;
                        queue.push(next);
                    }
                }

                // critical optimization
                map.delete(arr[i]);
            }
        }

        steps++;
    }

    return -1;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna