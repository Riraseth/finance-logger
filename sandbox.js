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
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']
// can't add new properties after object was defined
ninja = {
    name: 'yoshi',
    belt: 'yellow',
    age: 42
};
