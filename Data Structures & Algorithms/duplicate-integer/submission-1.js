class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numMap=new Map();
        
        for(let i=0;i<nums.length;i++){
            if (numMap.has(nums[i]))
            {
                return true;
            }else 
             numMap.set(nums[i],i);
        }

        return false
    }
}