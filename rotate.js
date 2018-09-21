var nums = [1,2,3]
var k = 4
var rotate = function(nums, k) {
    if(k > nums.length) {
        k = k % nums.length
    }
    let m = nums.length - k
    let Arr = nums.slice(0,m)
    nums.splice(0,m)
    nums.push(...Arr)
};
rotate(nums,k)