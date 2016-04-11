/**
 * Created by Administrator on 2016/4/11.
 */
'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Animal = (function () {
    function Animal(name) {
        _classCallCheck(this, Animal);

        this.name = name;
    }

    _createClass(Animal, [{
        key: 'sayName',
        value: function sayName() {
            console.log('My name is:A');
            return this;
        }
    }]);

    return Animal;
})();

;

var Programmer = (function (_Animal) {
    _inherits(Programmer, _Animal);

    function Programmer(name) {
        _classCallCheck(this, Programmer);

        _get(Object.getPrototypeOf(Programmer.prototype), 'constructor', this).call(this, name);
    }

    _createClass(Programmer, [{
        key: 'sayName',
        value: function sayName() {
            console.log('My name is:B');
            return this;
        }
    }]);

    return Programmer;
})(Animal);

var wayou = new Programmer('wayou');
wayou.sayName();

//# sourceMappingURL=es6_class1-compiled.js.map