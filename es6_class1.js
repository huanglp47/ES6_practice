/**
 * Created by Administrator on 2016/4/11.
 */
class Animal{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log('My name is:A');
        return this
    }
};

class Programmer extends Animal{
    constructor(name){
        super(name);
    }
    sayName(){
        console.log('My name is:B');
        return this
    }
}
var wayou = new Programmer('wayou');
wayou.sayName();