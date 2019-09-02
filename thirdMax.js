var thirdMax = function(nums) {
    let arr = [...new Set(nums.sort(mySort))]
    return arr[2] !== undefined ? arr[2] : arr[0]
};
var mySort = function(a,b) {
    if( a != b) {
        return b - a
    }
}

thirdMax([3,3,4,3,4,3,0,3,3])