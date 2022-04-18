let first = 0; 
let last = 0;

let findLowIndex = function(arr, key) {
  if (arr.indexOf(key) > -1) {
    first = arr.indexOf(key);
    return first;
  }
  return -1;
};

let findHighIndex = function(arr, key) {
  if (arr.indexOf(key) > -1) {
    last = arr.lastIndexOf(key);
     return last;
  }
  return -1;
};

findLowIndex([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9], 5)
findHighIndex([1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6, 9], 5)