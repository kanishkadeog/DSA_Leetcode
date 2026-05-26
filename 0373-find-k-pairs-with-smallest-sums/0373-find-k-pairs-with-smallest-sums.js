/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {

    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(val) {
            this.heap.push(val);
            this.bubbleUp();
        }

        bubbleUp() {
            let i = this.heap.length - 1;

            while (i > 0) {

                let p = Math.floor((i - 1) / 2);

                if (this.heap[p][0] <= this.heap[i][0]) {
                    break;
                }

                [this.heap[p], this.heap[i]] =
                    [this.heap[i], this.heap[p]];

                i = p;
            }
        }

        pop() {

            if (this.heap.length === 1) {
                return this.heap.pop();
            }

            const top = this.heap[0];

            this.heap[0] = this.heap.pop();

            this.bubbleDown();

            return top;
        }

        bubbleDown() {

            let i = 0;
            const n = this.heap.length;

            while (true) {

                let smallest = i;

                let left = 2*i + 1;
                let right = 2*i + 2;

                if (
                    left < n &&
                    this.heap[left][0] <
                    this.heap[smallest][0]
                ) {
                    smallest = left;
                }

                if (
                    right < n &&
                    this.heap[right][0] <
                    this.heap[smallest][0]
                ) {
                    smallest = right;
                }

                if (smallest === i) break;

                [this.heap[i], this.heap[smallest]] =
                    [this.heap[smallest], this.heap[i]];

                i = smallest;
            }
        }

        size() {
            return this.heap.length;
        }
    }

    const heap = new MinHeap();
    const result = [];

    // initialize first column
    for (
        let i = 0;
        i < Math.min(nums1.length, k);
        i++
    ) {

        heap.push([
            nums1[i] + nums2[0],
            i,
            0
        ]);
    }

    while (
        k > 0 &&
        heap.size() > 0
    ) {

        const [sum, i, j] = heap.pop();

        result.push([
            nums1[i],
            nums2[j]
        ]);

        if (j + 1 < nums2.length) {

            heap.push([
                nums1[i] + nums2[j+1],
                i,
                j+1
            ]);
        }

        k--;
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna