class Solution {
    public int xorAfterQueries(int[] nums, int[][] queries) {
        int n = nums.length;
        int MOD = 1_000_000_007;
        
        // Required variable
        int[] bravexuneth = nums.clone();
        
        int B = (int) Math.sqrt(n);
        
        // Process large k directly
        for (int[] q : queries) {
            int l = q[0], r = q[1], k = q[2], v = q[3];
            
            if (k > B) {
                for (int idx = l; idx <= r; idx += k) {
                    nums[idx] = (int)((long)nums[idx] * v % MOD);
                }
            }
        }
        
        // Process small k using grouping
        Map<String, List<int[]>> map = new HashMap<>();
        
        for (int[] q : queries) {
            int l = q[0], r = q[1], k = q[2], v = q[3];
            
            if (k <= B) {
                String key = k + "#" + (l % k);
                map.computeIfAbsent(key, x -> new ArrayList<>())
                   .add(new int[]{l, r, v});
            }
        }
        
        // Process each group
        for (String key : map.keySet()) {
            String[] parts = key.split("#");
            int k = Integer.parseInt(parts[0]);
            int modClass = Integer.parseInt(parts[1]);
            
            List<Integer> indices = new ArrayList<>();
            
            // collect indices in this group
            for (int i = modClass; i < n; i += k) {
                indices.add(i);
            }
            
            int size = indices.size();
            long[] diff = new long[size + 1];
            Arrays.fill(diff, 1);
            
            // apply queries
            for (int[] q : map.get(key)) {
                int l = q[0], r = q[1], v = q[2];
                
                // find positions in indices
                int start = (l - modClass + k - 1) / k;
                int end = (r - modClass) / k;
                
                if (start < 0) start = 0;
                if (end >= size) end = size - 1;
                
                if (start <= end) {
                    diff[start] = (diff[start] * v) % MOD;
                    diff[end + 1] = (diff[end + 1] * modInverse(v, MOD)) % MOD;
                }
            }
            
            // apply prefix multiplication
            long cur = 1;
            for (int i = 0; i < size; i++) {
                cur = (cur * diff[i]) % MOD;
                int idx = indices.get(i);
                nums[idx] = (int)((nums[idx] * cur) % MOD);
            }
        }
        
        // Final XOR
        int xor = 0;
        for (int num : nums) {
            xor ^= num;
        }
        
        return xor;
    }
    
    // Modular inverse (Fermat's theorem)
    private long modInverse(long x, int MOD) {
        return power(x, MOD - 2, MOD);
    }
    
    private long power(long base, long exp, int MOD) {
        long res = 1;
        while (exp > 0) {
            if ((exp & 1) == 1) res = (res * base) % MOD;
            base = (base * base) % MOD;
            exp >>= 1;
        }
        return res;
    }
}