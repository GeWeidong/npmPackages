function MirrarrayError(){};
MirrarrayError.prototype = Object.create(Error.prototype);
// 检查参数是否为这四种中的一种
const isValidKey = element => {
    const isNull = element === null;
    return ['string', 'number', 'boolean', 'undefined'].includes(typeof element) || isNull;
}

const nonOverlappingKey = (element) => {
    const isNull = element === null;
    const typeScreenBefore = keysScreen['' + element];
    const thisType = isNull ? 'null' : typeof element;
    if(typeScreenBefore) {
        return typeScreenBefore == thisType;
    } else {
        keysScreen['' + element] = thisType;
        return true;
    }
}

let keysScreen;

const arrayToKeyMirror = arr => {
    keysScreen = {};
    if(!Array.isArray(arr)) {
        throw new MirrarrayError('传入的参数必须是数组');
    }

    return arr.reduce(function(acc, key) {
        if(!isValidKey(key)) {
            throw new MirrarrayError('数组元素非法，每个元素必须是上面定义的四种中的一种');
        };

        if(!nonOverlappingKey(key)) {
            throw new MirrarrayError('元素转换为字符串后不能是同一个值 比如[true, "true"]');
        };

        acc[key] = key;
        return acc;
    }, {})
}

/* test */

var testAry = [1, 'name', true, undefined];
console.log(arrayToKeyMirror(testAry))     // {1: 1, name: "name", true: true, undefined: undefined}

module.exports = arrayToKeyMirror;
