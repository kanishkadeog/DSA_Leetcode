/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function(n, k, invocations) {
    // Build graph
    const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of invocations) {
        graph[u].push(v);
    }

    // Find suspicious methods
    const suspicious = new Array(n).fill(false);

    function dfs(node) {
        suspicious[node] = true;

        for (const next of graph[node]) {
            if (!suspicious[next]) {
                dfs(next);
            }
        }
    }

    dfs(k);

    // Check if removal is possible
    for (const [u, v] of invocations) {
        if (!suspicious[u] && suspicious[v]) {
            // Cannot remove anything
            return Array.from({ length: n }, (_, i) => i);
        }
    }

    // Return remaining methods
    const ans = [];

    for (let i = 0; i < n; i++) {
        if (!suspicious[i]) {
            ans.push(i);
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna