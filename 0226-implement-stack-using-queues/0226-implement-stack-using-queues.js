var MyStack = function() {
    this.q = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q.push(x);

    let size = this.q.length;

    // Rotate previous elements
    for (let i = 0; i < size - 1; i++) {
        this.q.push(this.q.shift());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna