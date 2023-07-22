/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if(n===0){return true}
    if(flowerbed.length==1&&flowerbed.includes(0)&&n==1){return true}
    let pTotal=0;
    for(let i=0,ii=1;i<flowerbed.length;i++,ii++){
        if(flowerbed[i]==flowerbed[ii]){
            if(flowerbed[i-1]==undefined||flowerbed[ii+1]==undefined){ 
                pTotal++
                continue;
            }
            i++
            ii++
            if(JSON.stringify(flowerbed[i])==JSON.stringify(flowerbed[ii])){
                pTotal++
            }
        }
    }
    if(pTotal>=n){
        return true;
    }
    return false;
    
};