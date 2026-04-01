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
var deleteDuplicates = function(head) {
    let dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;

    while (curr) {
        // detect duplicates
        if (curr.next && curr.val === curr.next.val) {
            let val = curr.val;

            // skip all nodes with this value
            while (curr && curr.val === val) {
                curr = curr.next;
            }

            // remove duplicates block
            prev.next = curr;
        } else {
            // move prev if no duplicate
            prev = curr;
            curr = curr.next;
        }
    }

    return dummy.next;
};