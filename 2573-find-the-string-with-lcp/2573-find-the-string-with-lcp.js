var findTheString = function(lcp) {
    const n = lcp.length;

    // Step 0: Basic validation
    for (let i = 0; i < n; i++) {
        if (lcp[i][i] !== n - i) return "";
    }

    // DSU setup
    const parent = Array(n).fill(0).map((_, i) => i);

    function find(x) {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    function union(x, y) {
        let px = find(x);
        let py = find(y);
        if (px !== py) parent[py] = px;
    }

    // Step 1: union positions where lcp > 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (lcp[i][j] > 0) {
                union(i, j);
            }
        }
    }

    // Step 2: assign characters
    const groupChar = new Map();
    let charCode = 97; // 'a'
    const res = Array(n);

    for (let i = 0; i < n; i++) {
        let root = find(i);
        if (!groupChar.has(root)) {
            if (charCode > 122) return ""; // more than 26 chars
            groupChar.set(root, String.fromCharCode(charCode++));
        }
        res[i] = groupChar.get(root);
    }

    const word = res.join("");

    // Step 3: validate LCP
    const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (word[i] === word[j]) {
                dp[i][j] = 1 + dp[i + 1][j + 1];
            } else {
                dp[i][j] = 0;
            }

            if (dp[i][j] !== lcp[i][j]) return "";
        }
    }

    return word;
};