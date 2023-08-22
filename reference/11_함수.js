function myFn(x) {
  return x + 100;
}

const result = myFn(10);

// --------------------------------------------------

// function sum() {
//   let s = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     s = s + arguments[i];
//   }
//   return s;
// }
// 가변인자로 사용하면 함수의 시그니처를 보고 판단이 어려우므로 rest parameter(...args) 사용
function sum(a, b, ...args) {
  let s = 0;
  for (let i = 0; i < args.length; i++) {
    s = s + args[i];
  }
  return s;
}

const abcSum = sum(10, 20, 30, 40);

// --------------------------------------------------

const myFnV2 = function () {
  return 100;
};

const arr = [10, 20, 30, 40];
// 호출하는 3가지 방법
myFnV2();
sum.call(null, 10, 20, 30, 40);
sum.apply(null, arr);

// --------------------------------------------------

(function () {
  console.log('즉시 실행 함수');
})();

// --------------------------------------------------

/* 화살표 함수 */
const sumV2 = (a, b, ...args) => {
  let s = 0;
  for (let i = 0; i < args.length; i++) {
    s = s + args[i];
  }
  return s;
};

/* 생성기 함수; generator 함수 */
function* gen() {
  yield 10;
  yield 20;
  return 30;
}

const g = gen();

g.next();
g.next();
g.next();

/* 비동기 함수 */
async function myTask() {
  //
}
