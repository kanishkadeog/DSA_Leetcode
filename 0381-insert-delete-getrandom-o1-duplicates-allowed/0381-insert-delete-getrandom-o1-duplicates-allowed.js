var RandomizedCollection = function() {
    this.arr = [];
    this.map = new Map(); // val -> Set of indices
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {

    let exists = this.map.has(val);

    if (!exists) {
        this.map.set(val, new Set());
    }

    this.arr.push(val);
    this.map.get(val).add(this.arr.length - 1);

    return !exists;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {

    if (!this.map.has(val)) return false;

    let indices = this.map.get(val);

    // take one index of val
    let removeIdx = indices.values().next().value;

    let lastIdx = this.arr.length - 1;
    let lastVal = this.arr[lastIdx];

    // remove index from val set first
    indices.delete(removeIdx);

    // if not removing last element
    if (removeIdx !== lastIdx) {

        // move last element
        this.arr[removeIdx] = lastVal;

        // update lastVal indices
        let lastSet = this.map.get(lastVal);

        lastSet.delete(lastIdx);
        lastSet.add(removeIdx);
    }

    // remove last element
    this.arr.pop();

    // clean map
    if (indices.size === 0) {
        this.map.delete(val);
    }

    return true;
};

/**
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {

    let randIdx = Math.floor(Math.random() * this.arr.length);

    return this.arr[randIdx];
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna