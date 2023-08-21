/********** 자바스크립트 **********/
// function addAge(age) {
//   if (typeof age === 'number') {
//     return age + 1;
//   } else {
//     throw 'ERROR!';
//   }
// }

// let age = addAge(30);

// console.log(age);

/********** 타입스크립트 **********/
function addAge(age: number): number {
  return age + 1;
}

let age: number = addAge(30);

console.log(age);
