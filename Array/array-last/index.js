var isNumber = require('../is-number');

module.exports = function(array, n) {
    if(!Array.isArray(array)) throw new Error('expected the first argument to be an array');
    
    if(array.length == 0) {
        return null;
    }

    n = isNumber(n) ? n : 1;
    var len = array.length;
    if(n === 1) {
        return array[len - 1];
    }
    var res = new Array(n);
    while(n--) {
        res[n] = array[--len];
    }
    return res;
}

/*
    n--表示原来的值，然后自减
    --n表示自减后的值
*/

