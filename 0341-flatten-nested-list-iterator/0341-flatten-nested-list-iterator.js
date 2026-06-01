/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it.
 */

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function(nestedList) {
    
    this.stack = [...nestedList].reverse();
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    
    while (this.stack.length > 0) {

        let top = this.stack[this.stack.length - 1];

        // Found integer
        if (top.isInteger()) {
            return true;
        }

        // Expand nested list
        this.stack.pop();

        let list = top.getList();

        for (let i = list.length - 1; i >= 0; i--) {
            this.stack.push(list[i]);
        }
    }

    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    
    return this.stack.pop().getInteger();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna