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
 * @return {number}
 */
var minDepth = function(root) {

    if (!root) return 0;

    // leaf node
    if (!root.left && !root.right) {
        return 1;
    }

    // only right subtree exists
    if (!root.left) {
        return 1 + minDepth(root.right);
    }

    // only left subtree exists
    if (!root.right) {
        return 1 + minDepth(root.left);
    }

    // both children exist
    return 1 + Math.min(
        minDepth(root.left),
        minDepth(root.right)
    );
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna