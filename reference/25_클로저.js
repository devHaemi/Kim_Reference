let saveNumber1 = 1;

function increment1() {
  return saveNumber1++;
}

console.log(increment1());

saveNumber1 = 200;

console.log(increment1());

/* ------------------------------
  클로저를 이용한 갑(saveNumber) 보호
------------------------------ */
function increment2() {
  let saveNumber2 = 1;

  return function () {
    return saveNumber2++;
  };
}

const inc = increment2();

console.log(inc());
console.log(inc());
console.log(inc());

/* ------------------------------
  타입스크립트 private를 이용한 값 보호
------------------------------ */
// class MyObj {
//   private saveNumber3: Number;
// }
