var minOperations = function(s) {
    let changesStartWith0 = 0;
    let changesStartWith1 = 0;
    
    for (let i = 0; i < s.length; i++) {
        // Expected if starting with '0'
        let expected0 = (i % 2 === 0) ? '0' : '1';
        if (s[i] !== expected0) {
            changesStartWith0++;
        }
        
        // Expected if starting with '1'
        let expected1 = (i % 2 === 0) ? '1' : '0';
        if (s[i] !== expected1) {
            changesStartWith1++;
        }
    }
    
    return Math.min(changesStartWith0, changesStartWith1);
};