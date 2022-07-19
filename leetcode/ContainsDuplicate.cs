public class Solution {
    public bool ContainsDuplicate(int[] nums) {
        HashSet<int> numsSet = new HashSet<int>();
        
        for (int i = 0; i < nums.Length; i++) 
        {
            if (numsSet.Contains(nums[i])) {
                return true;
            }
                numsSet.Add(nums[i]);
        }
        return false;
    }
}