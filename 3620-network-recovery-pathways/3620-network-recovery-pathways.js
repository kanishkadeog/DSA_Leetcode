/**
 * @param {number[][]} edges
 * @param {boolean[]} online
 * @param {number} k
 * @return {number}
 */
var findMaxPathScore = function(edges, online, k) {
    let n = online.length;

    const graph = Array.from({ length: n }, () => []);
    const indegree = new Array(n).fill(0);

    let maxCost = 0;

    for (const [u, v, w] of edges) {
        graph[u].push([v, w]);
        indegree[v]++;
        if (w > maxCost) maxCost = w;
    }

    // Topological order (same for every binary-search iteration)
    const queue = [];
    const topo = [];

    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) queue.push(i);
    }

    let head = 0;
    while (head < queue.length) {
        const u = queue[head++];
        topo.push(u);

        for (const [v] of graph[u]) {
            indegree[v]--;
            if (indegree[v] === 0) queue.push(v);
        }
    }

    function check(limit) {
        const INF = Number.MAX_SAFE_INTEGER;
        const dist = new Array(n).fill(INF);
        dist[0] = 0;

        for (const u of topo) {
            if (dist[u] === INF) continue;

            for (const [v, w] of graph[u]) {

                if (w < limit) continue;

                // intermediate nodes must be online
                if (v !== n - 1 && !online[v]) continue;

                const nd = dist[u] + w;
                if (nd < dist[v]) {
                    dist[v] = nd;
                }
            }
        }

        return dist[n - 1] <= k;
    }

    let lo = 0, hi = maxCost;
    let ans = -1;

    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);

        if (check(mid)) {
            ans = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna