/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {

    if (!root) return null;

    let leftMost = root;

    // since perfect tree, check left child
    while (leftMost.left) {

        let curr = leftMost;

        while (curr) {

            // connect left -> right
            curr.left.next = curr.right;

            // connect right -> next subtree
            if (curr.next) {
                curr.right.next = curr.next.left;
            }

            curr = curr.next;
        }

        // move to next level
        leftMost = leftMost.left;
    }

    return root;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna