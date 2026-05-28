/**
 * @param {string[]} wordsContainer
 * @param {string[]} wordsQuery
 * @return {number[]}
 */
var stringIndices = function(wordsContainer, wordsQuery) {

    class TrieNode {
        constructor() {
            this.children = {};
            this.bestIndex = -1;
        }
    }

    const root = new TrieNode();

    // returns true if idx1 is better than idx2
    const better = (idx1, idx2) => {
        if (idx2 === -1) return true;

        let len1 = wordsContainer[idx1].length;
        let len2 = wordsContainer[idx2].length;

        if (len1 !== len2) return len1 < len2;

        return idx1 < idx2;
    };

    // Insert reversed words into trie
    for (let i = 0; i < wordsContainer.length; i++) {
        let word = wordsContainer[i];
        let node = root;

        // update root best
        if (better(i, node.bestIndex)) {
            node.bestIndex = i;
        }

        for (let j = word.length - 1; j >= 0; j--) {
            let ch = word[j];

            if (!node.children[ch]) {
                node.children[ch] = new TrieNode();
            }

            node = node.children[ch];

            if (better(i, node.bestIndex)) {
                node.bestIndex = i;
            }
        }
    }

    let ans = [];

    // Query longest common suffix
    for (let q of wordsQuery) {
        let node = root;

        for (let j = q.length - 1; j >= 0; j--) {
            let ch = q[j];

            if (!node.children[ch]) break;

            node = node.children[ch];
        }

        ans.push(node.bestIndex);
    }

    return ans;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna