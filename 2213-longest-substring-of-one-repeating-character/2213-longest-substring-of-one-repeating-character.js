/**
 * @param {string} s
 * @param {string} queryCharacters
 * @param {number[]} queryIndices
 * @return {number[]}
 */
var longestRepeating = function(s, queryCharacters, queryIndices) {
    const n = s.length;

    /*
     * Each node stores:
     *
     * leftChar  = first character
     * rightChar = last character
     * prefix    = longest repeating prefix
     * suffix    = longest repeating suffix
     * best      = longest repeating substring
     * len       = segment length
     */

    function makeNode(ch) {
        return {
            leftChar: ch,
            rightChar: ch,
            prefix: 1,
            suffix: 1,
            best: 1,
            len: 1
        };
    }

    /*
     * Merge two segment-tree nodes.
     */
    function merge(left, right) {
        if (left === null) return right;
        if (right === null) return left;

        const node = {
            leftChar: left.leftChar,
            rightChar: right.rightChar,
            prefix: left.prefix,
            suffix: right.suffix,
            best: Math.max(left.best, right.best),
            len: left.len + right.len
        };

        // If the boundary characters are equal,
        // the suffix of left and prefix of right can join.
        if (left.rightChar === right.leftChar) {

            // Longest substring crossing the boundary
            node.best = Math.max(
                node.best,
                left.suffix + right.prefix
            );

            /*
             * If the entire left segment has the same character,
             * its prefix can extend into the right prefix.
             */
            if (left.prefix === left.len) {
                node.prefix =
                    left.len + right.prefix;
            }

            /*
             * If the entire right segment has the same character,
             * its suffix can extend into the left suffix.
             */
            if (right.suffix === right.len) {
                node.suffix =
                    right.len + left.suffix;
            }
        }

        return node;
    }

    const tree = new Array(4 * n);

    /*
     * Build segment tree.
     */
    function build(node, start, end) {
        if (start === end) {
            tree[node] = makeNode(s[start]);
            return;
        }

        const mid = Math.floor((start + end) / 2);

        build(node * 2, start, mid);
        build(node * 2 + 1, mid + 1, end);

        tree[node] = merge(
            tree[node * 2],
            tree[node * 2 + 1]
        );
    }

    /*
     * Update one character.
     */
    function update(node, start, end, index, ch) {
        if (start === end) {
            tree[node] = makeNode(ch);
            return;
        }

        const mid = Math.floor((start + end) / 2);

        if (index <= mid) {
            update(
                node * 2,
                start,
                mid,
                index,
                ch
            );
        } else {
            update(
                node * 2 + 1,
                mid + 1,
                end,
                index,
                ch
            );
        }

        tree[node] = merge(
            tree[node * 2],
            tree[node * 2 + 1]
        );
    }

    // Build the initial tree
    build(1, 0, n - 1);

    const result = [];

    // Process every query
    for (let i = 0; i < queryCharacters.length; i++) {
        const index = queryIndices[i];
        const ch = queryCharacters[i];

        update(
            1,
            0,
            n - 1,
            index,
            ch
        );

        // Root represents the complete string
        result.push(tree[1].best);
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna