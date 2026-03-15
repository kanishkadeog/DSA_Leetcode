/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if (!s || !words || words.length === 0) return [];

    const wordLen = words[0].length;
    const numWords = words.length;
    const totalLen = wordLen * numWords;
    const result = [];

    // Count frequency of words
    const wordCount = {};
    for (let word of words) {
        wordCount[word] = (wordCount[word] || 0) + 1;
    }

    // Slide over wordLen starting points
    for (let i = 0; i < wordLen; i++) {
        let left = i, right = i;
        let currCount = {};
        let count = 0;

        while (right + wordLen <= s.length) {
            const word = s.substring(right, right + wordLen);
            right += wordLen;

            if (wordCount[word] !== undefined) {
                currCount[word] = (currCount[word] || 0) + 1;
                count++;

                // If word occurs more than needed, move left pointer
                while (currCount[word] > wordCount[word]) {
                    const leftWord = s.substring(left, left + wordLen);
                    currCount[leftWord]--;
                    left += wordLen;
                    count--;
                }

                // If we matched all words
                if (count === numWords) {
                    result.push(left);
                }

            } else {
                // Word not in words, reset window
                currCount = {};
                count = 0;
                left = right;
            }
        }
    }

    return result;
};
