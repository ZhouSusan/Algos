/**
 * @param {number[]} height
 * @return {number}
 * 
    Approach 
    Area = min(left bar, right bar) * distance between bars 
    Note: the furtherest apart two bars are, the more are of the container there is.

    -Sliding Scale
        ->use two markers, start and end(height's array)
        ->create variable to keep count of the max area 

 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length-1;
    let maxContainer = 0;

    while (start < end) {
        let shortestHeight = Math.min(height[start], height[end]) * (start-end);
        maxContainer = Math.max(maxContainer, shortestHeight);

        //if the start of the height(array) has a shorter height than move the start pointer to the right, or move the end pointer to the left
        if (height[start] < height[end]) {
            start += 1;
        } else {
            end -= 1;
        }
    }

    return maxContainer;
};
