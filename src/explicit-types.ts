function explicitTypes() {
  // explicit types
  let character: string;
  let age: number;
  let isLoggedIn: boolean;

  // age = 'bob'
  age = 30;

  // isLoggedIn = 25
  isLoggedIn = false;

  // arrays

  let ninjas: string[] = [];

  // ninjas = [10,23]
  //without = [] at the end array wouldn't be initialized and .push would throw an error in the browser (undefined)
  ninjas.push('bob');
  ninjas = ['yoshi'];

  // union types
  let mixed: (string | number | boolean)[] = [];

  mixed.push('hello');
  mixed.push(24);
  mixed.push(true);

  // if it's not an array we don't need ()
  let uid: string | number;

  uid = '123';
  uid = 123;

  // objects
  let ninjaOne: object;
  ninjaOne = { name: 'ryu', age: 13 };

  let ninjaTwo: {
    name: string;
    age: number;
    beltColor: string;
  };

  ninjaTwo = {
    name: 'mario',
    age: 20,
    beltColor: 'black',
  };
}

explicitTypes();
