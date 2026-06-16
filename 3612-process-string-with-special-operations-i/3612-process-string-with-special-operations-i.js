/**
 * @param {string} s
 * @return {string}
 */
var processStr = function(s) {

    let result = "";

    for (let ch of s) {

        // lowercase letter
        if (ch >= 'a' && ch <= 'z') {

            result += ch;
        }

        // remove last character
        else if (ch === '*') {

            result = result.slice(0, -1);
        }

        // duplicate string
        else if (ch === '#') {

            result += result;
        }

        // reverse string
        else if (ch === '%') {

            result =
                result.split('').reverse().join('');
        }
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna