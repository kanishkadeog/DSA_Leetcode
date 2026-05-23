/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const graph = new Map();

    // Build graph
    for (let [from, to] of tickets) {
        if (!graph.has(from)) {
            graph.set(from, []);
        }
        graph.get(from).push(to);
    }

    // Sort in reverse lexical order
    for (let [key, list] of graph) {
        list.sort().reverse();
    }

    const result = [];

    function dfs(airport) {
        const destinations = graph.get(airport);

        while (destinations && destinations.length) {
            const next = destinations.pop(); // smallest lexicographically
            dfs(next);
        }

        result.push(airport);
    }

    dfs("JFK");

    return result.reverse();
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna