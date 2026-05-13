/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);

    if (!wordSet.has(endWord)) return 0;

    let queue = [[beginWord, 1]];

    while (queue.length > 0) {
        let [word, steps] = queue.shift();

        if (word === endWord) {
            return steps;
        }

        let chars = word.split("");

        for (let i = 0; i < chars.length; i++) {
            let original = chars[i];

            for (let c = 97; c <= 122; c++) {
                chars[i] = String.fromCharCode(c);

                let newWord = chars.join("");

                if (wordSet.has(newWord)) {
                    queue.push([newWord, steps + 1]);
                    wordSet.delete(newWord); // mark visited
                }
            }

            chars[i] = original;
        }
    }

    return 0;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna