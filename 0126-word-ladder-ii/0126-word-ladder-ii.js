/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);

    if (!wordSet.has(endWord)) return [];

    // Graph + distance tracking
    let parents = new Map();
    let level = new Set([beginWord]);

    while (level.size > 0 && !parents.has(endWord)) {
        // Remove visited words from future consideration
        for (let word of level) {
            wordSet.delete(word);
        }

        let nextLevel = new Set();

        for (let word of level) {
            let chars = word.split("");

            for (let i = 0; i < chars.length; i++) {
                let original = chars[i];

                for (let c = 97; c <= 122; c++) {
                    chars[i] = String.fromCharCode(c);

                    let newWord = chars.join("");

                    if (wordSet.has(newWord)) {
                        if (!parents.has(newWord)) {
                            parents.set(newWord, []);
                        }

                        parents.get(newWord).push(word);
                        nextLevel.add(newWord);
                    }
                }

                chars[i] = original;
            }
        }

        level = nextLevel;
    }

    let result = [];

    // Backtracking to build all paths
    function dfs(word, path) {
        if (word === beginWord) {
            result.push([beginWord, ...path.reverse()]);
            path.reverse();
            return;
        }

        for (let prev of parents.get(word) || []) {
            path.push(word);
            dfs(prev, path);
            path.pop();
        }
    }

    if (parents.has(endWord)) {
        dfs(endWord, []);
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna