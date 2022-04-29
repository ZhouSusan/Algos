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
  