/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {

    // Build Trie
    const trie = {};

    for (let word of words) {
        let node = trie;

        for (let char of word) {
            if (!node[char]) {
                node[char] = {};
            }
            node = node[char];
        }

        node.word = word; // mark complete word
    }

    const rows = board.length;
    const cols = board[0].length;
    const result = [];

    function dfs(r, c, node) {

        // Boundary check
        if (
            r < 0 || c < 0 ||
            r >= rows || c >= cols
        ) {
            return;
        }

        let char = board[r][c];

        // Visited or not in trie
        if (char === '#' || !node[char]) {
            return;
        }

        node = node[char];

        // Found a word
        if (node.word) {
            result.push(node.word);
            node.word = null; // avoid duplicates
        }

        // Mark visited
        board[r][c] = '#';

        // Explore 4 directions
        dfs(r + 1, c, node);
        dfs(r - 1, c, node);
        dfs(r, c + 1, node);
        dfs(r, c - 1, node);

        // Restore character
        board[r][c] = char;
    }

    // Start DFS from each cell
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, trie);
        }
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna