const anchor = document.querySelector('a')!; // bez ! bedzie podkreslac anchor w clg, bo nie wie czy istnieje

console.log(anchor.href);

const form = document.querySelector('.new-item-form') as HTMLFormElement; // as XXX zeby powiedziec jaki to element
