/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let prev = head;
    let curr = head.next;

    let index = 1;

    let firstCritical = -1;
    let lastCritical = -1;

    let minDistance = Infinity;

    while (curr !== null && curr.next !== null) {
        const next = curr.next;

        // Check whether curr is a local maximum or minimum
        const isCritical =
            (curr.val > prev.val && curr.val > next.val) ||
            (curr.val < prev.val && curr.val < next.val);

        if (isCritical) {
            if (firstCritical === -1) {
                // First critical point
                firstCritical = index;
            } else {
                // Distance from previous critical point
                minDistance = Math.min(
                    minDistance,
                    index - lastCritical
                );
            }

            // Update latest critical point
            lastCritical = index;
        }

        prev = curr;
        curr = next;
        index++;
    }

    // Fewer than two critical points
    if (firstCritical === -1 || firstCritical === lastCritical) {
        return [-1, -1];
    }

    const maxDistance = lastCritical - firstCritical;

    return [minDistance, maxDistance];
};



// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna