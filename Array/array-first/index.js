/*
    获取数组中第1、前n个元素
*/
var isNumber = require('../is-number');
module.exports = function arrayFirst(array, num) {
    if(!Array.isArray(array)) throw new Error('array-first expects an array as the first argument');
    
    if(array.length == 0) {
        return null;
    }

    var first = array.slice(0, isNumber(num) ? +num : 1);
    if(+num === 1 || num == null) {
        return first[0];
    }
    return first;
}