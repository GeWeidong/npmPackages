/*
    为什么需要判断是否为数字，因为请看下面：
    console.log(+[]); //=> 0
    console.log(+''); //=> 0
    console.log(+'   '); //=> 0
    console.log(typeof NaN); //=> 'number'
*/

module.exports = function (num) {
    if(typeof num === 'number') {
        return num - num === 0;
    }
    if(typeof num === 'string' && num.trim() !== '') {
        return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
    }
}

/*
                    true
    isNumber(5e3);               // true
    isNumber(0xff);              // true
    isNumber(-1.1);              // true
    isNumber(0);                 // true
    isNumber(1);                 // true
    isNumber(1.1);               // true
    isNumber(10);                // true
    isNumber(10.10);             // true
    isNumber(100);               // true
    isNumber('-1.1');            // true
    isNumber('0');               // true
    isNumber('012');             // true
    isNumber('0xff');            // true
    isNumber('1');               // true
    isNumber('1.1');             // true
    isNumber('10');              // true
    isNumber('10.10');           // true
    isNumber('100');             // true
    isNumber('5e3');             // true
    isNumber(parseInt('012'));   // true
    isNumber(parseFloat('012')); // true

                    false
    isNumber(Infinity);          // false
    isNumber(NaN);               // false
    isNumber(null);              // false
    isNumber(undefined);         // false
    isNumber('');                // false
    isNumber('   ');             // false
    isNumber('foo');             // false
    isNumber([1]);               // false
    isNumber([]);                // false
    isNumber(function () {});    // false
    isNumber({});                // false
*/
