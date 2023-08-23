const books = [];

books[0] = '헨리 6세 제1부';
books[1] = '헨리 6세 제2부';
books[2] = '헨리 6세 제3부';

/* ------------------------------
  push : 배열 마지막에 넣기
------------------------------ */
books.push('리어드 3세');
books.push('실수 연발');
books.push('말괄량이 길들이기');

console.log(books); // ['헨리 6세 제1부', '헨리 6세 제2부', '헨리 6세 제3부', '리어드 3세', '실수 연발', '말괄량이 길들이기']
console.log(books.length); // 6

/* ------------------------------
  pop : 마지막 배열 빼기 (원본 수정됨)
------------------------------ */
books.pop();
books.pop();

console.log(books); // ['헨리 6세 제1부', '헨리 6세 제2부', '헨리 6세 제3부', '리어드 3세']
console.log(books.length); // 4

/* ------------------------------
  slice : 원하는 위치에서 잘라오기. 원본을 수정하지 않음.
------------------------------ */
const oneBooks = books.slice(1, 2);

console.log(oneBooks); // ['헨리 6세 제2부']
console.log(books); // ['헨리 6세 제1부', '헨리 6세 제2부', '헨리 6세 제3부', '리어드 3세']
console.log(books.length); // 4

/* ------------------------------
  splice : 원하는 위치에서 잘라오기. 잘라낸 원본 위치에서 배열 변경.
------------------------------ */
const twoBooks = books.splice(1, 2, '햄릿', '오셀로', '리어왕');

console.log(twoBooks); // ['헨리 6세 제2부', '헨리 6세 제3부']
console.log(books); // ['헨리 6세 제1부', '햄릿', '오셀로', '리어왕', '리어드 3세']
console.log(books.length); // 5

/* ------------------------------
  shift : 첫 배열 빼기 (원본 수정됨)
------------------------------ */
twoBooks.shift();

console.log(twoBooks); // ['헨리 6세 제3부']

/* ------------------------------
  unshift : 첫 배열에 인자 추가하고 기존 배열 오른쪽으로 밀기 (원본 수정됨)
------------------------------ */
twoBooks.unshift('한 여름밤의 꿈');

console.log(twoBooks); // ['한 여름밤의 꿈', '헨리 6세 제3부']

/* ------------------------------
  join : 배열을 하나의 문자열로 합치기
------------------------------ */
const allBooks = books.join();

console.log(allBooks); // 헨리 6세 제1부,햄릿,오셀로,리어왕,리어드 3세

/* ------------------------------
  split : 문자열을 배열로 변경
------------------------------ */
const newBooks = allBooks.split(',');

console.log(newBooks); // ['헨리 6세 제1부', '햄릿', '오셀로', '리어왕', '리어드 3세']

/* ------------------------------
  concat : 배열 합치기
------------------------------ */
console.log(oneBooks); // ['헨리 6세 제2부']
console.log(twoBooks); // ['한 여름밤의 꿈', '헨리 6세 제3부']

const nextBooks = oneBooks.concat(twoBooks);

console.log(nextBooks); // ['헨리 6세 제2부', '한 여름밤의 꿈', '헨리 6세 제3부']

/* ------------------------------
  전개연산자로 배열 합치기
------------------------------ */
const nextBooksList = [...oneBooks, ...twoBooks];

console.log(nextBooksList); // ['헨리 6세 제2부', '한 여름밤의 꿈', '헨리 6세 제3부']
