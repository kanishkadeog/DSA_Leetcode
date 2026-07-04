/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function(n, roads) {
    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [u, v, w] of roads) {
        graph[u].push([v, w]);
        graph[v].push([u, w]);
    }

    const visited = new Array(n + 1).fill(false);
    const queue = [1];
    visited[1] = true;

    let ans = Infinity;
    let head = 0;

    while (head < queue.length) {
        const u = queue[head++];

        for (const [v, w] of graph[u]) {
            ans = Math.min(ans, w);

            if (!visited[v]) {
                visited[v] = true;
                queue.push(v);
            }
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna