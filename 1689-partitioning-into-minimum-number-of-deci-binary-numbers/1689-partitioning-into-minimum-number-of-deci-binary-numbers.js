var minPartitions = function(n) {
    let maxDigit = 0;
    
    for (let ch of n) {
        maxDigit = Math.max(maxDigit, ch.charCodeAt(0) - 48);
        
        // early stop if 9 found
        if (maxDigit === 9) return 9;
    }
    
    return maxDigit;
};