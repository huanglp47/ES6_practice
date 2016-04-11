/**
 * Created by Administrator on 2016/4/6.
 */
const arr = [1,2,3];

var temp = [];

arr.map(item => item+1);
arr.map((item,index) => item+1);

arr.forEach(item => {
    if(item ===1){
        temp.push(item);
    }
})

var bob = {
    name: 'haiping',
    friends: ['liming','laomang'],
    print: function(){
        this.friends.forEach(item => {
            console.log(this.name + ' konows '+item);
        });
    }
}
//bob.print();调用
