/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const values = [
        1000, 900, 500, 400,
        100,  90,  50,  40,
        10,   9,   5,   4,
        1
    ];
    
    const symbols = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV",
        "I"
    ];

    let result = "";
    let i = 0;

    while (num > 0) {
        while (num >= values[i]) {
            result += symbols[i];
            num -= values[i];
        }
        i++;
    }

    return result;
};
