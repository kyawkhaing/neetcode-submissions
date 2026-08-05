class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false;
        
        let counts = Array(26).fill(0);
        let base = "a".charCodeAt(0);

        for(let i=0;i<s.length;i++){

            let sIndex = s.charCodeAt(i) - base;
            let tIndex = t.charCodeAt(i) - base;

            counts[sIndex]++;
            counts[tIndex]--;
        }

        return counts.every(count => count === 0);
    }
}
