/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
/**
 * @param {string} s
 * @return {number}
 */
var maxActiveSectionsAfterTrade = function(s, queries) {
    const n = s.length;
    if (n === 0) return new Array(queries.length).fill(0);
    
    // Step 1: Segment s into blocks of consecutive '0's and '1's
    const blocks = [];
    let i = 0;
    while (i < n) {
        let start = i;
        let type = s[i];
        while (i < n && s[i] === type) {
            i++;
        }
        blocks.push({ type, start, end: i - 1 });
    }
    
    const numBlocks = blocks.length;
    let totalOnes = 0;
    for (let char of s) {
        if (char === '1') totalOnes++;
    }
    
    // Step 2: Extract all '1' blocks and track their indices
    const oneBlocks = [];
    for (let idx = 0; idx < numBlocks; idx++) {
        if (blocks[idx].type === '1') {
            oneBlocks.push({
                start: blocks[idx].start,
                end: blocks[idx].end,
                idx: idx
            });
        }
    }
    
    // Step 3: Precompute full potential gains for fully internal blocks
    const numOnes = oneBlocks.length;
    const fullGains = new Array(numOnes).fill(0);
    for (let j = 0; j < numOnes; j++) {
        let bIdx = oneBlocks[j].idx;
        if (bIdx > 0 && bIdx < numBlocks - 1) {
            let leftLen = blocks[bIdx - 1].end - blocks[bIdx - 1].start + 1;
            let rightLen = blocks[bIdx + 1].end - blocks[bIdx + 1].start + 1;
            fullGains[j] = leftLen + rightLen;
        }
    }
    
    // Step 4: Build Sparse Table for Range Maximum Query (RMQ)
    let maxK = Math.floor(Math.log2(numOnes)) + 1;
    const st = Array.from({ length: numOnes }, () => new Array(maxK).fill(0));
    for (let j = 0; j < numOnes; j++) {
        st[j][0] = fullGains[j];
    }
    for (let k = 1; k < maxK; k++) {
        for (let j = 0; j + (1 << k) <= numOnes; j++) {
            st[j][k] = Math.max(st[j][k - 1], st[j + (1 << (k - 1))][k - 1]);
        }
    }
    
    const queryMaxGains = (L, R) => {
        if (L > R) return 0;
        let k = Math.floor(Math.log2(R - L + 1));
        return Math.max(st[L][k], st[R - (1 << k) + 1][k]);
    };
    
    // Helper function for binary search
    const lowerBoundStart = (val) => {
        let low = 0, high = numOnes - 1, ans = numOnes;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (oneBlocks[mid].start >= val) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    };
    
    const upperBoundEnd = (val) => {
        let low = 0, high = numOnes - 1, ans = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (oneBlocks[mid].end <= val) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return ans;
    };
    
    const results = [];
    
    // Step 5: Process queries
    for (const [l, r] of queries) {
        // A '1' block must be strictly inside [l, r] to be surrounded by '0's in t
        let L_idx = lowerBoundStart(l + 1);
        let R_idx = upperBoundEnd(r - 1);
        
        let maxGain = 0;
        if (L_idx <= R_idx) {
            // Check first block in range
            let b1 = oneBlocks[L_idx];
            if (b1.idx > 0 && b1.idx < numBlocks - 1) {
                let g1 = (blocks[b1.idx - 1].end - Math.max(blocks[b1.idx - 1].start, l) + 1) +
                         (Math.min(blocks[b1.idx + 1].end, r) - blocks[b1.idx + 1].start + 1);
                maxGain = Math.max(maxGain, g1);
            }
            
            // Check last block in range if it is distinct
            if (R_idx > L_idx) {
                let b2 = oneBlocks[R_idx];
                if (b2.idx > 0 && b2.idx < numBlocks - 1) {
                    let g2 = (blocks[b2.idx - 1].end - Math.max(blocks[b2.idx - 1].start, l) + 1) +
                             (Math.min(blocks[b2.idx + 1].end, r) - blocks[b2.idx + 1].start + 1);
                    maxGain = Math.max(maxGain, g2);
                }
            }
            
            // Check all middle blocks completely inside using the Sparse Table
            if (L_idx + 1 <= R_idx - 1) {
                maxGain = Math.max(maxGain, queryMaxGains(L_idx + 1, R_idx - 1));
            }
        }
        
        results.push(totalOnes + maxGain);
    }
    
    return results;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna