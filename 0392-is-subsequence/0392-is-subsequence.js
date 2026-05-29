/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let i = 0; // pointer for s
    let j = 0; // pointer for t

    while (i < s.length && j < t.length) {
        
        if (s[i] === t[j]) {
            i++;
        }

        j++;
    }

    return i === s.length;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna