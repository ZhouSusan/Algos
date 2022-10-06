class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> numsSet = new HashSet<Integer>();

        for (int i = 0; i < nums.length; i++) {
            int curr = nums[i];

            if (numsSet.contains(curr)) {
                return true;
            } else {
                numsSet.add(curr);
            }
        }
        return false;
    }
}