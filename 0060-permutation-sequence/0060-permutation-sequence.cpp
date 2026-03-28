class Solution {
public:
    string getPermutation(int n, int k) {
        vector<int> nums;
        vector<int> fact(n, 1);

        // Prepare numbers and factorials
        for (int i = 1; i <= n; i++) {
            nums.push_back(i);
            if (i > 1)
                fact[i - 1] = fact[i - 2] * (i - 1);
        }

        k--; // convert to 0-based index
        string result = "";

        for (int i = n; i >= 1; i--) {
            int index = k / fact[i - 1];
            result += to_string(nums[index]);

            nums.erase(nums.begin() + index);

            k %= fact[i - 1];
        }

        return result;
    }
};