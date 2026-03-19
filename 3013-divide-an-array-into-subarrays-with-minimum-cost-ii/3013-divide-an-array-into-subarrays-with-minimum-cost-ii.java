import java.util.*;

class Solution {
    public long minimumCost(int[] nums, int k, int dist) {
        int n = nums.length;
        long ans = Long.MAX_VALUE;

        TreeMap<Integer, Integer> chosen = new TreeMap<>(); // k-2 smallest
        TreeMap<Integer, Integer> rest = new TreeMap<>();

        long sum = 0;
        int chosenSize = 0, restSize = 0;

        // initial window [2 .. dist+1]
        for (int i = 2; i <= Math.min(n - 1, dist + 1); i++) {
            add(rest, nums[i]);
            restSize++;
        }

        while (chosenSize < k - 2 && restSize > 0) {
            int v = rest.firstKey();
            remove(rest, v);
            restSize--;
            add(chosen, v);
            chosenSize++;
            sum += v;
        }

        for (int i = 1; i < n; i++) {
            if (chosenSize == k - 2) {
                ans = Math.min(ans, nums[0] + nums[i] + sum);
            }

            // remove outgoing
            int out = i + 1;
            if (out < n) {
                if (chosen.containsKey(nums[out])) {
                    remove(chosen, nums[out]);
                    chosenSize--;
                    sum -= nums[out];
                } else if (rest.containsKey(nums[out])) {
                    remove(rest, nums[out]);
                    restSize--;
                }
            }

            // add incoming
            int in = i + dist + 1;
            if (in < n) {
                add(rest, nums[in]);
                restSize++;
            }

            // refill chosen
            while (chosenSize < k - 2 && restSize > 0) {
                int v = rest.firstKey();
                remove(rest, v);
                restSize--;
                add(chosen, v);
                chosenSize++;
                sum += v;
            }

            // swap if violated
            if (chosenSize > 0 && restSize > 0 &&
                chosen.lastKey() > rest.firstKey()) {

                int a = chosen.lastKey();
                int b = rest.firstKey();

                remove(chosen, a);
                remove(rest, b);
                add(chosen, b);
                add(rest, a);

                sum = sum - a + b;
            }
        }

        return ans;
    }

    private void add(TreeMap<Integer, Integer> map, int x) {
        map.put(x, map.getOrDefault(x, 0) + 1);
    }

    private void remove(TreeMap<Integer, Integer> map, int x) {
        int c = map.get(x);
        if (c == 1) map.remove(x);
        else map.put(x, c - 1);
    }
}
