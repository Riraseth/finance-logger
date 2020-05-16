function functions() {
  let greet: Function;

  greet = () => {
    console.log('hello');
  };

  greet();

  const add = (
    a: number,
    b: number,
    c: number | string = 10,
    d?: number | string
  ) => {
    console.log(a + b);
    console.log(c);
    console.log(d);
  };

  // d? means d argument is optional

  add(1, 2, '14');

  const minus = (a: number, b: number): number => {
    return a + b;
  };

  let result = minus(10, 7);
  // result becomes type number because return returs a number

  console.log(result);
}

functions();
