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
var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prevGroup = dummy;

    while (true) {
        // Step 1: Find kth node
        let kth = prevGroup;
        for (let i = 0; i < k && kth; i++) {
            kth = kth.next;
        }
        if (!kth) break;   // Not enough nodes

        let groupNext = kth.next;

        // Step 2: Reverse group
        let prev = groupNext;
        let curr = prevGroup.next;

        while (curr !== groupNext) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        // Step 3: Reconnect
        let temp = prevGroup.next; // old head becomes tail
        prevGroup.next = kth;
        prevGroup = temp;
    }

    return dummy.next;
};