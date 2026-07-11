/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function(n, edges) {

    // Build graph
    const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const visited = new Array(n).fill(false);
    let ans = 0;

    function dfs(node) {
        visited[node] = true;

        let nodes = 1;
        let degreeSum = graph[node].length;

        for (const nei of graph[node]) {
            if (!visited[nei]) {
                const [cntNodes, cntDegree] = dfs(nei);
                nodes += cntNodes;
                degreeSum += cntDegree;
            }
        }

        return [nodes, degreeSum];
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            const [nodes, degreeSum] = dfs(i);

            const edgeCount = degreeSum / 2;

            if (edgeCount === (nodes * (nodes - 1)) / 2) {
                ans++;
            }
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna