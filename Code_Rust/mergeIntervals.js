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
