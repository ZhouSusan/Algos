public class Solution {
    public int Search(int[] nums, int target) {
        int start = 0; 
        int end = nums.Length-1;

        int mid; 
        
        while (start <= end)
        {
            mid = start + ((end-start)/2);
            
            if (nums[mid] == target)
            {
                return mid;
            }
            
            if (target < nums[mid])
            {
                end -= 1;
            } else {
                start += 1;
            }
        }
        return -1;
    }
}