class Invoice {
  // readonly client: string; // nie mozna zmienic wartosci inv.client ani this.client
  // private details: string; // odwolanie moze byc wylacznie w srodku klasy
  // public amount: number;

  // constructor(c: string, d: string, a: number) {
  //   this.client = c;
  //   this.details = d;
  //   this.amount = a;
  // }

  constructor(
    readonly client: string, // musza byc readonly itp, inaczej ten sposob nie zadziala
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('mario', 'work on the website', 250);
const invTwo = new Invoice('mario', 'work on the website', 250);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});
