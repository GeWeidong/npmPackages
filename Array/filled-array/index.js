/*
    这是es6的Array.fill方法的重写  返回一个特定的数组
*/


function filledArray (item, n) {
    var ret = new Array(n);
    var isFun = typeof item == 'function';
    if(!isFun && typeof ret.fill == 'function') {
        return ret.fill(item);
    }

    for(var i=0;i<n;i++) {
        ret[i] = isFun ? item(i, n, ret) : item;
    }

    return ret;
}

module.exports = filledArray;

/* test */
console.log(filledArray(3, 8));   //  [3, 3, 3, 3, 3, 3, 3, 3]

console.log(
    filledArray((i) => {return i*3}, 3)   // [0, 3, 6]
)
