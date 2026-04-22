/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let a=[];

    for(let i=0;i<nums.length;i++)
    {
        a.push(nums[i]);
    }
    for(let j=0;j<nums.length;j++)
    {
        a.push(nums[j]);
    }
    return a;
    
};