/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    // Dummy node for sorted list
    let dummy = new ListNode(0);
    let current = head;

    while (current) {
        // At each iteration, insert current into sorted part
        let prev = dummy;

        // Find correct position
        while (prev.next && prev.next.val < current.val) {
            prev = prev.next;
        }

        // Save next node
        let nextNode = current.next;

        // Insert current between prev and prev.next
        current.next = prev.next;
        prev.next = current;

        // Move to next node
        current = nextNode;
    }

    return dummy.next;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna