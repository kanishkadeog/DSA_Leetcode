var reverseBetween = function(head, left, right) {
    if (!head || left === right) return head;

    let dummy = new ListNode(0);
    dummy.next = head;

    // Step 1: move prev to (left - 1)
    let prev = dummy;
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    // Step 2: reverse sublist
    let curr = prev.next;

    for (let i = 0; i < right - left; i++) {
        let next = curr.next;

        curr.next = next.next;
        next.next = prev.next;
        prev.next = next;
    }

    return dummy.next;
};