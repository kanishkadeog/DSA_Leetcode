var isNumber = function(s) {
    let numSeen = false;
    let dotSeen = false;
    let eSeen = false;
    let numAfterE = true;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch >= '0' && ch <= '9') {
            numSeen = true;
            numAfterE = true;
        }

        else if (ch === '+' || ch === '-') {
            // only valid at start OR right after e/E
            if (i > 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') {
                return false;
            }
        }

        else if (ch === '.') {
            // dot not allowed after e or twice
            if (dotSeen || eSeen) return false;
            dotSeen = true;
        }

        else if (ch === 'e' || ch === 'E') {
            // only one e, and must have number before
            if (eSeen || !numSeen) return false;
            eSeen = true;
            numAfterE = false; // must have digits after e
        }

        else {
            return false;
        }
    }

    return numSeen && numAfterE;
};