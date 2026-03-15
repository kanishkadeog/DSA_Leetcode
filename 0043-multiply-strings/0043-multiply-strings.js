/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") return "0";

    const n = num1.length;
    const m = num2.length;
    const result = new Array(n + m).fill(0);

    // Multiply from right to left
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            const mul = (num1.charCodeAt(i) - 48) * (num2.charCodeAt(j) - 48);
            const sum = mul + result[i + j + 1];

            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    // Convert to string (skip leading zeros)
    let str = result.join("").replace(/^0+/, "");
    return str === "" ? "0" : str;
};
