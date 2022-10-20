/* 
Leetcode 347. Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 */

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        HashMap<Integer, Integer> numsMap = new HashMap<Integer, Integer>();
        
        for (int i = 0; i < nums.length; i++) {
            int curr = nums[i];
            if (numsMap.containsKey(curr)) {
                numsMap.put(curr, numsMap.get(curr) + 1);
            } else {
                numsMap.put(curr, 1);
            }
        }
        
        List<Integer> descendingList = new ArrayList<>(numsMap.keySet());
        Collections.sort(descendingList, (a, b) -> numsMap.get(b) - numsMap.get(a));
        
        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            result[i] = descendingList.get(i);
        }
        
        return result;
    }
}