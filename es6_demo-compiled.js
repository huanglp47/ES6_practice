/**
 * Created by Administrator on 2016/4/6.
 */
'use strict';

var arr = [1, 2, 3];

var temp = [];

arr.map(function (item) {
    return item + 1;
});
arr.map(function (item, index) {
    return item + 1;
});

arr.forEach(function (item) {
    if (item === 1) {
        temp.push(item);
    }
});

var bob = {
    name: 'haiping',
    friends: ['liming', 'laomang'],
    print: function print() {
        var _this = this;

        this.friends.forEach(function (item) {
            console.log(_this.name + ' konows ' + item);
        });
    }
};
//bob.print();调用

//# sourceMappingURL=es6_demo-compiled.js.map