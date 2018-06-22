
/*
    这个方法就是输出一些定制数组
*/
function newArray(start, end) {
    var n0 = typeof start == 'number';
    var n1 = typeof end == 'number';

    if(n0 && !n1) {
        end = start;
        start = 0;
    }  else if (!n0 && !n1) {
        start = 0;
        end = 0;
    }

    start = start||0;
    end = end||0;

    var len = end - start;
    if(len < 0) 
        throw new Error('array langth must be positive');

    var a = new Array(len);
    for(var i=0,c=start;i<len;i++, c++) {
        a[i] = c;
    }

    return a;
}

module.exports = newArray;

console.log(newArray(1,3))   // [1, 2]
console.log(newArray(5))    // [0, 1, 2, 3, 4]
console.log(newArray(5).map(x => x*x));  // [0, 1, 4, 9, 16]
