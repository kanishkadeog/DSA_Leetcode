/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
var resultArray = function(nums, k, queries) {
    const n = nums.length;

    // Each node:
    // [total product modulo k, prefix counts]
    const tree = new Array(4 * n);

    function makeNode(value) {
        const cnt = new Array(k).fill(0);
        cnt[value % k] = 1;

        return [value % k, cnt];
    }

    function merge(left, right) {
        if (left === null) return right;
        if (right === null) return left;

        const leftProd = left[0];
        const rightProd = right[0];

        const cnt = new Array(k).fill(0);

        // Prefixes that end inside the left segment
        for (let r = 0; r < k; r++) {
            cnt[r] += left[1][r];
        }

        // Prefixes that enter the right segment
        for (let r = 0; r < k; r++) {
            const newRemainder = (leftProd * r) % k;
            cnt[newRemainder] += right[1][r];
        }

        return [
            (leftProd * rightProd) % k,
            cnt
        ];
    }

    function build(node, l, r) {
        if (l === r) {
            tree[node] = makeNode(nums[l]);
            return;
        }

        const mid = Math.floor((l + r) / 2);

        build(node * 2, l, mid);
        build(node * 2 + 1, mid + 1, r);

        tree[node] = merge(
            tree[node * 2],
            tree[node * 2 + 1]
        );
    }

    function update(node, l, r, index, value) {
        if (l === r) {
            tree[node] = makeNode(value);
            return;
        }

        const mid = Math.floor((l + r) / 2);

        if (index <= mid) {
            update(node * 2, l, mid, index, value);
        } else {
            update(node * 2 + 1, mid + 1, r, index, value);
        }

        tree[node] = merge(
            tree[node * 2],
            tree[node * 2 + 1]
        );
    }

    function query(node, l, r, ql, qr) {
        if (ql <= l && r <= qr) {
            return tree[node];
        }

        const mid = Math.floor((l + r) / 2);

        if (qr <= mid) {
            return query(node * 2, l, mid, ql, qr);
        }

        if (ql > mid) {
            return query(node * 2 + 1, mid + 1, r, ql, qr);
        }

        const left = query(node * 2, l, mid, ql, qr);
        const right = query(node * 2 + 1, mid + 1, r, ql, qr);

        return merge(left, right);
    }

    build(1, 0, n - 1);

    const answer = [];

    for (const [index, value, start, x] of queries) {
        // Update persists for future queries
        update(1, 0, n - 1, index, value);

        // Get all prefix-product counts in nums[start..n-1]
        const node = query(1, 0, n - 1, start, n - 1);

        answer.push(node[1][x]);
    }

    return answer;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna