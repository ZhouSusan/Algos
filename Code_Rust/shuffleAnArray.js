/*
Given an integer array nums, write an algorithm to shuffle the array randomly. All permutations of the array should be equally likely.

Implement three functions of the Solution class:

Initializes the object with the integer array nums.
Resets the array to its original configuration and returns it.
Returns a random shuffling of the array.

Example#
Sample input#
[2, 4, 5]
Expected output#
Permutation  |  Occurrences | Frequency
[2, 4, 5]    |    150 times | 16.67%
[2, 5, 4]    |    150 times | 16.67%
[4, 2, 5]    |    150 times | 16.67%
[4, 5, 2]    |    150 times | 16.67%
[5, 2, 4]    |    150 times | 16.67%
[5, 4, 2]    |    150 times | 16.67%
Ideally, each permutation of the array should have an equal chance of appearing. With an input array of 3
3
 elements, the number of possible permutations of size 3
3
 is 6
6
. Thus, we expect each permutation to show up with a probability of 1/6
1/6
. When we shuffle the given array 900
900
 times, we want each permutation to appear approximately 150
150
 times.
*/

class Solution {
    constructor(nums) {
        this.copy = nums;
        this.length= nums.length;
    }
    reset() {
       return this.nums;
    }
    shuffle() {
        let shuffled = [];
        this.copy.forEach((i, j) => shuffled[j] = i);
        let size = this.length;

        for (let l = 0; l < shuffled.length; l++) {
          let rand = Math.floor(Math.random()* size) + l;

          let temp = shuffled[l];
          shuffled[l] = shuffled[rand];
          shuffled[rand] = temp;

          //reducing size of unshuffle array
          size--;
        }
        return shuffled;
    }
}

// DO NOT CHANGE THE TEST HARNESS CODE BELOW
let updateFreqCount = function(shuffled, allShuffles, shuffleCounts){
    for(let i=0 ; i <allShuffles.length; i++){
            // this function will be used for comaprision of arrays
            if(checkEquality(allShuffles[i], shuffled )){
            shuffleCounts[i]++;
            return;
        }
    }
}

let calcFrequencies = function(shuffleCounts, shuffleFrequencies, totalTries){
    for(let i=0 ; i<shuffleFrequencies.length; i++){
        shuffleFrequencies[i] = shuffleCounts[i] / totalTries;
    }
    
}

let numsToShuffle = [1,2,3];
let totalTries = 1200;
let sol = new Solution(numsToShuffle);
let allShuffles = [ [1, 2, 3],
                [1, 3, 2],
                [2, 1, 3],
                [2, 3, 1],
                [3, 1, 2],
                [3, 2, 1] ];
let shuffleCounts = [0, 0, 0, 0, 0, 0];
let shuffleFrequencies = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0];
let shuffled = [];
for (let call = 0; call < totalTries; call++) {
    shuffled = sol.shuffle();
    updateFreqCount(shuffled, allShuffles, shuffleCounts);
}
calcFrequencies(shuffleCounts, shuffleFrequencies, (totalTries*1.0));
console.log("Input array: " + printArray(numsToShuffle) + ", shuffled " + totalTries +  " times.\n");
console.log ("Permutation\t| Occurrences\t| Frequency");
for(let i=0; i<allShuffles.length; i++){
   console.log( printArray(allShuffles[i]) + "\t| " + shuffleCounts[i] + " times\t| " + (shuffleFrequencies[i] * 100).toFixed(2) + "%");
}