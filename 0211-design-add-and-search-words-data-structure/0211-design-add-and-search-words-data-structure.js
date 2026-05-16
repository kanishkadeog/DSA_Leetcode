var WordDictionary = function() {
    this.children = {};
    this.isEnd = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this;

    for (let char of word) {
        if (!node.children[char]) {
            node.children[char] = new WordDictionary();
        }

        node = node.children[char];
    }

    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {

    const dfs = (node, index) => {
        // Reached end of word
        if (index === word.length) {
            return node.isEnd;
        }

        let char = word[index];

        // Wildcard case
        if (char === '.') {
            for (let child in node.children) {
                if (dfs(node.children[child], index + 1)) {
                    return true;
                }
            }
            return false;
        }

        // Normal character case
        if (!node.children[char]) {
            return false;
        }

        return dfs(node.children[char], index + 1);
    };

    return dfs(this, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna