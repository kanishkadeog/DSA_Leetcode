/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 */
var Solution = function(head) {
    this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {

    let curr = this.head;

    let result = curr.val;
    let count = 1;

    while (curr !== null) {

        // choose current node with probability 1/count
        if (Math.floor(Math.random() * count) === 0) {
            result = curr.val;
        }

        curr = curr.next;
        count++;
    }

    return result;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna