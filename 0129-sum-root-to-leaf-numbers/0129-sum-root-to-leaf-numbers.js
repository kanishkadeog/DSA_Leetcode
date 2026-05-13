/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {

    function dfs(node, current) {
        if (!node) return 0;

        // Build current number
        current = current * 10 + node.val;

        // Leaf node
        if (!node.left && !node.right) {
            return current;
        }

        return dfs(node.left, current) + dfs(node.right, current);
    }

    return dfs(root, 0);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna