let nums = [2, 7, 11, 15]
let target = 9
var twoSum = function(nums, target) {
    let n = 0
    let m = 0
    for(let i = 0; i < nums.length; i ++) {
        for(let j = 1; j < nums.length; j ++) {
            if(nums[i] + nums[j] == target && i != j) {
                n = i
                m = j
                return [n,m]
            }
        }
    }
};
twoSum(nums, target)