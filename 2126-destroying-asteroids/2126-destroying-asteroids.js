/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
    
    // Greedy: destroy smaller asteroids first
    asteroids.sort((a, b) => a - b);

    let currMass = BigInt(mass);

    for (let asteroid of asteroids) {

        if (currMass < BigInt(asteroid)) {
            return false;
        }

        currMass += BigInt(asteroid);
    }

    return true;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna