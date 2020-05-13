"use strict";
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
