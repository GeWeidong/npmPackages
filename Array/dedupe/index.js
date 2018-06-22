'use strict';

/* 
    此方法为数组去重
    可以传入函数，单独对函数规则进行去重
*/

function dedupe(array, hasher) {
    hasher = hasher || JSON.stringify;

    var clone = [];
    var lookup = {};

    for(var i=0,len=array.length;i<len;i++) {
        var item = array[i];
        var hashed = hasher(item);
        if(!lookup[hashed]) {
            clone.push(item);
            lookup[hashed] = true;
        }
    }

    return clone;
}

module.exports = dedupe;