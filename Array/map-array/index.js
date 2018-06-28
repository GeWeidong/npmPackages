var map = require('../../Object/map-obj/index');

function mapToArray(obj, fn) {
    var idx = 0;
    var result = map(obj, function(key, value) {
        return [idx++, fn(key, value)]
    });
    result.length = idx;
    return Array.from(result);
}


module.exports = mapToArray;

/* test */

var mapObj = {
    name: 'job', 
    age: 23
};

console.log(mapToArray(mapObj, function (key, value) {return key + " " + value}));