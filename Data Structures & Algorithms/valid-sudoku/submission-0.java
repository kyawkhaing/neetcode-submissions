class Solution {
    public boolean isValidSudoku(char[][] board) {
        HashMap<String,Set> map = new HashMap();

        for(int row=0;row<9;row++){
            int tubeRow=row/3;
            map.put("row"+row,new HashSet<Integer>());

            for(int col=0;col<9;col++){
                int tubeCol=col/3;
             

                 if(board[row][col] == '.') continue;

                      if(map.get("com"+tubeRow+""+tubeCol) != null)
                {
                    if(!map.get("com"+tubeRow+""+tubeCol).add(board[row][col])) return false;
                  
               }else {
                     map.put("com"+tubeRow+""+tubeCol,new HashSet<Integer>());
                     map.get("com"+tubeRow+""+tubeCol).add(board[row][col]);
              }

                if(map.get("col"+col) != null)
                {
                   
                    if(!map.get("col"+col).add(board[row][col]))
                    {
                      System.out.println("col"+col);
                    System.out.println(map);
                    System.out.println(board[row][col]+"");
                    System.out.println(row+","+col);
                      return false;
                    }
                     
    
                }else{
                    map.put("col"+col,new HashSet<Integer>());
                    System.out.println("col"+col+":"+board[row][col]);
                    map.get("col"+col).add(board[row][col]);
                }

                if(!map.get("row"+row).add(board[row][col]))
                {

                    System.out.println("row");
                    System.out.println(map);
                    System.out.println(board[row][col]+"");
                     return false;
                }    


            }
        } 

        return true;
    }
}
