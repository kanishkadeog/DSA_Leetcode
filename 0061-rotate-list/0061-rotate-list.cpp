class Solution {
public:
    ListNode* rotateRight(ListNode* head, int k) {
        if (!head || !head->next || k == 0) return head;

        // Step 1: find length
        int n = 1;
        ListNode* tail = head;
        while (tail->next) {
            tail = tail->next;
            n++;
        }

        // Step 2: optimize k
        k = k % n;
        if (k == 0) return head;

        // Step 3: make circular
        tail->next = head;

        // Step 4: find new tail (n - k - 1 steps)
        ListNode* newTail = head;
        for (int i = 0; i < n - k - 1; i++) {
            newTail = newTail->next;
        }

        // Step 5: break the cycle
        ListNode* newHead = newTail->next;
        newTail->next = nullptr;

        return newHead;
    }
};