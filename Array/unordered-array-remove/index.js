/* 不知道这个是用来干嘛的 */
function remove(ary, i) {
    if(i >= ary.length || i < 0) return ;

    var last = ary.pop();
    if(i < ary.length) {
        var tmp = ary[i];
        ary[i] = last;
        return tmp;
    }

    return last;
}

module.exports = remove;



