"use strict";
function dynamicTypes() {
    var age = 25;
    age = true;
    console.log(age);
    age = 'hello';
    console.log(age);
    age = { name: 'bob' };
    console.log(age);
    var mixed = [];
    mixed.push(5);
    mixed.push('bob');
    mixed.push(false);
    console.log(mixed);
    var ninja;
    ninja = { name: 'bob', age: 66 };
    console.log(ninja);
    ninja = { name: 25, age: 'bob' };
    console.log(ninja);
}
dynamicTypes();
function explicitTypes() {
    // explicit types
    var character;
    var age;
    var isLoggedIn;
    // age = 'bob'
    age = 30;
    // isLoggedIn = 25
    isLoggedIn = false;
    // arrays
    var ninjas = [];
    // ninjas = [10,23]
    //without = [] at the end array wouldn't be initialized and .push would throw an error in the browser (undefined)
    ninjas.push('bob');
    ninjas = ['yoshi'];
    // union types
    var mixed = [];
    mixed.push('hello');
    mixed.push(24);
    mixed.push(true);
    // if it's not an array we don't need ()
    var uid;
    uid = '123';
    uid = 123;
    // objects
    var ninjaOne;
    ninjaOne = { name: 'ryu', age: 13 };
    var ninjaTwo;
    ninjaTwo = {
        name: 'mario',
        age: 20,
        beltColor: 'black',
    };
}
explicitTypes();
function functions() {
    var greet;
    greet = function () {
        console.log('hello');
    };
    greet();
    var add = function (a, b, c, d) {
        if (c === void 0) { c = 10; }
        console.log(a + b);
        console.log(c);
        console.log(d);
    };
    // d? means d argument is optional
    add(1, 2, '14');
    var minus = function (a, b) {
        return a + b;
    };
    var result = minus(10, 7);
    // result becomes type number because return returs a number
    console.log(result);
}
functions();
function sandbox() {
    var character = 'mario';
    var age = 30;
    var isBlackBelt = false;
    // character = 20;
    character = 'luigi';
    // age = 'yoshi';
    age = 40;
    // isBlackBelt = 'yes'
    isBlackBelt = true;
    var circ = function (diameter) {
        return diameter * Math.PI;
    };
    // console.log(circ('hello'));
    console.log(circ(2));
    // arrays
    var names = ['luigi', 'mario', 'yoshi'];
    names.push('toad');
    // names.push(3);
    // names[0] = 3'
    var numbers = [1, 2, 3, 4];
    numbers.push(25);
    // numbers.push('bob');
    // numbers[1] = ('jen')
    var mixed = ['ken', 4, 'ryu', 14, 63];
    mixed.push(42);
    mixed.push('blanca');
    mixed[0] = 3;
    // objects
    var ninja = {
        name: 'mario',
        belt: 'black',
        age: 30,
    };
    ninja.age = 40;
    ninja.name = 'ryu';
    // ninja.age = '30';
    // ninja.skills = ['fighting', 'sneaking']
    // can't add new properties after object was defined
    ninja = {
        name: 'yoshi',
        belt: 'yellow',
        age: 42,
    };
}
sandbox();
function typeAliases() {
    var logDetails = function (uid, item) {
        console.log(item + " has a uid of " + uid);
    };
    function greet(user) {
        console.log(user.name + " says hello");
    }
    function greetAgain(user) {
        console.log(user.name + " says hello");
    }
}
typeAliases();
