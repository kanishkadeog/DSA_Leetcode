/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
    const cnt = [0, 0, 0];

    // Count stones according to value % 3
    for (const stone of stones) {
        cnt[stone % 3]++;
    }

    // Try Alice taking remainder 1 first
    const first = [cnt[0], cnt[1], cnt[2]];

    // Try Alice taking remainder 2 first
    const second = [cnt[0], cnt[2], cnt[1]];

    return check(first) || check(second);
};

function check(cnt) {
    // Alice must be able to take a remainder-1 stone
    if (cnt[1] === 0) {
        return false;
    }

    // Alice takes one remainder-1 stone
    cnt[1]--;

    /*
     * Now players alternate:
     *
     * 1 -> 2 -> 1 -> 2 -> ...
     *
     * We can consume pairs of (1,2).
     */
    let moves = 1 + Math.min(cnt[1], cnt[2]) * 2;

    /*
     * If there are extra remainder-0 stones,
     * they can be used as additional moves because
     * they don't change sum % 3.
     */
    moves += cnt[0];

    /*
     * If there are extra remainder-1 stones,
     * one more move can be made.
     */
    if (cnt[1] > cnt[2]) {
        cnt[1]--;
        moves++;
    }

    /*
     * Alice wins if:
     *
     * 1. The number of moves is odd
     * 2. Some non-zero-remainder stone remains
     *
     * Otherwise Bob wins.
     */
    return moves % 2 === 1 && cnt[1] !== cnt[2];
}

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna