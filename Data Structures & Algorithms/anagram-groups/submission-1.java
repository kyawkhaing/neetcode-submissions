
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {

        Map<String,List<String>> groups = new HashMap<String,List<String>>();

        for(String str: strs){
            char[] charStr = str.toCharArray();
            Arrays.sort(charStr);
            String sortedStr = new String(charStr);

            groups.computeIfAbsent(sortedStr,k-> new ArrayList<String>()).add(str);
        }

        return new ArrayList<List<String>>(groups.values());
    }
}
