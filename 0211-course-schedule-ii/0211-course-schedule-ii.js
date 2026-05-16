/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // Build graph and indegree array
    let graph = Array.from({ length: numCourses }, () => []);
    let indegree = new Array(numCourses).fill(0);

    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        indegree[course]++;
    }

    // Queue for courses with no prerequisites
    let queue = [];

    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    let result = [];

    // Topological Sort (BFS)
    while (queue.length > 0) {
        let current = queue.shift();
        result.push(current);

        for (let neighbor of graph[current]) {
            indegree[neighbor]--;

            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    // If cycle exists, return []
    return result.length === numCourses ? result : [];
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna