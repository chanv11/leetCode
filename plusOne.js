let arr = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
var plusOne = function(digits) {
    let num = (parseInt(digits.join('')) + 1) + ''
    console.log(parseInt(digits.join('')))
    let arr = num.split('')
    let result = []
    arr.map(res => {
        result.push(parseInt(res))
    })
    console.log(result)
    return result
};
plusOne(arr)