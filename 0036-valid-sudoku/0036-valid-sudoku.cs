public class Solution {
    public bool IsValidSudoku(char[][] board) {
        HashSet<char>[] row=new HashSet<char>[9];
        HashSet<char>[] col=new HashSet<char>[9];
        HashSet<char>[] box=new HashSet<char>[9];
        for(int i=0;i<9;i++){
            row[i] = new HashSet<char>();
            col[i] = new HashSet<char>();
            box[i] = new HashSet<char>();
        }
        for(int i=0;i<9;i++){
            for(int n=0;n<9;n++){
                char check=board[i][n];
                int b=(3*(i/3))+(n/3);
                if(check=='.') continue;
                if(!row[i].Add(check)) return false;
                if(!col[n].Add(check)) return false;
                if(!box[b].Add(check)) return false;

            }
        }
        return true;
    }  
}