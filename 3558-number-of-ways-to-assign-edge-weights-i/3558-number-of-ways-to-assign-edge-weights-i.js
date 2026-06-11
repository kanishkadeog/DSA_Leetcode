/**
 * @param {number[][]} edges
 * @return {number}
 */
var assignEdgeWeights = function(edges) {
    const MOD = 1000000007;
    const n = edges.length + 1;

    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let maxDepth = 0;

    const dfs = (node, parent, depth) => {
        maxDepth = Math.max(maxDepth, depth);

        for (const nei of graph[node]) {
            if (nei !== parent) {
                dfs(nei, node, depth + 1);
            }
        }
    };

    dfs(1, 0, 0);

    let ans = 1n;
    let exp = BigInt(maxDepth - 1);
    let base = 2n;

    while (exp > 0n) {
        if (exp & 1n) {
            ans = (ans * base) % BigInt(MOD);
        }
        base = (base * base) % BigInt(MOD);
        exp >>= 1n;
    }

    return Number(ans);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna