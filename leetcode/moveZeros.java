class Solution {
    public void moveZeroes(int[] nums) {
        if (nums.length == 1) {
            return;
        }

        for (int j=0, i=1; i<=nums.length-1; i++) {
            if(nums[j]!=0)                     //if element is non zero then checks next element
                j++;
            if (nums[j] == 0 && nums[i]!=0) {   //if element is zero also checks if next element is nonzero
                nums[j]=nums[i];                //simply swaps zero element with next non-zero element
                nums[i]=0;                      //next non-zero element to zero
                j++;                            //j++-->to check next zero element
            }
        }
    }    
}