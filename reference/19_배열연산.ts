type Book = {
  title: string;
  copyright?: string;
  author?: string;
};

const books: string[] = [
  '헨리 6세',
  '리처드 3세',
  '실수 연발',
  '말괄량이 길들이기',
  '헨리8세',
];

/* ------------------------------
  forEach
------------------------------ */
books.forEach((book: string, idx: number, books: string[]) => {
  console.log(book, idx);
});

/* ------------------------------
  map : 새로운 배열 반환
------------------------------ */
const bookObjects: Book[] = books.map((book: string) => {
  return {
    title: book,
    author: undefined,
  };
});

console.log(bookObjects);

// 메서드 체이닝
const ShakespeareOneBooks: Book[] = books
  .map((book: string) => ({
    title: book,
  }))
  .map((book: Book) => ({
    ...book,
    author: 'William Shakespeare',
  }));

console.log(ShakespeareOneBooks);

// 위의 코드와 같은 결과값이지만 함수로 분리 관리하면 재활용성이 좋아짐
const bookTitleToBookObject = (book: string) => ({ title: book });
const makeAuthor = (name: string) => (book: Book) => ({
  ...book,
  author: name,
});

const shakespeareTwoBooks: Book[] = books
  .map(bookTitleToBookObject)
  .map(makeAuthor('William Shakespeare'));

console.log(shakespeareTwoBooks);

/* ------------------------------
  filter : 조건에 맞는 값만 새로운 배열로 반환
------------------------------ */
const henry: Book[] = shakespeareTwoBooks.filter((book: Book) =>
  book.title.includes('헨리')
);

console.log(henry);

/* ------------------------------
  reduce : 배열의 값을 합산
------------------------------ */
const someNumbers: number[] = [10, 5, 3, 14, 56];
const sumNumber = someNumbers.reduce((a: number, b: number) => a + b, 0);

console.log(sumNumber);

// 숫자가 아닌 객체를 응용
type SomeObject = {
  [key: string]: string | number;
};

const someObjects: SomeObject[] = [
  { border: 'none' },
  { fontSize: 24 },
  { className: 'box sm-box' },
];

const someObject: SomeObject = someObjects.reduce(
  (a: SomeObject, b: SomeObject) => ({ ...a, ...b }),
  {}
);

console.log(someObject);

/* ------------------------------
  유사배열
------------------------------ */
function sumNumbers(): number {
  return Array.from(arguments).reduce((a: number, b: number) => a + b, 0);
}

console.log(sumNumbers(10, 20, 30, 40, 50));

function sumNumberForTypeScript(...args: number[]): number {
  return args.reduce((a: number, b: number) => a + b, 0);
}

console.log(sumNumberForTypeScript(10, 20, 30, 40, 50));
