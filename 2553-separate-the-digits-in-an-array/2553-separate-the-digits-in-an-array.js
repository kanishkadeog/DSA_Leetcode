/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let answer = [];

    for (let num of nums) {

        let digits = num.toString();

        for (let ch of digits) {
            answer.push(Number(ch));
        }
    }

    return answer;
};