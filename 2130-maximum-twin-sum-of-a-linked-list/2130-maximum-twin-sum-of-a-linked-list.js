/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {

    // -------------------------
    // Find middle of linked list
    // -------------------------

    let slow = head;
    let fast = head;

    while (fast && fast.next) {

        slow = slow.next;
        fast = fast.next.next;
    }

    // -------------------------
    // Reverse second half
    // -------------------------

    let prev = null;
    let curr = slow;

    while (curr) {

        let nextNode = curr.next;

        curr.next = prev;

        prev = curr;
        curr = nextNode;
    }

    // prev = head of reversed second half

    // -------------------------
    // Find maximum twin sum
    // -------------------------

    let first = head;
    let second = prev;

    let maxSum = 0;

    while (second) {

        maxSum = Math.max(
            maxSum,
            first.val + second.val
        );

        first = first.next;
        second = second.next;
    }

    return maxSum;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna