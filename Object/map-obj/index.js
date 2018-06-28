// 判断是一般对象
const isObject = o => typeof o == 'object' 
    && o != null
    && !(o instanceof Error)
    && !(o instanceof RegExp)
    && !(o instanceof Date);
    
function mapObj(obj, fn, opts, seen) {
    opts = Object.assign({
        deep: false,
        target: {}
    }, opts);

    seen = seen || new WeakMap();

    if (seen.has(obj)) {
        return seen.get(obj);
    }
    // map对象可以将任意类型的值作为键值
    seen.set(obj, opts.target);

    const target = opts.target;
    delete opts.target;

    for (const key of Object.keys(obj)) {
        const val = obj[key];
        const res = fn(key, val, obj);
        
        let newVal = res[1];

        if (opts.deep && isObject(newVal)) {
            if (Array.isArray(newVal)) {
                newVal = newVal.map(x => isObject(x) ? mapObj(x, fn, opts, seen) : x);
            } else {
                newVal = mapObj(newVal, fn, opts, seen);
            }
        }

        target[res[0]] = newVal;
    }

    return target;
};

module.exports = mapObj;
// const newObject = mapObj({foo: 'bar'}, (key, value) => [value, key]);
// console.log(newObject);