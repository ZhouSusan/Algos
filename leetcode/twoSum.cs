public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        int len = nums.Length;
        //declaring a new dictionary
        Dictionary<int, int> numsDict = new();
        
        for (int i = 0; i < len; i++)
        {
            int diff = target - nums[i];
            if (numsDict.ContainsKey(diff))
            {
                return new int[]{numsDict[diff], i};
            }
            else
            {
                if(!numsDict.ContainsKey(nums[i]))
                {
                    numsDict.Add(nums[i],i);
                }
            }
        }
        return new int[0];
    }
}