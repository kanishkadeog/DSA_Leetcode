/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next || k === 0) return head;

    // Step 1: find length and tail
    let length = 1;
    let tail = head;

    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Step 2: reduce k
    k = k % length;
    if (k === 0) return head;

    // Step 3: make circular
    tail.next = head;

    // Step 4: find new tail (length - k - 1 steps)
    let stepsToNewTail = length - k - 1;
    let newTail = head;

    for (let i = 0; i < stepsToNewTail; i++) {
        newTail = newTail.next;
    }

    // Step 5: break the cycle
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};