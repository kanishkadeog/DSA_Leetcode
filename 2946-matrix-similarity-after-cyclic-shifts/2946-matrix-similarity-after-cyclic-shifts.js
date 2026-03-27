var areSimilar = function(mat, k) {
    const m = mat.length;
    const n = mat[0].length;

    k = k % n; // important optimization

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (i % 2 === 0) {
                // even row → left shift
                if (mat[i][j] !== mat[i][(j + k) % n]) {
                    return false;
                }
            } else {
                // odd row → right shift
                if (mat[i][j] !== mat[i][(j - k + n) % n]) {
                    return false;
                }
            }

        }
    }

    return true;
};