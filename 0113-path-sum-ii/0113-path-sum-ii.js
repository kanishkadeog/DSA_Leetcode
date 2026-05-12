/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {

    let result = [];

    function dfs(node, remaining, path) {

        if (!node) return;

        // add current node
        path.push(node.val);

        // leaf node
        if (
            !node.left &&
            !node.right &&
            remaining === node.val
        ) {
            result.push([...path]);
        }

        // continue DFS
        dfs(node.left, remaining - node.val, path);
        dfs(node.right, remaining - node.val, path);

        // backtrack
        path.pop();
    }

    dfs(root, targetSum, []);

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna