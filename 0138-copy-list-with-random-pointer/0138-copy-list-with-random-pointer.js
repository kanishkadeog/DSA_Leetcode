/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;

    let curr = head;

    // Step 1: Create copied nodes in-between original nodes
    while (curr) {
        let copy = new _Node(curr.val);

        copy.next = curr.next;
        curr.next = copy;

        curr = copy.next;
    }

    curr = head;

    // Step 2: Assign random pointers
    while (curr) {
        if (curr.random) {
            curr.next.random = curr.random.next;
        }

        curr = curr.next.next;
    }

    curr = head;

    // Step 3: Separate original and copied lists
    let dummy = new _Node(0);
    let copyCurr = dummy;

    while (curr) {
        let copy = curr.next;

        curr.next = copy.next;

        copyCurr.next = copy;
        copyCurr = copy;

        curr = curr.next;
    }

    return dummy.next;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna