/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (left===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function dfs(node) {
        if (!node) return 0;

        // Ignore negative paths
        let left = Math.max(0, dfs(node.left));
        let right = Math.max(0, dfs(node.right));

        // Path passing through current node
        let currentPath = node.val + left + right;

        // Update global maximum
        maxSum = Math.max(maxSum, currentPath);

        // Return max gain to parent
        return node.val + Math.max(left, right);
    }

    dfs(root);

    return maxSum;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna