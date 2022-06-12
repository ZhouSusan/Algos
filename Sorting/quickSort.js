function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  };

//refactored 

function swap(nums, leftIdx, rightIdx) {
  let temp = nums[leftIdx];
  nums[leftIdx] = nums[rightIdx];
  nums[rightIdx] = temp;
}

function partition(nums, left, right) {
  let pivot = nums[Math.floor((right + left)/2)];
  let i = left; 
  let j = right;

  while (i <= j) {
    while(nums[i] < pivot){
      i++;
    }

    while (nums[j] > pivot) {
      j--;
    }

    if (i<=j) {
      swap(nums, i, j);
      i++;
      j--
    }
  }

  return i;
}

const quickSortRec = function(nums, left, right) {
  let index;

  if (nums.length > 1) {
    index = partition(nums, left, right);//index returned from partition 

    //if there are more elements to the left of pviot
    if (left < index  -1) {
      quickSortRec(nums, left, index-1);
    }

    //if there are more elements to the right of pviot
    if (index < right) {
      quickSortRec(nums, index+1, right);
    }
  }
  return nums;
}

let arr1 = [5, 3, 6, 8, 2, 9];
console.log(quickSortRec(arr1, 0, arr1.length-1));