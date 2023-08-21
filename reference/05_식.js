/* 구조분해할당 */
const colors = ['red', 'yellow', 'black'];
const Colors = {
  blue: 'blue',
  green: 'green',
  white: 'white',
};

// const red = colors[0];
// const yellow = colors[1];
// const black = colors[2];

const [, yellow] = colors;
const { white, green } = Colors;

yellow;

//////////////////////////////

let a = 10;
let b = '10';

if (a == b) {
  console.log(true);
} else {
  console.log(false);
}
if (a === b) {
  console.log(true);
} else {
  console.log(false);
}

//////////////////////////////

//

//////////////////////////////
