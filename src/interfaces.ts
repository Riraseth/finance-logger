// jezeli pojawi sie zmienna o takim typie to musi miec wartosci atrybuty jak w interface

interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(b: number): number;
}

const me: IsPerson = {
  name: 'shaun',
  age: 30,
  speak(text: string) {
    console.log(text);
  },
  spend(amount: number) {
    console.log('i spent', amount);
    return amount;
  },
};

const greetPerson = (person: IsPerson) => {
  console.log('hello ', person.name);
};

greetPerson(me);
