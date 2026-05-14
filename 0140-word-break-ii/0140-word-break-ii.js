/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const memo = new Map();

    function dfs(start) {
        // If already computed
        if (memo.has(start)) {
            return memo.get(start);
        }

        // Reached end of string
        if (start === s.length) {
            return [""];
        }

        const result = [];

        for (let end = start + 1; end <= s.length; end++) {
            const word = s.substring(start, end);

            if (wordSet.has(word)) {
                const subSentences = dfs(end);

                for (const sentence of subSentences) {
                    result.push(
                        sentence === ""
                            ? word
                            : word + " " + sentence
                    );
                }
            }
        }

        memo.set(start, result);
        return result;
    }

    return dfs(0);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna