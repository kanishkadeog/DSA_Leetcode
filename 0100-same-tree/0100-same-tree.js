/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let queue = [[p, q]];

    while (queue.length) {
        let [n1, n2] = queue.shift();

        if (!n1 && !n2) continue;
        if (!n1 || !n2) return false;
        if (n1.val !== n2.val) return false;

        queue.push([n1.left, n2.left]);
        queue.push([n1.right, n2.right]);
    }

    return true;
};