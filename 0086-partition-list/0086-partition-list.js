/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let beforeHead = new ListNode(0);
    let afterHead = new ListNode(0);

    let before = beforeHead;
    let after = afterHead;

    let curr = head;

    while (curr) {
        if (curr.val < x) {
            before.next = curr;
            before = before.next;
        } else {
            after.next = curr;
            after = after.next;
        }
        curr = curr.next;
    }

    // important: end the after list
    after.next = null;

    // connect two lists
    before.next = afterHead.next;

    return beforeHead.next;
};