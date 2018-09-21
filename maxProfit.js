var price = [7,1,5,3,6,4]
var maxProfit = function(prices) {
    var maxPrice = 0
    if(prices.length > 0) {
       for(let i=1 ;i < prices.length; i++) {
           let price = prices[i] - prices[i - 1]
           if(price > 0) {
            maxPrice += price
           }
       }
       return maxPrice

    }else {
        return maxPrice
    }
};