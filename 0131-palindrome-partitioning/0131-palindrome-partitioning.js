/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let result = [];
    let path = [];

    // Check if substring is palindrome
    function isPalindrome(left, right) {
        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    // Backtracking
    function backtrack(start) {
        // Reached end of string
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            if (isPalindrome(start, end)) {
                path.push(s.substring(start, end + 1));

                backtrack(end + 1);

                path.pop();
            }
        }
    }

    backtrack(0);

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna