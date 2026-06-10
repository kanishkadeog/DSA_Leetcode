/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(nums, k) {

    const n = nums.length;

    // -------------------------------
    // Sparse Tables for Range Max/Min
    // -------------------------------

    const LOG = Math.floor(Math.log2(n)) + 1;

    let stMax = Array.from({ length: LOG }, () => Array(n).fill(0));
    let stMin = Array.from({ length: LOG }, () => Array(n).fill(0));

    // Base level
    for (let i = 0; i < n; i++) {
        stMax[0][i] = nums[i];
        stMin[0][i] = nums[i];
    }

    // Build sparse table
    for (let j = 1; j < LOG; j++) {

        for (let i = 0; i + (1 << j) <= n; i++) {

            stMax[j][i] = Math.max(
                stMax[j - 1][i],
                stMax[j - 1][i + (1 << (j - 1))]
            );

            stMin[j][i] = Math.min(
                stMin[j - 1][i],
                stMin[j - 1][i + (1 << (j - 1))]
            );
        }
    }

    // -------------------------------
    // Range Query Function
    // -------------------------------

    function getValue(l, r) {

        let len = r - l + 1;
        let j = Math.floor(Math.log2(len));

        let mx = Math.max(
            stMax[j][l],
            stMax[j][r - (1 << j) + 1]
        );

        let mn = Math.min(
            stMin[j][l],
            stMin[j][r - (1 << j) + 1]
        );

        return mx - mn;
    }

    // -------------------------------
    // Max Heap Implementation
    // -------------------------------

    class MaxHeap {

        constructor() {
            this.heap = [];
        }

        push(item) {
            this.heap.push(item);
            this.bubbleUp(this.heap.length - 1);
        }

        bubbleUp(idx) {

            while (idx > 0) {

                let parent = Math.floor((idx - 1) / 2);

                if (this.heap[parent][0] >= this.heap[idx][0]) break;

                [this.heap[parent], this.heap[idx]] =
                    [this.heap[idx], this.heap[parent]];

                idx = parent;
            }
        }

        pop() {

            if (this.heap.length === 1) return this.heap.pop();

            let top = this.heap[0];

            this.heap[0] = this.heap.pop();

            this.bubbleDown(0);

            return top;
        }

        bubbleDown(idx) {

            let n = this.heap.length;

            while (true) {

                let largest = idx;

                let left = 2 * idx + 1;
                let right = 2 * idx + 2;

                if (left < n &&
                    this.heap[left][0] > this.heap[largest][0]) {
                    largest = left;
                }

                if (right < n &&
                    this.heap[right][0] > this.heap[largest][0]) {
                    largest = right;
                }

                if (largest === idx) break;

                [this.heap[idx], this.heap[largest]] =
                    [this.heap[largest], this.heap[idx]];

                idx = largest;
            }
        }

        size() {
            return this.heap.length;
        }
    }

    // -------------------------------
    // Initialize Heap
    // -------------------------------

    let heap = new MaxHeap();

    for (let l = 0; l < n; l++) {

        let r = n - 1;

        let val = getValue(l, r);

        heap.push([val, l, r]);
    }

    // -------------------------------
    // Take top k distinct subarrays
    // -------------------------------

    let ans = 0;

    while (k-- > 0) {

        let [val, l, r] = heap.pop();

        ans += val;

        // Push next candidate
        if (r > l) {

            let newVal = getValue(l, r - 1);

            heap.push([newVal, l, r - 1]);
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna