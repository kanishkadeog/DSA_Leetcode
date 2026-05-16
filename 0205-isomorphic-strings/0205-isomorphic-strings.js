/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapST = new Map();
    let mapTS = new Map();

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        // Check s -> t mapping
        if (mapST.has(charS)) {
            if (mapST.get(charS) !== charT) {
                return false;
            }
        } else {
            mapST.set(charS, charT);
        }

        // Check t -> s mapping
        if (mapTS.has(charT)) {
            if (mapTS.get(charT) !== charS) {
                return false;
            }
        } else {
            mapTS.set(charT, charS);
        }
    }

    return true;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna