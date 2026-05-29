/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    
    let remainingBytes = 0;

    for (let num of data) {

        // Keep only last 8 bits
        num = num & 255;

        if (remainingBytes === 0) {

            // Count leading 1s
            if ((num >> 7) === 0) {
                // 1-byte character
                continue;
            } else if ((num >> 5) === 0b110) {
                remainingBytes = 1;
            } else if ((num >> 4) === 0b1110) {
                remainingBytes = 2;
            } else if ((num >> 3) === 0b11110) {
                remainingBytes = 3;
            } else {
                return false;
            }

        } else {

            // Continuation byte must start with 10
            if ((num >> 6) !== 0b10) {
                return false;
            }

            remainingBytes--;
        }
    }

    return remainingBytes === 0;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna