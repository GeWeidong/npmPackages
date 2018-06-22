/*
    找出两个数组之间的不重复的部分  --》 组成一个新数组并返回 
    注意：从第一个数组中找出的
*/

function diff(ary) {
    var len = arguments.length;
    var idx = 0;
    while(++idx < len) {
        ary = diffArray(ary, arguments[idx])
    }

    return ary;
}

function diffArray(one, two) {
    if(!Array.isArray(two)) {
        return one.slice();
    }
    
    var newAry = [];
    var olen = one.length;
    var tlen = two.length;
    var idx = -1;

    while(++idx < olen) {
        var ele = one[idx];
        var hasItem = false;

        for(var i=0;i<tlen;i++) {
            var tele = two[i];
            if(ele == tele) {
                hasItem = true;
                break;
            }
          
        }
        if(hasItem == false) {
            newAry.push(ele);
        } 
    }

    return newAry;
} 

module.exports = diff;

var a = ['a', 'b', 'c', 'd'];
var b = ['b', 'c'];

console.log(diff(a, b))    // ["a", "d"]