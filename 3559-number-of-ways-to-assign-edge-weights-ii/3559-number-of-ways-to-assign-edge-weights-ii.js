/**
 * @param {number[][]} edges
 * @param {number[][]} queries
 * @return {number[]}
 */
var assignEdgeWeights = function(edges, queries) {

    const MOD = 1000000007n;

    const n = edges.length + 1;

    // -----------------------------
    // Build Graph
    // -----------------------------

    let graph = Array.from({ length: n + 1 }, () => []);

    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    // -----------------------------
    // LCA Preprocessing
    // -----------------------------

    const LOG = 18;

    let parent =
        Array.from({ length: LOG },
            () => Array(n + 1).fill(0));

    let depth = Array(n + 1).fill(0);

    // Iterative DFS (safe for large n)
    let stack = [[1, 0]];

    while (stack.length) {

        let [node, par] = stack.pop();

        parent[0][node] = par;

        for (let nei of graph[node]) {

            if (nei === par) continue;

            depth[nei] = depth[node] + 1;

            stack.push([nei, node]);
        }
    }

    // Binary lifting table
    for (let j = 1; j < LOG; j++) {

        for (let i = 1; i <= n; i++) {

            parent[j][i] =
                parent[j - 1][ parent[j - 1][i] ];
        }
    }

    // -----------------------------
    // LCA
    // -----------------------------

    function lca(u, v) {

        if (depth[u] < depth[v]) {
            [u, v] = [v, u];
        }

        let diff = depth[u] - depth[v];

        for (let j = 0; j < LOG; j++) {

            if ((diff >> j) & 1) {
                u = parent[j][u];
            }
        }

        if (u === v) return u;

        for (let j = LOG - 1; j >= 0; j--) {

            if (parent[j][u] !== parent[j][v]) {

                u = parent[j][u];
                v = parent[j][v];
            }
        }

        return parent[0][u];
    }

    // -----------------------------
    // Fast Power using BigInt
    // -----------------------------

    function modPow(exp) {

        let base = 2n;
        let result = 1n;

        let e = BigInt(exp);

        while (e > 0n) {

            if (e & 1n) {
                result = (result * base) % MOD;
            }

            base = (base * base) % MOD;

            e >>= 1n;
        }

        return Number(result);
    }

    // -----------------------------
    // Answer Queries
    // -----------------------------

    let ans = [];

    for (let [u, v] of queries) {

        let L = lca(u, v);

        let len =
            depth[u] + depth[v] - 2 * depth[L];

        if (len === 0) {
            ans.push(0);
        } else {
            ans.push(modPow(len - 1));
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna