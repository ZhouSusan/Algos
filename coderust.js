/*
We’re given an array of daily stock prices (integers for simplicity). 
Return the buying and selling prices for making the maximum profit.
The values in the array represent the cost of stock each day. 
As we can buy and sell the stock only once, we need to find the best buy 
and sell prices that maximize profit (or minimized loss) over a given span of time.
We need to maximize the profit from a single buy and sell. 
If we can’t make any profit, we’ll try to minimize the loss.
 */

let findBuySellStockPrices = function(array) {
    if (array.length < 2) {
        return [-1, -1];
    }

    let lowHigh = [];
    if (array[0] <= array[1]) {
        lowHigh.push(array[0]);
    } else if (array[1] < array[0]){
        lowHigh.push(array[1]);
    }

    let max = array[3];

    for (let i = 2; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    lowHigh.push(max);
    return lowHigh; //Return a tuple with (high, low) price values
};

let findBuySellStockPrices2 = function(array) {
    if (!array || array.length < 2) {
        return;
    }

    let currentBuy = array[0];
    let globalSell = array[1];

    //calculating the global profit 
    let globalProfit = globalSell - currentBuy;

    //initialize current_profit with minimum value
    let currentProfit = 0;
    
    for (let i = 1; i < array.length; i++) {
        currentProfit = array[i] - currentBuy;//calcuating the current profit

        if (currentProfit > globalProfit) {
            globalProfit = currentProfit;
            globalSell = array[i];
        }

        // we will look the current buying price
        if (currentBuy > array[i]) {
            currentBuy = array[i];
        }
    }
    return [globalSell - globalProfit, globalSell];
}

console.log(
// findBuySellStockPrices([7, 1, 5, 3, 6, 4]),
//(2, 5)

findBuySellStockPrices2([1, 2, 3, 4, 3, 2, 1, 2, 5]),
//Buy Price: 1, Sell Price: 5


findBuySellStockPrices2([8, 6, 5, 4, 3, 2, 1]),
//Buy Price: 6, Sell Price: 5

findBuySellStockPrices2([12, 30, 40, 90, 110]),
//Buy Price: 12, Sell Price: 110)
);

let findSumOfTwo = function(nums, val) {

    if (!nums || nums.length < 2) {
     return false;
   }
  
    let pairFound = new Set();
   
  
    for (let elem in nums) {
      if (pairFound.has(val - nums[elem])) {
        return true;
      }
  
       pairFound.add(nums[elem]);
    }
     console.log( pairFound);
    return false;
  };