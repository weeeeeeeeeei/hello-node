// src/ts/index.ts
function getFirstWord(msg) {
    // 这里使用了 String 来避免程序报错
    console.log(String(msg).split(' ')[0]);
}
getFirstWord('Hello World');
getFirstWord(123);
var petter = {
    name: 'Petter',
};
//class
var User = /** @class */ (function () {
    // 入参也要定义类型
    function User(userName) {
        this.name = userName;
    }
    User.prototype.getName = function () {
        console.log(this.name);
    };
    return User;
}());
// 通过 new 这个类得到的变量，它的类型就是这个类
var petter1 = new User('Petter');
petter1.getName(); // Petter
/*
注意在counter 函数的 console.log 语句里，使用了一个 `` 符号来定义字符串，这是 ES6 语法里的 模板字符串 ，它和传统的单引号 / 双引号相比更为灵活，特别是遇到字符串需要配合多变量拼接和换行的情况。
对 JavaScript 后面推出的新语法不太熟悉的话，很容易和单引号混淆，在学名上，它也被称之为 “反引号” （ Backquote ）
*/
function counter(count) {
    console.log("The current count is: ".concat(count, "."));
}
// 不论传数值还是字符串，都可以达到的目的
counter(1); // The current count is: 1.
counter('2'); // The current count is: 2.
function greet(name) {
    if (Array.isArray(name)) {
        return name.map(function (n) { return "Welcome, ".concat(n, "!"); });
    }
    return "Welcome, ".concat(name, "!");
}
// 单个问候语，此时只有一个类型 string
var greeting = greet('Petter');
console.log(greeting); // Welcome, Petter!
// 多个问候语，此时只有一个类型 string[]
var greetings = greet(['Petter', 'Tom', 'Jimmy']);
console.log(greetings);
//import md5 from 'md5'
//console.log(md5('Hello World'))
