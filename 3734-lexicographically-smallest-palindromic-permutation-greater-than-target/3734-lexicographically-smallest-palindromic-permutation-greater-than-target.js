/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexPalindromicPermutation = function(s, target) {
    const n = s.length;
    const half = Math.floor(n / 2);

    // -----------------------------------------
    // Count characters
    // -----------------------------------------
    const freq = Array(26).fill(0);

    for (const ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    // -----------------------------------------
    // Check if palindrome is possible
    // -----------------------------------------
    let oddCount = 0;
    let middle = -1;

    for (let c = 0; c < 26; c++) {
        if (freq[c] % 2 === 1) {
            oddCount++;
            middle = c;
        }
    }

    // Even length -> all counts must be even
    if (n % 2 === 0 && oddCount !== 0) {
        return "";
    }

    // Odd length -> exactly one odd count
    if (n % 2 === 1 && oddCount !== 1) {
        return "";
    }

    // -----------------------------------------
    // Frequency of characters in first half
    // -----------------------------------------
    const halfFreq = Array(26).fill(0);

    for (let c = 0; c < 26; c++) {
        halfFreq[c] = Math.floor(freq[c] / 2);
    }

    // -----------------------------------------
    // Build complete palindrome
    // -----------------------------------------
    function buildPalindrome(firstHalf) {
        const left = firstHalf
            .map(c => String.fromCharCode(c + 97))
            .join("");

        const right = firstHalf
            .slice()
            .reverse()
            .map(c => String.fromCharCode(c + 97))
            .join("");

        if (n % 2 === 0) {
            return left + right;
        }

        return left +
            String.fromCharCode(middle + 97) +
            right;
    }

    // -----------------------------------------
    // Special case: n = 1
    // -----------------------------------------
    if (half === 0) {
        const candidate = buildPalindrome([]);

        return candidate > target ? candidate : "";
    }

    // -----------------------------------------
    // Find how much of target's first half
    // we can match.
    // -----------------------------------------
    const targetHalf = target.slice(0, half);

    const equalPrefix = [];
    const remaining = halfFreq.slice();

    for (let i = 0; i < half; i++) {
        const c = targetHalf.charCodeAt(i) - 97;

        if (remaining[c] === 0) {
            break;
        }

        equalPrefix.push(c);
        remaining[c]--;
    }

    // -----------------------------------------
    // CASE 1:
    // We can make the whole first half equal
    // to target's first half.
    //
    // The resulting palindrome itself might
    // already be greater than target.
    // -----------------------------------------
    if (equalPrefix.length === half) {
        const candidate = buildPalindrome(equalPrefix);

        if (candidate > target) {
            return candidate;
        }
    }

    // -----------------------------------------
    // CASE 2:
    //
    // Change one position to a character
    // strictly greater than target[pos].
    //
    // Start from the RIGHTMOST possible position.
    //
    // IMPORTANT:
    // Start from equalPrefix.length.
    //
    // This fixes:
    // s = "bb"
    // target = "aa"
    //
    // equalPrefix.length = 0
    // so pos = 0 is still considered.
    // -----------------------------------------
    for (let pos = equalPrefix.length; pos >= 0; pos--) {

        // Cannot use pos if it is outside first half
        if (pos >= half) {
            continue;
        }

        const count = halfFreq.slice();

        // Keep everything before pos equal
        // to target.
        for (let j = 0; j < pos; j++) {
            count[equalPrefix[j]]--;
        }

        const targetChar = targetHalf.charCodeAt(pos) - 97;

        // Try the smallest character greater
        // than target[pos].
        for (let c = targetChar + 1; c < 26; c++) {

            if (count[c] === 0) {
                continue;
            }

            count[c]--;

            const firstHalf = equalPrefix.slice(0, pos);
            firstHalf.push(c);

            // Fill remaining positions with the
            // smallest available characters.
            for (let x = 0; x < 26; x++) {
                while (count[x] > 0) {
                    firstHalf.push(x);
                    count[x]--;
                }
            }

            const candidate = buildPalindrome(firstHalf);

            if (candidate > target) {
                return candidate;
            }
        }
    }

    return "";
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna