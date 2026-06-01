/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    
    const result = [];

    // Count set bits
    const countBits = (num) => {
        let count = 0;

        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }

        return count;
    };

    for (let hour = 0; hour < 12; hour++) {

        for (let minute = 0; minute < 60; minute++) {

            if (
                countBits(hour) + countBits(minute) === turnedOn
            ) {

                result.push(
                    `${hour}:${minute.toString().padStart(2, '0')}`
                );
            }
        }
    }

    return result;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna