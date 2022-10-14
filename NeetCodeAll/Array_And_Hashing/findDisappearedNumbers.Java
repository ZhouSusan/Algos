/* 448. Find All Numbers Disappeared in an Array
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]
 */

class Solution {
    public List<Integer> findDisappearedNumbers(int[] nums) {
        Set <Integer> numSet = new HashSet<>();
        for (int i = 1; i < nums.length+1; i++) {
            numSet.add(i);
        }
        
        System.out.print(numSet);
        
        List<Integer> res = new ArrayList<>();
        for (int j = 0; j < nums.length; j++) {
            if (numSet.contains(nums[j])) {
                numSet.remove(nums[j]);
            } 
        }
        Iterator<Integer> it = numSet.iterator();
        while (it.hasNext()) {
            res.add(it.next());
        }
        
        return res;
    }
}