function dynamicTypes() {
  let age: any = 25;

  age = true;
  console.log(age);
  age = 'hello';
  console.log(age);
  age = { name: 'bob' };
  console.log(age);

  let mixed: any[] = [];

  mixed.push(5);
  mixed.push('bob');
  mixed.push(false);
  console.log(mixed);

  let ninja: {
    name: any;
    age: any;
  };

  ninja = { name: 'bob', age: 66 };
  console.log(ninja);

  ninja = { name: 25, age: 'bob' };
  console.log(ninja);
}

dynamicTypes();
