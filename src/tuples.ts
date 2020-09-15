let arr = ['ryu', 25, true];

arr[0] = false;
arr[1] = 'yoshi';

let tup: [string, number, boolean] = ['ryu', 25, true];

// tup[0] = 40; // error

tup[0] = 'bob';

// nie mozna zmienic typu na danej pozycji w tuple,
