// enum pozwala na przypisanie wartosci tekstowej do numeru

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface ResourceT<T> {
  uid: number;
  resource: ResourceType;
  data: T;
}

const doc9: ResourceT<object> = {
  uid: 1,
  resource: ResourceType.PERSON,
  data: { name: 'bob' },
};

console.log(doc9.resource); // 4
