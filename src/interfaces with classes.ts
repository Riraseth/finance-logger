// wymagamy by metoda format() miala taki sam typ jak z interface HasFormatter

interface HasFormatter {
  format(): string;
}

class Invoice2 implements HasFormatter {
  constructor(
    readonly client: string, // musza byc readonly itp, inaczej ten sposob nie zadziala
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice2('bob', 'knob', 255);
docTwo = new Invoice2('bob', 'knob', 255);

// arr moze zawierac tylko elementy uzywajace HasFormatter

let docs: HasFormatter[] = [];

docs.push(docOne);
docs.push(docTwo);
