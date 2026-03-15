/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b);

    function backtrack(start, remain, path) {
        if (remain === 0) {
            result.push([...path]);
            return;
        }

        if (remain < 0) return;

        for (let i = start; i < candidates.length; i++) {
            const num = candidates[i];

            // pruning
            if (num > remain) break;

            path.push(num);
            backtrack(i, remain - num, path); // reuse allowed
            path.pop();
        }
    }

    backtrack(0, target, []);
    return result;
};
