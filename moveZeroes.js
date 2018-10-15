let nums = [0,1,0,3,12]
var moveZeroes = function(nums) {
    let count = 0
    for(let i = 0; i < nums.length; i ++) {
        if(nums[i] != 0) {
            nums[count] = nums[i]
            count ++ 
        }
    }
    for(; count < nums.length; count ++) {
        nums[count] = 0
    }
};
moveZeroes(nums)