/* 使用for循环 实现查找某个数组中是否包含指定元素的功能 */

function inArray(arr, val) {
    arr = arr || [];
    for(var i=0,len=arr.length;i<len;i++) {
        return arr[i] == val;
    }
    return false;
}

module.exports = inArray;