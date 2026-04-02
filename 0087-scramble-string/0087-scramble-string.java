import java.util.*;

class Solution {
    Map<String, Boolean> memo = new HashMap<>();
    
    public boolean isScramble(String s1, String s2) {
        // Base case
        if (s1.equals(s2)) return true;
        
        String key = s1 + "#" + s2;
        if (memo.containsKey(key)) return memo.get(key);
        
        // Pruning: check character frequency
        int[] count = new int[26];
        for (int i = 0; i < s1.length(); i++) {
            count[s1.charAt(i) - 'a']++;
            count[s2.charAt(i) - 'a']--;
        }
        for (int c : count) {
            if (c != 0) {
                memo.put(key, false);
                return false;
            }
        }
        
        int n = s1.length();
        
        // Try all splits
        for (int k = 1; k < n; k++) {
            
            // Case 1: No swap
            if (isScramble(s1.substring(0, k), s2.substring(0, k)) &&
                isScramble(s1.substring(k), s2.substring(k))) {
                memo.put(key, true);
                return true;
            }
            
            // Case 2: Swap
            if (isScramble(s1.substring(0, k), s2.substring(n - k)) &&
                isScramble(s1.substring(k), s2.substring(0, n - k))) {
                memo.put(key, true);
                return true;
            }
        }
        
        memo.put(key, false);
        return false;
    }
}