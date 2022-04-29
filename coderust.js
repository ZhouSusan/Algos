//  We’re given a sorted array of integers, nums, and an integer value, target. Return the low and high index of the given target element. 
//If the indexes are not found, return -1.

let findLowIndex = function(arr, key) {
  if (arr.indexOf(key) > -1) {
    return arr.indexOf(key);
  }
  return -1;
};

let findHighIndex = function(arr, key) {
  if (arr.indexOf(key) > -1) {
    return arr.lastIndexOf(key);
  }
  return -1;
};

console.log(findLowIndex([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9], 5));
console.log(findHighIndex([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9], 5));

let findLowIndex2 = function(arr, key) {
    let low = 0;
    let high = arr.length-1;

    let mid = Math.floor(high/2);
    while (low <= high) {
        if(arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }

        mid = low + Math.floor((high-low)/2);
    }

    if (low < arr.length && arr[low] === key) {
        return low;
    }
    return -1;
  };
  
  let findHighIndex2 = function(arr, key) {
    let low = 0;
    let high = arr.length-1;
    let mid = Math.floor(high/2); 

    while (low <= high) {
        if (arr[mid] <= key) {
            low = mid + 1; 
        } else {
            high = mid - 1
        }

        mid = low + Math.floor((high-low)/2);

        if (high === -1) {
            return high;
        }

        if (high < arr.length && arr[high] === key) {
            return high;
        }
    }
    return -1;
  };

console.log(findLowIndex2([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9], 2), 
findHighIndex2([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9], 2));

/*We’re given an integer array, nums. 
Move all zeroes if any to the left while maintaining the order of other elements in the array.*/

let moveZerosToLeft = function(nums) {
 
     for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.unshift(0);
        } 
      }
      console.log(nums);
      return nums;
  };

console.log(moveZerosToLeft([1, 10, 20, 0, 59, 63, 0, 88, 0]));

// let moveZerosToLeft2 = function(nums) {
//     if (nums.length < 1) {
//         return nums;
//     }

//     let lengthNums = nums.length;

//     //initialize the two pointers
//     let writeIndex = length - 1;
//     let readIndex = length - 1;

//     while (readIndex >= 0) {

//     }
// }

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

/*
We’re given an array of interval pairs as input where each interval has a start and end timestamp. 
The input array is sorted by starting timestamps. 
Merge the overlapping intervals and return a new output array.
*/

class Pair { 
    constructor(first, second) { 
        this.first = first; 
        this.second = second; 
    } 
}

let mergeIntervals = function(v){
    let result = [];
    if (!v || v.length === 0) {
        return;
    }

    //added the first pair to the result variable 
    result.push(new Pair(v[0].first, v[0].second));

    for (let i = 0; i < v.length; i++) {
        //getting the recent added pair in the result list
        let recentAddedPair = result[result.length - 1];
        
        //Getting and initializing input pair
        let currentStart = v[i].first;
        let currentEnd = v[i].second;

        //Getting and initializing recently added pair from result list 
        let prevEnd = recentAddedPair.second;

        //Overlapping condition 
        if (prevEnd >= currentEnd) {
            recentAddedPair.second = Math.max(currentEnd, prevEnd);
        }

        // No over lapping 
        else {
            result.push(new Pair(currentStart, currentEnd));
        }
        return result;
    }
    return result;    
}

let v1 =  [new Pair(1, 5), new Pair(3, 7), new Pair(4, 6)];
let v2 =  [new Pair(1, 5), new Pair(4, 6), new Pair(6, 8), new Pair(11, 15)];
let v3 =  [new Pair(3, 7), new Pair(6, 8), new Pair(10, 12), new Pair(11, 15)];
let v4 =  [new Pair(1, 5)];

console.log(
mergeIntervals(v1),
mergeIntervals(v2),
mergeIntervals(v3),
mergeIntervals(v4)
);


//We’re given an array of integers and a value. Determine if there are any two integers in the array whose sum is equal to the given value. 
//Return true if the sum exists; otherwise, return false.


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