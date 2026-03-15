const MOD = 1000000007n;

var Fancy = function() {
    this.seq = [];
    this.mul = 1n;
    this.add = 0n;
};

function modInv(x) {
    let power = MOD - 2n;
    let res = 1n;
    x %= MOD;

    while (power > 0n) {
        if (power & 1n) res = (res * x) % MOD;
        x = (x * x) % MOD;
        power >>= 1n;
    }
    return res;
}

/** 
 * @param {number} val
 */
Fancy.prototype.append = function(val) {
    val = BigInt(val);
    let normalized = ((val - this.add + MOD) % MOD * modInv(this.mul)) % MOD;
    this.seq.push(normalized);
};

/** 
 * @param {number} inc
 */
Fancy.prototype.addAll = function(inc) {
    this.add = (this.add + BigInt(inc)) % MOD;
};

/** 
 * @param {number} m
 */
Fancy.prototype.multAll = function(m) {
    m = BigInt(m);
    this.mul = (this.mul * m) % MOD;
    this.add = (this.add * m) % MOD;
};

/** 
 * @param {number} idx
 * @return {number}
 */
Fancy.prototype.getIndex = function(idx) {
    if (idx >= this.seq.length) return -1;
    let val = this.seq[idx];
    return Number((val * this.mul + this.add) % MOD);
};