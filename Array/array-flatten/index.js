
module.exports = function(array) {
    if(!Array.isArray(array)) throw new Error('expected the first argument to be an array');
    return array_platten(array, []);
}
function array_platten(array, res) {
    for(var i=0,len=array.length;i<len;i++) {
        var item = array[i];
        if(Array.isArray(item)) {
            array_platten(item, res);
        } else {
            res.push(item);
        }
    }

    return res;
}

/* 
    这个模块将多维数组递归展开平铺为一维数组
*/

