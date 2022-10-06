import {
    Interval,
} from '/opt/node/lib/lintcode/index.js';

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

export class Solution {
/**
     * @param intervals: an array of meeting time intervals
     * @return: if a person could attend all meetings
 */
    canAttendMeetings(intervals) {
        intervals.sort(([aStart, aEnd], [bStart, bEnd]) => aStart !== bStart ? aStart - bStart : aEnd - bEnd);

        //compare the previous End interval to current Start to see if there is an over lap
        for (let i = 1; i < intervals.length; i++) {
            if (intervals[i-1].end > intervals[i].start) {
                return false;
            }
        }
    return true; 
    }
}