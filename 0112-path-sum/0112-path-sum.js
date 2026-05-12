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
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

    // empty tree
    if (!root) return false;

    // leaf node
    if (!root.left && !root.right) {
        return targetSum === root.val;
    }

    // check left or right subtree
    return (
        hasPathSum(root.left, targetSum - root.val) ||
        hasPathSum(root.right, targetSum - root.val)
    );
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna