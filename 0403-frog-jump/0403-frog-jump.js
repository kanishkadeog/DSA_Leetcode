/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    const n = stones.length;

    // Map: stone position -> set of jump sizes that can reach it
    const jumps = new Map();

    for (const stone of stones) {
        jumps.set(stone, new Set());
    }

    // The first jump must be exactly 1
    jumps.get(0).add(0);

    for (const stone of stones) {
        const possibleJumps = jumps.get(stone);

        for (const k of possibleJumps) {
            for (const nextJump of [k - 1, k, k + 1]) {
                if (nextJump <= 0) continue;

                const nextPosition = stone + nextJump;

                // If there is a stone at the landing position
                if (jumps.has(nextPosition)) {
                    // Reached the last stone
                    if (nextPosition === stones[n - 1]) {
                        return true;
                    }

                    jumps.get(nextPosition).add(nextJump);
                }
            }
        }
    }

    return false;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna