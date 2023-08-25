/* ------------------------------
  튜플
  - 배열의 기능을 확장한 기능
  - typescript에서 제공됨
  - 배열의 개수를 제한할 수 있음
------------------------------ */

const address: [number, string, string] = [14023, '서울시', '송파구'];

let [zipcode, address1] = address;

zipcode = 12345;

type BookInfo = [string, string, number];

const BookData: BookInfo[] = [
  ['헨리 8세', '세익스피어', 1884],
  ['헨리 8세', '세익스피어', 1884],
];

BookData.push(['a', 'b', 23]);

function getArrayOne(): any[] {
  return [14023, '서울시', '송파구'];
}

type Address = [number, string, string];

function getArrayTwo(): Address {
  return [14023, '서울시', '송파구'];
}

let address2 = getArrayTwo()[2];

address2 = 12;
