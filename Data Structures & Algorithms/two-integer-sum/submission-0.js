class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if(nums.length < 2) return [null,null];

        for(let i=0;i<nums.length;i++){

            for(let j=i+1;j<nums.length;j++){
                const twoSumVal = nums[i] + nums[j];

                if(twoSumVal === target) return [i,j]; 

                if(twoSumVal> target) continue;
            }

        }

        return [null,null]
    }
}
