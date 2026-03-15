/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [];
    const path = [];

    function backtrack(start, remaining) {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates at the same recursion level
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            const val = candidates[i];
            if (val > remaining) break; // pruning

            path.push(val);
            backtrack(i + 1, remaining - val); // move forward (use once)
            path.pop();
        }
    }

    backtrack(0, target);
    return result;
};
