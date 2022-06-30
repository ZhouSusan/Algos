def twoSum(nums, target) {
    dictionary = {}
    for i in range(len(nums)):
        x = nums[i]
        if target-x in dictionary:
            return (dictionary[target-x]+1, i + 1)
        else:
            dictionary[x] = i
    return []
}