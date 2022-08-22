/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let distance = 0;
    let arr = [];
    let result = [];
    
    for (let i = 0; i < points.length; i++) {
        distance = (points[i][0]*points[i][0])+(points[i][1]*points[i][1]);
        arr.push([distance, points[i]]);
    };
    arr.sort((a, b) => a[0]-b[0]);
    while (k > 0) {
        result.push(arr[k-1][1]);
        k--;
    }
    return result;
};