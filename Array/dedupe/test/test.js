var dedupe = require('../index');

var ary = [23,23,23,45,2,34,54];
console.log(dedupe(ary));   // [ 23, 45, 2, 34, 54 ]

var ary2 = [{a: 2, b: 3}, {c: 2, a: 2}, {c: 2, a: 3}, {b: 3, a: 2}];
console.log(dedupe(ary2)); // [ { a: 2, b: 3 }, { c: 2, a: 2 }, { c: 2, a: 3 }, { b: 3, a: 2 } ]

var aa = [{a: 2}, {a: 1}, {a: 1}, {a: 1}]
var bb = dedupe(aa)
console.log(bb)   // [ { a: 2 }, { a: 1 } ]

var aaa = [{a: 2, b: 1}, {a: 1, b: 2}, {a: 1, b: 3}, {a: 1, b: 4}];
var bbb = dedupe(aaa, value => value.a)
console.log(bbb)   // [{a: 2, b: 1}, {a: 1,b: 2}]
