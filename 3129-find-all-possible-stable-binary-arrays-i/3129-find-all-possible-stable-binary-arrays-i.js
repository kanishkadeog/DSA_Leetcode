/**
 * @param {number} zero
 * @param {number} one
 * @param {number} limit
 * @return {number}
 */
var numberOfStableArrays = function(zero, one, limit) {
    const MOD = 1000000007;

    const dp0 = Array.from({length: zero+1}, () => Array(one+1).fill(0));
    const dp1 = Array.from({length: zero+1}, () => Array(one+1).fill(0));

    for (let i = 1; i <= Math.min(zero, limit); i++) dp0[i][0] = 1;
    for (let j = 1; j <= Math.min(one, limit); j++) dp1[0][j] = 1;

    for (let z = 0; z <= zero; z++) {
        for (let o = 0; o <= one; o++) {

            for (let k = 1; k <= limit && z - k >= 0; k++) {
                dp0[z][o] = (dp0[z][o] + dp1[z-k][o]) % MOD;
            }

            for (let k = 1; k <= limit && o - k >= 0; k++) {
                dp1[z][o] = (dp1[z][o] + dp0[z][o-k]) % MOD;
            }

        }
    }

    return (dp0[zero][one] + dp1[zero][one]) % MOD;
};