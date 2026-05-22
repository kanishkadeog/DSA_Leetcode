class MyHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    push(val) {
        this.heap.push(val);
        this.up();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.down();

        return top;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    up() {
        let i = this.heap.length - 1;

        while (i > 0) {
            let p = Math.floor((i - 1) / 2);

            if (this.compare(this.heap[i], this.heap[p])) {
                [this.heap[i], this.heap[p]] =
                [this.heap[p], this.heap[i]];
                i = p;
            } else break;
        }
    }

    down() {
        let i = 0;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let best = i;

            if (
                left < this.heap.length &&
                this.compare(this.heap[left], this.heap[best])
            ) {
                best = left;
            }

            if (
                right < this.heap.length &&
                this.compare(this.heap[right], this.heap[best])
            ) {
                best = right;
            }

            if (best === i) break;

            [this.heap[i], this.heap[best]] =
            [this.heap[best], this.heap[i]];

            i = best;
        }
    }
}

/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {

    meetings.sort((a, b) => a[0] - b[0]);

    const available = new MyHeap((a, b) => a < b);

    const busy = new MyHeap((a, b) => {
        if (a[0] === b[0]) {
            return a[1] < b[1];
        }
        return a[0] < b[0];
    });

    for (let i = 0; i < n; i++) {
        available.push(i);
    }

    let count = new Array(n).fill(0);

    for (let [start, end] of meetings) {

        while (
            busy.size() &&
            busy.peek()[0] <= start
        ) {
            let [_, room] = busy.pop();
            available.push(room);
        }

        let duration = end - start;

        if (available.size()) {

            let room = available.pop();

            busy.push([end, room]);
            count[room]++;

        } else {

            let [freeTime, room] = busy.pop();

            busy.push([freeTime + duration, room]);
            count[room]++;
        }
    }

    let ans = 0;

    for (let i = 1; i < n; i++) {
        if (count[i] > count[ans]) {
            ans = i;
        }
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna