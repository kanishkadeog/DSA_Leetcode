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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let first = null;
    let second = null;
    let prev = null;

    function inorder(node) {
        if (!node) return;

        inorder(node.left);

        if (prev && prev.val > node.val) {
            // First violation
            if (!first) {
                first = prev;
            }
            // Always update second
            second = node;
        }

        prev = node;

        inorder(node.right);
    }

    inorder(root);

    // Swap values
    let temp = first.val;
    first.val = second.val;
    second.val = temp;
};