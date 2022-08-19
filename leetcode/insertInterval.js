/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
    if (intervals.length == 0) {
        return [newInterval];
    }
    
    if (newInterval[1] < intervals[0][0]) {
        intervals.unshift(newInterval);
        return intervals;
    }
    
    if (newInterval[0] > intervals[intervals.length-1][1]) {
        intervals.push(newInterval);
        return intervals;
    }
    
    let idxBeg = 0;
    let idxEnd = 0;
    let beg = 0;
    let end = 0;
    
    for (let i = 0; i < intervals.length; i++) {
        //beginning of new range
        if (intervals[i][0] <= newInterval[0] && intervals[i][1] >= newInterval[0]) {
            idxBeg = i;
            beg = intervals[i][0];
            break;
        }
        
        if (intervals[i][0] > newInterval[0]) {
            idxBeg = i;
            beg = newInterval[0];
            break;
        }
    }
    
    //locate ending of new range
    for (let j = intervals.length-1; j >= 0; j--) {
    if (intervals[j][0] <= newInterval[1] && intervals[j][1] >= newInterval[1]) {
        idxEnd = j;
        end = intervals[j][1];
        break;
    }

        if (intervals[j][0] < newInterval[1]) {
            idxEnd = j;
            end = newInterval[1];
            break;
    }
}
    
    const numOfIntervalsToDelete = idxEnd - idxBeg + 1;
    intervals.splice(idxBeg, numOfIntervalsToDelete, [beg, end]);
    return intervals;
};

var insert2 = function(intervals, newInterval) {
    let length = intervals.length;
    let result = [];
    let i = 0;
    
    while (i < length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }
    
    while (i < length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }
    
    result.push(newInterval);
    
    while (i < length) {
        result.push(intervals[i]);
        i++;
    }
    
    return result;
};