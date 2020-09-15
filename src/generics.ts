// kawalek kodu ktory mozna uzywac z innymi typami

// extends object, funkcja musi przyjmowac obiekt

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

// zwraca obiekt z oryginalnymi danymi z obiektu + uid

let docThree = addUID({ name: 'yoshi', age: 40 });

console.log(docThree.name);

// with interfaces

interface Resource<T> {
  uid: number;
  resource: string;
  data: T;
}

// data moze byc kazdego typu

const doc7: Resource<object> = {
  uid: 1,
  resource: 'person',
  data: { name: 'bob' },
};

const doc8: Resource<string[]> = {
  uid: 1,
  resource: 'person',
  data: ['fudge', 'cake'],
};
