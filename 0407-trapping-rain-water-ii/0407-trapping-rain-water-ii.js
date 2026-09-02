/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function(heightMap) {
    const m = heightMap.length;
    const n = heightMap[0].length;

    if (m <= 2 || n <= 2) return 0;

    // Min-heap: [height, row, col]
    const heap = [];

    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(item) {
            this.heap.push(item);

            let i = this.heap.length - 1;

            while (i > 0) {
                const parent = Math.floor((i - 1) / 2);

                if (this.heap[parent][0] <= this.heap[i][0]) {
                    break;
                }

                [this.heap[parent], this.heap[i]] =
                    [this.heap[i], this.heap[parent]];

                i = parent;
            }
        }

        pop() {
            const root = this.heap[0];
            const last = this.heap.pop();

            if (this.heap.length > 0) {
                this.heap[0] = last;

                let i = 0;

                while (true) {
                    let smallest = i;
                    const left = 2 * i + 1;
                    const right = 2 * i + 2;

                    if (
                        left < this.heap.length &&
                        this.heap[left][0] < this.heap[smallest][0]
                    ) {
                        smallest = left;
                    }

                    if (
                        right < this.heap.length &&
                        this.heap[right][0] < this.heap[smallest][0]
                    ) {
                        smallest = right;
                    }

                    if (smallest === i) break;

                    [this.heap[i], this.heap[smallest]] =
                        [this.heap[smallest], this.heap[i]];

                    i = smallest;
                }
            }

            return root;
        }

        isEmpty() {
            return this.heap.length === 0;
        }
    }

    const minHeap = new MinHeap();

    // Visited cells
    const visited = Array.from(
        { length: m },
        () => Array(n).fill(false)
    );

    // Add all boundary cells
    for (let i = 0; i < m; i++) {
        minHeap.push([heightMap[i][0], i, 0]);
        visited[i][0] = true;

        if (n > 1) {
            minHeap.push([heightMap[i][n - 1], i, n - 1]);
            visited[i][n - 1] = true;
        }
    }

    for (let j = 1; j < n - 1; j++) {
        minHeap.push([heightMap[0][j], 0, j]);
        visited[0][j] = true;

        minHeap.push([heightMap[m - 1][j], m - 1, j]);
        visited[m - 1][j] = true;
    }

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    let water = 0;

    while (!minHeap.isEmpty()) {
        const [height, row, col] = minHeap.pop();

        for (const [dr, dc] of directions) {
            const nr = row + dr;
            const nc = col + dc;

            if (
                nr < 0 ||
                nr >= m ||
                nc < 0 ||
                nc >= n ||
                visited[nr][nc]
            ) {
                continue;
            }

            visited[nr][nc] = true;

            const nextHeight = heightMap[nr][nc];

            // Water can be trapped if neighbor is lower
            if (nextHeight < height) {
                water += height - nextHeight;
            }

            // The new boundary height is the maximum of both
            minHeap.push([
                Math.max(height, nextHeight),
                nr,
                nc
            ]);
        }
    }

    return water;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna