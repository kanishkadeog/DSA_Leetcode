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
var deleteMiddle = function(head) {

    // If only one node exists
    if (head.next === null) {
        return null;
    }

    let slow = head;
    let fast = head;
    let prev = null;

    // Find middle node
    while (fast && fast.next) {

        prev = slow;

        slow = slow.next;

        fast = fast.next.next;
    }

    // Delete middle node
    prev.next = slow.next;

    return head;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna