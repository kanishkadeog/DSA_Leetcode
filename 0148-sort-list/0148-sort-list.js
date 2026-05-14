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
var sortList = function(head) {
    // Base case
    if (!head || !head.next) {
        return head;
    }

    // Step 1: Split list into halves
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // Cut the list into two halves
    prev.next = null;

    // Step 2: Recursively sort both halves
    let left = sortList(head);
    let right = sortList(slow);

    // Step 3: Merge sorted halves
    return merge(left, right);
};

/**
 * Merge two sorted linked lists
 */
function merge(l1, l2) {
    let dummy = new ListNode(0);
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }

        tail = tail.next;
    }

    // Attach remaining nodes
    tail.next = l1 || l2;

    return dummy.next;
}

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna