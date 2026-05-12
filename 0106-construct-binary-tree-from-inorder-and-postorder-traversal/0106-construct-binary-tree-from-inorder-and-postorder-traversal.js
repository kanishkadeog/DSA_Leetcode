/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

    let map = new Map();

    // value -> inorder index
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    let postIndex = postorder.length - 1;

    function helper(left, right) {

        if (left > right) return null;

        // root is last in postorder
        let rootVal = postorder[postIndex--];

        let root = new TreeNode(rootVal);

        let mid = map.get(rootVal);

        // IMPORTANT:
        // build right first
        root.right = helper(mid + 1, right);
        root.left = helper(left, mid - 1);

        return root;
    }

    return helper(0, inorder.length - 1);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna