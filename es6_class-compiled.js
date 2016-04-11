'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Animal = (function () {
    // 构造方法，实例化的时候将会被调用，如果不指定，那么会有一个不带参数的默认构造函数.

    function Animal(name, color) {
        _classCallCheck(this, Animal);

        this.name = name;
        this.color = color;
    }

    // toString 是原型对象上的属性

    _createClass(Animal, [{
        key: 'toString',
        value: function toString() {
            console.log('name:' + this.name + ',color:' + this.color);
        }
    }]);

    return Animal;
})();

var animal = new Animal('dog', 'white');
animal.toString(); //name:dog,color:white

console.log(animal.hasOwnProperty('name')); //true
console.log(animal.hasOwnProperty('toString')); // false
console.log(animal.__proto__.hasOwnProperty('toString')); // true

var Cat = (function (_Animal) {
    _inherits(Cat, _Animal);

    function Cat(action) {
        _classCallCheck(this, Cat);

        // 子类必须要在constructor中指定super 方法，否则在新建实例的时候会报错.
        // 如果没有置顶consructor,默认带super方法的constructor将会被添加、
        _get(Object.getPrototypeOf(Cat.prototype), 'constructor', this).call(this, 'cat', 'white');
        this.action = action;
    }

    _createClass(Cat, [{
        key: 'toString',
        value: function toString() {
            console.log(_get(Object.getPrototypeOf(Cat.prototype), 'toString', this).call(this));
        }
    }]);

    return Cat;
})(Animal);

var cat = new Cat('catch');
cat.toString(); //name:cat,color:white

// 实例cat 是 Cat 和 Animal 的实例，和Es5完全一致。
console.log(cat instanceof Cat); // true
console.log(cat instanceof Animal); // true

//# sourceMappingURL=es6_class-compiled.js.map