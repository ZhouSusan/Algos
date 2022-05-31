/* Longest Consecutive Run
A consecutive-run is a list of adjacent, consecutive integers. This list can be either increasing or decreasing. Create a function that takes an array of numbers and returns the length of the longest consecutive-run.

To illustrate:

longestRun([1, 2, 3, 5, 6, 7, 8, 9]) ➞ 5
// Two consecutive runs: [1, 2, 3] and [5, 6, 7, 8, 9] (longest).
Examples
longestRun([1, 2, 3, 10, 11, 15]) ➞ 3
// Longest consecutive-run: [1, 2, 3].

longestRun([5, 4, 2, 1]) ➞ 2
// Longest consecutive-run: [5, 4] and [2, 1].

longestRun([3, 5, 7, 10, 15]) ➞ 1
// No consecutive runs, so we return 1.
Notes
If there aren't any consecutive runs (there is a gap between each integer), return 1. 
I: arr of numbers
O: integer
C: if no consecutive number then return 1;
*/

function longestRun(arr) {
    var outputCount = 1

    while(arr[1]-arr[0] === 0){
    arr.splice(0,1);
    }


    if (arr[1]-arr[0] === -1){
    outputCount = descend(arr);
    }else if(arr[1] - arr[0] === 1){
    outputCount = ascend(arr);
    }
    return outputCount;
    }

    function descend(downArr){
    var counting = 1;
    var longestCount = 1
    for (var i= 0; i<downArr.length; i++){

    if(i === downArr.length-1  && downArr%2===1){
        if(downArr[i - 1] - downArr[i] === -1){
        counting++;
    } else {
        if (longestCount<counting){
        longestCount = counting;
        }
        counting = 1;
        break;
        }
    }    if(downArr[i + 1] - downArr[i] === -1){
        counting++;
    } else {
        if (longestCount<counting){
        longestCount = counting;
        }
        counting = 1;
        continue;
    }
    }
    return longestCount;
    }

    function ascend(ascendArr){
    var counting = 1;
    var longestCount = 1
    for (var i= 0; i<ascendArr.length; i++){
    if(i === ascendArr.length-1 && ascendArr%2===1){
        if(ascendArr[i] - ascendArr[i-1] === 1){
        counting++;
    } else {
        if (longestCount<counting){
            longestCount = counting;
        }
        counting = 1;
        break;
        }
    if(ascendArr[i + 1] - ascendArr[i] === 1){
        counting++;
    } else {
        if (longestCount<counting){
            longestCount = counting;
        }
        counting = 1;
        continue;
        }
        }
    }
    return longestCount;
}

function longestRun(arr) {
	let newArr=[...new Set([...arr])].sort((a,b)=>a-b);
	let max=-1,count=1;
	for(let i=0;i<newArr.length-1;i++){
		if(newArr[i+1]-newArr[i]===1){
			count++;
		}else{
			max=Math.max(max,count);
			count=1;
		}
	}
	return Math.max(max,count);
}

function longestRun(arr) {
	let arr2=[];
	let tmp= [];
	let sum=1;
	let longest=0;
	
	for(let i=0;i<arr.length;i++){
		if(arr[i]+1==arr[i+1]){
			sum++;
		} else if(longest<sum){
			longest=sum;
			sum=1;
		}
	}
	
	for(let i=0;i<arr.length;i++){
		if(arr[i]-1==arr[i+1]){
			sum++;
		} else if(longest<sum){
			longest=sum;
			sum=1;
		}
	}
	return longest;
}

function assertEquals (actual, expected, testName){
  if (actual === expected) {
    console.log('passed');
  }else {console.log('FAILED: '+actual+ ' does not match '+expected)}
}

assertEquals(longestRun([1, 2, 3, 5, 6, 7, 8, 9]), 5, "should return the longest consectutive run");
assertEquals(longestRun([1, 2, 3, 10, 11, 15]), 3, "should return the longest consectutive run");
assertEquals(longestRun([-7, -6, -5, -4, -3, -2, -1]), 7, "should return the longest consectutive run");
assertEquals(longestRun([3, 5, 6, 10, 15]), 2, "should return the longest consectutive run");
assertEquals(longestRun([3, 5, 7, 10, 15]), 1, "should return the longest consectutive run");
assertEquals(longestRun([5, 4, 3, 2, 1]), 5, "should return the longest consectutive run");
assertEquals(longestRun([5, 4, 2, 1]), 2, "should return the longest consectutive run");
assertEquals(longestRun([10, 9, 0, 5]), 2, "should return the longest consectutive run");
assertEquals(longestRun([1, 2, 3, 2, 1]), 3, "should return the longest consectutive run");
assertEquals(longestRun([10, 9, 8, 7, 6, 2, 1]), 5, "should return the longest consectutive run");

