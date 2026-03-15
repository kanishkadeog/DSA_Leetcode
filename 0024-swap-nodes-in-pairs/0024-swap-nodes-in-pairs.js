/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;

    while (prev.next && prev.next.next) {
        let first = prev.next;
        let second = first.next;

        // Swapping
        prev.next = second;
        first.next = second.next;
        second.next = first;

        // Move prev to next pair
        prev = first;
    }

    return dummy.next;
};
