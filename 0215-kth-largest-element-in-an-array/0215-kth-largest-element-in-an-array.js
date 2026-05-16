/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {

    class MinHeap {
        constructor() {
            this.heap = [];
        }

        size() {
            return this.heap.length;
        }

        peek() {
            return this.heap[0];
        }

        push(val) {
            this.heap.push(val);
            this.bubbleUp();
        }

        pop() {
            if (this.size() === 1) {
                return this.heap.pop();
            }

            const top = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.bubbleDown();

            return top;
        }

        bubbleUp() {
            let index = this.size() - 1;

            while (index > 0) {
                let parent = Math.floor((index - 1) / 2);

                if (this.heap[parent] <= this.heap[index]) {
                    break;
                }

                [this.heap[parent], this.heap[index]] =
                    [this.heap[index], this.heap[parent]];

                index = parent;
            }
        }

        bubbleDown() {
            let index = 0;
            let length = this.size();

            while (true) {
                let left = index * 2 + 1;
                let right = index * 2 + 2;
                let smallest = index;

                if (
                    left < length &&
                    this.heap[left] < this.heap[smallest]
                ) {
                    smallest = left;
                }

                if (
                    right < length &&
                    this.heap[right] < this.heap[smallest]
                ) {
                    smallest = right;
                }

                if (smallest === index) {
                    break;
                }

                [this.heap[index], this.heap[smallest]] =
                    [this.heap[smallest], this.heap[index]];

                index = smallest;
            }
        }
    }

    const heap = new MinHeap();

    for (let num of nums) {
        heap.push(num);

        // Keep only k largest elements
        if (heap.size() > k) {
            heap.pop();
        }
    }

    return heap.peek();
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna