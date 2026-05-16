/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // Build adjacency list
    let graph = Array.from({ length: numCourses }, () => []);

    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
    }

    // 0 = unvisited
    // 1 = visiting
    // 2 = visited
    let state = new Array(numCourses).fill(0);

    function dfs(course) {
        // Cycle detected
        if (state[course] === 1) return false;

        // Already checked
        if (state[course] === 2) return true;

        state[course] = 1;

        for (let neighbor of graph[course]) {
            if (!dfs(neighbor)) {
                return false;
            }
        }

        state[course] = 2;
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) {
            return false;
        }
    }

    return true;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna