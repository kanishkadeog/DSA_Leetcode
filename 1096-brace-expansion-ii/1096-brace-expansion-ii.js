/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
    let i = 0;

    // Parse an expression containing unions
    function parseExpression() {
        let result = parseConcat();

        while (i < expression.length && expression[i] === ',') {
            i++; // skip ','

            let next = parseConcat();

            result = union(result, next);
        }

        return result;
    }

    // Parse consecutive expressions (concatenation)
    function parseConcat() {
        let result = new Set([""]);

        while (
            i < expression.length &&
            expression[i] !== '}' &&
            expression[i] !== ','
        ) {
            let part = parseFactor();

            result = concat(result, part);
        }

        return result;
    }

    // Parse one factor: either a letter or {...}
    function parseFactor() {
        if (expression[i] === '{') {
            i++; // skip '{'

            let result = parseExpression();

            i++; // skip '}'

            return result;
        }

        // Single lowercase letter
        let ch = expression[i];
        i++;

        return new Set([ch]);
    }

    // Union of two sets
    function union(a, b) {
        let result = new Set(a);

        for (let word of b) {
            result.add(word);
        }

        return result;
    }

    // Cartesian product / concatenation
    function concat(a, b) {
        let result = new Set();

        for (let x of a) {
            for (let y of b) {
                result.add(x + y);
            }
        }

        return result;
    }

    return [...parseExpression()].sort();
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna