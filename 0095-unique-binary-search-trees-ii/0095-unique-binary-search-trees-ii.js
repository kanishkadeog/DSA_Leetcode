/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) return [];

    const build = (start, end) => {
        const res = [];

        // base case
        if (start > end) {
            res.push(null);
            return res;
        }

        // try each number as root
        for (let i = start; i <= end; i++) {
            let leftTrees = build(start, i - 1);
            let rightTrees = build(i + 1, end);

            // combine
            for (let left of leftTrees) {
                for (let right of rightTrees) {
                    let root = new TreeNode(i);
                    root.left = left;
                    root.right = right;
                    res.push(root);
                }
            }
        }

        return res;
    };

    return build(1, n);
};