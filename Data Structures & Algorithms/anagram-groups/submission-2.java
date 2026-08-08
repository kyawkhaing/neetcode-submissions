
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {

        Map<String,List<String>> groups = new HashMap<>();

        for(String str: strs){

            int [] key= new int[26]; 
            for(char c: str.toCharArray()){
                key[c - 'a']++;
            }

            String keyStr= Arrays.toString(key);
            
            groups.computeIfAbsent(keyStr,k-> new ArrayList<String>()).add(str);
        }

        return new ArrayList<List<String>>(groups.values());
    }
}
