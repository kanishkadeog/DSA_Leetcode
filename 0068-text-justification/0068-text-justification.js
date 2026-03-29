var fullJustify = function(words, maxWidth) {
    let res = [];
    let i = 0;

    while (i < words.length) {
        let j = i;
        let lineLen = 0;

        // Step 1: pack words
        while (j < words.length && lineLen + words[j].length + (j - i) <= maxWidth) {
            lineLen += words[j].length;
            j++;
        }

        let numWords = j - i;
        let line = "";

        // Step 2: build line
        // Case: last line OR single word
        if (j === words.length || numWords === 1) {
            for (let k = i; k < j; k++) {
                line += words[k];
                if (k < j - 1) line += " ";
            }

            // pad remaining spaces
            line += " ".repeat(maxWidth - line.length);
        } else {
            // fully justified
            let totalSpaces = maxWidth - lineLen;
            let gaps = numWords - 1;

            let spacesPerGap = Math.floor(totalSpaces / gaps);
            let extraSpaces = totalSpaces % gaps;

            for (let k = i; k < j; k++) {
                line += words[k];

                if (k < j - 1) {
                    let spaces = spacesPerGap + (extraSpaces > 0 ? 1 : 0);
                    line += " ".repeat(spaces);
                    if (extraSpaces > 0) extraSpaces--;
                }
            }
        }

        res.push(line);
        i = j;
    }

    return res;
};