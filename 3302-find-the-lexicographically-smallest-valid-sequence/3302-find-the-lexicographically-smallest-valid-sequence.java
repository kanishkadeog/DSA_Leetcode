class Solution {
    public int[] validSequence(String word1, String word2) {
        int n = word1.length();
        int m = word2.length();

        /*
         * suf[i] = maximum number of characters from the suffix
         * of word2 that can be matched as a subsequence
         * inside word1[i...n-1].
         */
        int[] suf = new int[n + 1];

        for (int i = n - 1; i >= 0; i--) {
            suf[i] = suf[i + 1];

            int matched = suf[i + 1];

            if (matched < m) {
                int j = m - matched - 1;

                if (word1.charAt(i) == word2.charAt(j)) {
                    suf[i]++;
                }
            }
        }

        /*
         * Greedily build the answer from left to right.
         */
        int[] ans = new int[m];

        int j = 0;
        boolean changed = false;
        int pos = 0;

        for (int i = 0; i < n && j < m; i++) {

            /*
             * Case 1:
             * Characters are already equal.
             */
            if (word1.charAt(i) == word2.charAt(j)) {
                ans[pos++] = i;
                j++;
            }

            /*
             * Case 2:
             * Use our one allowed modification.
             *
             * We can change word1[i] to word2[j].
             *
             * After taking i, we need to match
             * word2[j+1 ... m-1].
             *
             * suf[i+1] tells us how many characters from
             * the end of word2 can be matched.
             */
            else if (!changed && suf[i + 1] >= m - j - 1) {
                ans[pos++] = i;
                j++;
                changed = true;
            }
        }

        /*
         * We must select exactly m indices.
         */
        if (j == m) {
            return ans;
        }

        return new int[0];
    }
}

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna