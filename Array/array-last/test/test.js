var arrayLast = require('../index');

var ary = [1,2,3,4,5];

console.log(arrayLast(ary, 2))     // [4, 5]
console.log(arrayLast(ary))        // 5
console.log(arrayLast(ary, 4))     // [ 2, 3, 4, 5 ]
