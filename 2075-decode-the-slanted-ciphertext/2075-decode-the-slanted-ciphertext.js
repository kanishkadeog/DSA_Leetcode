/**
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function(encodedText, rows) {
    if (rows === 1) return encodedText;

    let n = encodedText.length;
    let cols = n / rows;

    // Step 1: build matrix
    let matrix = Array.from({ length: rows }, () => Array(cols));

    let idx = 0;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = encodedText[idx++];
        }
    }

    // Step 2: read diagonals
    let res = "";

    for (let start = 0; start < cols; start++) {
        let i = 0, j = start;

        while (i < rows && j < cols) {
            res += matrix[i][j];
            i++;
            j++;
        }
    }

    // Step 3: remove trailing spaces
    return res.trimEnd();
};