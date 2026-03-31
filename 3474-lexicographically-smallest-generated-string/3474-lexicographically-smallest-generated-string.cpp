class Solution {
public:
    string generateString(string str1, string str2) {
        int n = str1.size(), m = str2.size();
        int len = n + m - 1;

        string word(len, '?');
        vector<bool> locked(len, false); // track T-fixed positions

        // Step 1: Apply 'T'
        for (int i = 0; i < n; i++) {
            if (str1[i] == 'T') {
                for (int j = 0; j < m; j++) {
                    if (word[i + j] == '?' || word[i + j] == str2[j]) {
                        word[i + j] = str2[j];
                        locked[i + j] = true;
                    } else {
                        return "";
                    }
                }
            }
        }

        // Step 2: Fill remaining with 'a'
        for (int i = 0; i < len; i++) {
            if (word[i] == '?') word[i] = 'a';
        }

        // Step 3: Handle 'F'
        for (int i = 0; i < n; i++) {
            if (str1[i] == 'F') {
                bool match = true;

                for (int j = 0; j < m; j++) {
                    if (word[i + j] != str2[j]) {
                        match = false;
                        break;
                    }
                }

                if (match) {
                    bool changed = false;

                    // ONLY change unlocked positions
                    for (int j = m - 1; j >= 0; j--) {
                        int pos = i + j;

                        if (!locked[pos]) {
                            word[pos] = (word[pos] == 'a') ? 'b' : 'a';
                            changed = true;
                            break;
                        }
                    }

                    if (!changed) return ""; // cannot fix safely
                }
            }
        }

        return word;
    }
};