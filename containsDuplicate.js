let nums = [1,2,3]
var containsDuplicate = function(nums) {
    let arr = nums.sort()
    let check = false
    arr.forEach(function(value,index) {
        if(arr[index] == arr[index + 1]) {
            check = true
        }
    })
    return check
};
containsDuplicate(nums)