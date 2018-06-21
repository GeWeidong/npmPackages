var checksort = require('../index');

var ary = [0,9,8,3]; // false
console.log(checksort(ary));

var ary = [0,9,17,30]; // true
console.log(checksort(ary));

var ary = [5,4,3]; 
console.log(checksort(ary));  // false

console.log(checksort(ary, function(a,b) {
    return b-a;
}))  // true