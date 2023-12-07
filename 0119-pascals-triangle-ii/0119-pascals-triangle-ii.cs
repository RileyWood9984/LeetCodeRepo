public class Solution {
    public IList<int> GetRow(int r) {
      var ret=new int[r+1];
        ret[0]=ret[r]=1;
        long t=1;
        for(int i=1,up=r;i<r;i++,up--){
            t = t*up/i;
            ret[i] = (int)t;
    }
    return ret;
    }
}