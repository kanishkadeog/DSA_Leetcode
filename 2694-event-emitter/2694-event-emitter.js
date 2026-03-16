class EventEmitter {
    constructor() {
        this.events = {};
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        this.events[eventName].push(callback);
        const index = this.events[eventName].length - 1;

        return {
            unsubscribe: () => {
                this.events[eventName][index] = null;
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events[eventName]) return [];

        const results = [];

        for (const cb of this.events[eventName]) {
            if (cb) {
                results.push(cb(...args));
            }
        }

        return results;
    }
}