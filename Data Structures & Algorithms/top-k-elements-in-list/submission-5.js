class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      const counts ={};

      for(let num of nums){
        counts[num]= (counts[num] || 0) + 1; 
      }

      const arr=Object.entries(counts).map(([key,freq])=>(
        [freq,key]
      ));

      arr.sort((a,b)=>b[0]-a[0]);
      console.log(arr);

      return arr.slice(0,k).map(row=>row[1]);

    }
}
