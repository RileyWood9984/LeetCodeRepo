/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let x
    let y
    let positionOfZeros = []
    console.log(positionOfZeros)
    for(let i = 0; i < matrix.length; i++){
        let array = matrix[i]
        for(let n = 0; n < array.length; n++){
            if(array[n]===0){
                x=i
                y=n
                positionOfZeros.push([x,y])
            }
        }
    }
    for(let t = 0 ; t < positionOfZeros.length; t++){
        let poz = positionOfZeros[t]
        for(let i = 0; i < matrix.length; i++){
            let array = matrix[i]
            for(let n = 0; n < array.length; n++){
                if( i !== poz[0]){
                    array[poz[1]]=0
                }else{
                    array[n]=0
                }
            }
        }
    }

};