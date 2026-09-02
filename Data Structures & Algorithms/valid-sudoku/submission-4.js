class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rowMap= new Map();
        const colMap = new Map();
        const boxMap = new Map();
        for(let row=0;row<9;row++){
           const rowKey= Math.floor(row / 3);
           for(let col=0;col<9;col++){
             const colKey= Math.floor(col / 3);
             console.log(rowKey+""+colKey);
             if(board[row][col] == '.') continue;

             if(rowMap.get(row) && rowMap.get(row).has(board[row][col]))
             { 
                console.log("row",row,"r*c",row,col,'val',board[row][col]);
                console.log(rowMap);
                return false; }
             if(colMap.get(col) && colMap.get(col).has(board[row][col]))
            {
                console.log("col",col,"r*c",row,col,'val',board[row][col]);
                console.log(colMap);
                return false;
            }
            
            if(boxMap.get(rowKey+":"+colKey) && boxMap.get(rowKey+":"+colKey).has(board[row][col])){

                console.log("box",rowKey+"r:c"+colKey,"r*c",row,col,'val',board[row][col]);
                console.log(boxMap);
                return false;
            } 
             

             if(rowMap.get(row) == null) rowMap.set(row,new Set());
             if(colMap.get(col) == null) colMap.set(col,new Set());
             if(boxMap.get(rowKey+":"+colKey) == null) boxMap.set(rowKey+":"+colKey,new Set());

             rowMap.get(row).add(board[row][col]);
             colMap.get(col).add(board[row][col]);
             boxMap.get(rowKey+":"+colKey).add(board[row][col]);

           }

        }

        return true;

    }
}
