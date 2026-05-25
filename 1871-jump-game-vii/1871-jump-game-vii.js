/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {

    const n = s.length;
    const queue = [0];

    let farthest = 1;

    for (let head = 0; head < queue.length; head++) {

        const i = queue[head];

        const start = Math.max(i + minJump, farthest);
        const end = Math.min(i + maxJump, n - 1);

        for (let j = start; j <= end; j++) {

            if (s[j] === '0') {

                if (j === n - 1) return true;

                queue.push(j);
            }
        }

        farthest = end + 1;
    }

    return n === 1;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna