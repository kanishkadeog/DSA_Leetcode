import java.util.*;

class Solution {
    public int minimumDistance(int[] nums) {
        Map<Integer, List<Integer>> map = new HashMap<>();

        // Step 1: store indices
        for (int i = 0; i < nums.length; i++) {
            map.computeIfAbsent(nums[i], k -> new ArrayList<>()).add(i);
        }

        int res = Integer.MAX_VALUE;

        // Step 2: check each value group
        for (List<Integer> list : map.values()) {
            if (list.size() < 3) continue;

            // Step 3: sliding window of size 3
            for (int i = 0; i + 2 < list.size(); i++) {
                int left = list.get(i);
                int right = list.get(i + 2);

                int dist = 2 * (right - left);
                res = Math.min(res, dist);
            }
        }

        return res == Integer.MAX_VALUE ? -1 : res;
    }
}