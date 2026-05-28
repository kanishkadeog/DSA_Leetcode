/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *     this.isInteger = function() {};
 *     this.getInteger = function() {};
 *     this.setInteger = function(value) {};
 *     this.add = function(elem) {};
 *     this.getList = function() {};
 * };
 */

/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {

    // if s is just a number
    if (s[0] !== '[') {
        let ni = new NestedInteger();
        ni.setInteger(parseInt(s));
        return ni;
    }

    let stack = [];
    let num = "";
    let curr = null;

    for (let ch of s) {

        if (ch === '[') {

            let ni = new NestedInteger();

            if (curr !== null) {
                stack.push(curr);
                curr.add(ni);
            }

            curr = ni;

        } else if (ch === ']') {

            // add pending number
            if (num !== "") {
                let ni = new NestedInteger();
                ni.setInteger(parseInt(num));
                curr.add(ni);
                num = "";
            }

            // move back to parent
            if (stack.length > 0) {
                curr = stack.pop();
            }

        } else if (ch === ',') {

            // add pending number
            if (num !== "") {
                let ni = new NestedInteger();
                ni.setInteger(parseInt(num));
                curr.add(ni);
                num = "";
            }

        } else {

            // digit or '-'
            num += ch;
        }
    }

    return curr;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna