/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let total = 0;
    let rows=grid.length
    let cols=grid[0].length
    for(let n=0;n<rows;n++){
        for(let i=0;i<cols;i++){
            if(grid[n][i]==0){
                if(check(n,i)){total++;}
                console.log(total)
            }
        }
    }
    function check(x,y){
        if((x<0||y<0)||(x>=rows||y>=cols)){return false;}
        if(grid[x][y]){return true;}
        grid[x][y] = true
        let up=check(x-1, y), right=check(x, y+1), down=check(x+1, y), left=check(x, y-1);
        return up&&right&&down&&left;
    }
    return total
};