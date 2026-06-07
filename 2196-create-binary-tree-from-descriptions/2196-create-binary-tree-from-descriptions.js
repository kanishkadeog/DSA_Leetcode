/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {

    // Store all created nodes
    let map = new Map();

    // Store all child nodes
    let children = new Set();

    for (let [parent, child, isLeft] of descriptions) {

        // Create parent node if not exists
        if (!map.has(parent)) {
            map.set(parent, new TreeNode(parent));
        }

        // Create child node if not exists
        if (!map.has(child)) {
            map.set(child, new TreeNode(child));
        }

        let parentNode = map.get(parent);
        let childNode = map.get(child);

        // Attach child
        if (isLeft === 1) {
            parentNode.left = childNode;
        } else {
            parentNode.right = childNode;
        }

        // Mark child
        children.add(child);
    }

    // Root = node which is never a child
    for (let [parent] of descriptions) {
        if (!children.has(parent)) {
            return map.get(parent);
        }
    }
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna