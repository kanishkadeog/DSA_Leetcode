var RandomizedSet = function() {
    this.arr = [];
    this.map = new Map(); // val -> index
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) return false;

    this.arr.push(val);
    this.map.set(val, this.arr.length - 1);

    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)) return false;

    let index = this.map.get(val);
    let lastVal = this.arr[this.arr.length - 1];

    // Move last element to removed position
    this.arr[index] = lastVal;
    this.map.set(lastVal, index);

    // Remove last
    this.arr.pop();
    this.map.delete(val);

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIndex = Math.floor(Math.random() * this.arr.length);
    return this.arr[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna