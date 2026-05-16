/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {

    // Bucket size
    const size = valueDiff + 1;

    const buckets = new Map();

    function getBucketId(num) {
        return Math.floor(num / size);
    }

    for (let i = 0; i < nums.length; i++) {

        let num = nums[i];
        let bucketId = getBucketId(num);

        // Same bucket
        if (buckets.has(bucketId)) {
            return true;
        }

        // Neighbor bucket check
        if (
            buckets.has(bucketId - 1) &&
            Math.abs(num - buckets.get(bucketId - 1)) <= valueDiff
        ) {
            return true;
        }

        if (
            buckets.has(bucketId + 1) &&
            Math.abs(num - buckets.get(bucketId + 1)) <= valueDiff
        ) {
            return true;
        }

        // Insert current number
        buckets.set(bucketId, num);

        // Maintain sliding window size
        if (i >= indexDiff) {
            let oldBucket = getBucketId(nums[i - indexDiff]);
            buckets.delete(oldBucket);
        }
    }

    return false;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/leethub-v4/bcilpkkbokcopmabingnndookdogmbna