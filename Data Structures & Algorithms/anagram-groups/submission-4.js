class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        for(const str of strs){
            const counts = new Array(26).fill(0);
            for(let c of str){
                counts[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }

            const sortedKey= counts.join(",");
            if(!map[sortedKey]){
                    map[sortedKey]=[];
            }
            map[sortedKey].push(str)

        } 
        return Object.values(map);
    }
}
