var subsets = function(nums) {
    let res = [];

    function backtrack(start, path) {
        // every path is a valid subset
        res.push([...path]);

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);            // choose
            backtrack(i + 1, path);       // explore
            path.pop();                   // undo (backtrack)
        }
    }

    backtrack(0, []);
    return res;
};