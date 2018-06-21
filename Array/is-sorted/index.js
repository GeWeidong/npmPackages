function defaultComparator(a, b) {
    return (a - b);
}
/*
    检查数组是否从小到大、从大到小排序
*/
module.exports = function checksort(array, comparator) {
    if(!Array.isArray(array)) throw new TypeError('Expected Array, got ' + (typeof array));
    comparator = comparator || defaultComparator
    for(var i=0,len=array.length;i<len;i++) {
        if(comparator(array[i-1], array[i]) > 0) return false;
    }
    return true;
}

