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

    let curr = root;

    while (curr) {
        let dummy = new _Node(0); // dummy head for next level
        let tail = dummy;

        // Traverse current level
        while (curr) {
            if (curr.left) {
                tail.next = curr.left;
                tail = tail.next;
            }

            if (curr.right) {
                tail.next = curr.right;
                tail = tail.next;
            }

            curr = curr.next;
        }

        // Move to next level
        curr = dummy.next;
    }

    return root;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna