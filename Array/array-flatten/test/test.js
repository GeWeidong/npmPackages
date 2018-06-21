var arrayFlatten = require('../index');

var testAray = [1,2,[3,4,[5,6]],8];
console.log(arrayFlatten(testAray));  // [ 1, 2, 3, 4, 5, 6, 8 ]