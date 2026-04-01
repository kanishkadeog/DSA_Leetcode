/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix.length) return 0;

    let rows = matrix.length;
    let cols = matrix[0].length;
    let heights = new Array(cols).fill(0);
    let maxArea = 0;

    for (let i = 0; i < rows; i++) {
        // build histogram
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                heights[j] += 1;
            } else {
                heights[j] = 0;
            }
        }

        // compute largest rectangle in histogram
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};

// helper function
function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;

    heights.push(0); // flush stack

    for (let i = 0; i < heights.length; i++) {
        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            let h = heights[stack.pop()];
            let w = stack.length ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);
    }

    heights.pop(); // clean up

    return maxArea;
}