/*
Given an array of heights, which represents the heights of vertical lines drawn on a graph. Find two lines that form a container that holds the most water when combined with the horizontal axis. The height of this container will be the shorter of the two lines:

Note: We cannot tilt any water containers.

Constraints#
The height variable below represents an array of heights of the vertical lines.

2 <= height.length <= 100
0 <= height[i] < 100
*/


/*Approach 
i: height- array of number
o: integer- number
c: 2 <= height.length <= 100, 0 <= height[i] < 100, height variable below represents an array of heights of the vertical lines.
e: if input height's length is equal to two, then return second element array 

create a function that takes in array of numbers and return and integer
create a return variable and return in the end

check if the height's length is equal to 2, if it is return the second element of the array

Area = min(leftBar, rightBar) * distance between bars

-We find our max area, by finding the two bars that are the furthest apart, which equals to the more area of the container 

we initialize left and right pointers: left starts with the first bar and right points to last bar  
we initialize maxArea variable and set that to zero

loop through array-> we move the shortest bar inwards and recalcuate the maxArea each time
*/
let maxWaterAreaContainer = function(height) {
    if (height.length === 2) {
      return height[1];
    }
    let leftBar = 0;
    let rightBar = height.length-1;
    let maxArea = 0;

    //base condition, we do not want the leftBar's value to meet the rightBar's value
    while (leftBar < rightBar) {
      //calucate the maxArea here each iteration by chcking the shortest height between the length of two heights(of the left and right bar)
      maxArea = Math.max(maxArea,     Math.min(height[leftBar], height[rightBar]) * (rightBar- leftBar));
      
    //move the bar depending on which side has the shorter height
      if (height[leftBar] < height[rightBar]) {
        leftBar++;
      } else {
        rightBar--;
      }
      
    }
    
    return maxArea;
}

console.log(maxWaterAreaContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]));
//output: 49

console.log(maxWaterAreaContainer([45, 32, 56, 99]));
//output: 135

console.log(maxWaterAreaContainer([13, 18, 12, 8]));
//output: 24

console.log(maxWaterAreaContainer([13, 12]));
//output: 12

