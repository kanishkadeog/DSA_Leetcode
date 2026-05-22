/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function(bottom, allowed) {

    let map = new Map();

    for (let rule of allowed) {

        let pair = rule.slice(0, 2);
        let top = rule[2];

        if (!map.has(pair)) {
            map.set(pair, []);
        }

        map.get(pair).push(top);
    }

    function dfs(row) {

        if (row.length === 1) {
            return true;
        }

        return buildNext(row, 0, "");
    }

    function buildNext(row, index, nextRow) {

        if (index === row.length - 1) {
            return dfs(nextRow);
        }

        let pair = row[index] + row[index + 1];

        if (!map.has(pair)) {
            return false;
        }

        for (let ch of map.get(pair)) {

            if (
                buildNext(
                    row,
                    index + 1,
                    nextRow + ch
                )
            ) {
                return true;
            }
        }

        return false;
    }

    return dfs(bottom);
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna