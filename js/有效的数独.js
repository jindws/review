/**
 * @param {string[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
        const start = new Array(9)
        const obj={
            rows:[...start],//0-8
            columns:[...start],//0-8
            boxes:[...start]//--|
        }

        for(let index in board){
            let row,column,box
            const line = board[index]
            for(let i=0;i<9;i++){
                const val = line[i]
                if(val === '.')continue
                if(!obj.rows[index])obj.rows[index]={}
                if(!obj.columns[i])obj.columns[i]={}
                if(!obj.boxes[3*parseInt(index/3)+parseInt(i/3)])obj.boxes[3*parseInt(index/3)+parseInt(i/3)]={}
                row = obj.rows[index][val];
                column = obj.columns[i][val];
                box = obj.boxes[3*parseInt(index/3)+parseInt(i/3)][val];
                if(row||column||box){
                    return false
                }else{
                    obj.rows[index][val] = obj.columns[i][val] = obj.boxes[3*parseInt(index/3)+parseInt(i/3)][val] = true
                }
            }
        }
        return true
};

console.log(isValidSudoku([["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))

