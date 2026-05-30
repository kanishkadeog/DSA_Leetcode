/**
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var getResults = function(queries) {

    const MAX = 50005;

    // ----- Segment Tree -----
    class SegTree {
        constructor(n) {
            this.n = n;
            this.tree = new Array(4 * n).fill(0);
        }

        update(node, l, r, idx, val) {
            if (l === r) {
                this.tree[node] = val;
                return;
            }

            let mid = (l + r) >> 1;

            if (idx <= mid) {
                this.update(node*2, l, mid, idx, val);
            } else {
                this.update(node*2+1, mid+1, r, idx, val);
            }

            this.tree[node] =
                Math.max(this.tree[node*2], this.tree[node*2+1]);
        }

        query(node, l, r, ql, qr) {

            if (ql > r || qr < l) return 0;

            if (ql <= l && r <= qr) {
                return this.tree[node];
            }

            let mid = (l + r) >> 1;

            return Math.max(
                this.query(node*2, l, mid, ql, qr),
                this.query(node*2+1, mid+1, r, ql, qr)
            );
        }
    }

    function lowerBound(arr, target) {
        let l = 0, r = arr.length;

        while (l < r) {
            let mid = (l + r) >> 1;

            if (arr[mid] < target) l = mid + 1;
            else r = mid;
        }

        return l;
    }

    const seg = new SegTree(MAX);

    // sorted obstacles
    const obs = [0];

    // initialize infinite interval
    seg.update(1,0,MAX,0,MAX);

    const res = [];

    for (let q of queries) {

        // Add obstacle
        if (q[0] === 1) {

            let x = q[1];

            let pos = lowerBound(obs, x);

            let left = obs[pos-1];
            let right = (pos < obs.length) ? obs[pos] : MAX;

            obs.splice(pos,0,x);

            // split interval
            seg.update(1,0,MAX,left,x-left);
            seg.update(1,0,MAX,x,right-x);
        }

        // Query
        else {

            let [_, x, sz] = q;

            let pos = lowerBound(obs, x+1);

            let prev = obs[pos-1];

            let best = 0;

            if (x-sz >= 0) {
                best = seg.query(
                    1,
                    0,
                    MAX,
                    0,
                    x-sz
                );
            }

            // tail interval clipped to x
            best = Math.max(best, x-prev);

            res.push(best >= sz);
        }
    }

    return res;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna