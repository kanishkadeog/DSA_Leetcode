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
 * @return {void}
 */
var flatten = function(root) {

    if (!root) return;

    // flatten left and right subtrees
    flatten(root.left);
    flatten(root.right);

    // store original right subtree
    let tempRight = root.right;

    // move left subtree to right
    root.right = root.left;
    root.left = null;

    // find end of new right subtree
    let curr = root;

    while (curr.right) {
        curr = curr.right;
    }

    // attach original right subtree
    curr.right = tempRight;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna