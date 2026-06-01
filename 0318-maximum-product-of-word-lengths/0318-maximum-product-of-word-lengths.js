/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    
    const n = words.length;
    const masks = new Array(n).fill(0);

    // Create bitmask for each word
    for (let i = 0; i < n; i++) {

        let mask = 0;

        for (let ch of words[i]) {
            mask |= (1 << (ch.charCodeAt(0) - 97));
        }

        masks[i] = mask;
    }

    let maxProd = 0;

    // Compare all pairs
    for (let i = 0; i < n; i++) {

        for (let j = i + 1; j < n; j++) {

            // No common letters
            if ((masks[i] & masks[j]) === 0) {

                maxProd = Math.max(
                    maxProd,
                    words[i].length * words[j].length
                );
            }
        }
    }

    return maxProd;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna