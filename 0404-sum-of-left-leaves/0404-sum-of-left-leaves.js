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
var sumOfLeftLeaves = function(root) {
    if (root === null) return 0;

    let sum = 0;

    function dfs(node, isLeft) {
        if (node === null) return;

        // If it's a left child and has no children, it's a left leaf
        if (
            isLeft &&
            node.left === null &&
            node.right === null
        ) {
            sum += node.val;
            return;
        }

        dfs(node.left, true);
        dfs(node.right, false);
    }

    dfs(root, false);

    return sum;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna