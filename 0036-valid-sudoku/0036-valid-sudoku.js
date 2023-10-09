/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i=0;i<9;i++){
        let row=new Set();
        let col=new Set();
        let box=new Set();
        for(let n=0;n<9;n++){
            let r=board[i][n];
            let c=board[n][i]
            let b=board[3*Math.floor(i/3)+Math.floor(n/3)][3*(i%3)+(n%3)]
            if(r!=='.'){
                if(row.has(r))return false;
                row.add(r)
            } 
            if(c!=='.'){
                if(col.has(c))return false;
                col.add(c)
            }
            if(b!=='.'){
                if(box.has(b)) return false;
                box.add(b)
            }
        }
    }
    return true;
};