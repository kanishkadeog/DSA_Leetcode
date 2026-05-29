/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    
    // Build graph
    let graph = {};

    for (let i = 0; i < equations.length; i++) {
        let [a, b] = equations[i];
        let val = values[i];

        if (!graph[a]) graph[a] = [];
        if (!graph[b]) graph[b] = [];

        graph[a].push([b, val]);
        graph[b].push([a, 1 / val]);
    }

    // DFS helper
    const dfs = (src, dest, visited) => {

        if (!(src in graph) || !(dest in graph)) {
            return -1.0;
        }

        if (src === dest) return 1.0;

        visited.add(src);

        for (let [neighbor, weight] of graph[src]) {

            if (!visited.has(neighbor)) {

                let result = dfs(neighbor, dest, visited);

                if (result !== -1.0) {
                    return weight * result;
                }
            }
        }

        return -1.0;
    };

    let answer = [];

    for (let [src, dest] of queries) {
        answer.push(dfs(src, dest, new Set()));
    }

    return answer;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna