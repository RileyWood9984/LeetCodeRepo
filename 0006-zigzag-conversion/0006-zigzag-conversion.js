/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const array=[...new Array(numRows).keys()];
    array.push(...array.slice(1,-1).reverse());
    const amalgam= new Array(numRows).fill('');
    [...s].forEach((i,ii)=>(amalgam[array[ii%array.length]]+=i));
    return amalgam.join('')
    
};