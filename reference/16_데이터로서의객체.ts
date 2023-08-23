/* ------------------------------
  기본형 객체
-------------------- ----------*/
type Box = {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  borderWidth?: number;
  color?: string;
  ['className']?: string;
};

let box: Box = {
  width: 200,
  height: 200,
  borderRadius: 5,
  backgroundColor: 'red',
};

/* ------------------------------
  함수형 객체
------------------------------ */
function makeBox(width: number, height: number, borderRadius: number, backgroundColor: string): Box {
  return {
    width: width, // 이름 같으면 하나로 축약
    height,
    borderRadius,
    backgroundColor,
  };
}

makeBox(100, 100, 0, 'blue');

/* ------------------------------
  클래스형 객체
------------------------------ */
class Shape implements Box {
  width: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;

  constructor(width: number, height: number, borderRadius: number, backgroundColor: string) {
    this.width = width;
    this.height = height;
    this.borderRadius = borderRadius;
    this.backgroundColor = backgroundColor;
  }
}

const boxShape = new Shape(10, 10, 0, 'blue');

/* ------------------------------
  etc
------------------------------ */
box.borderRadius = 10;
box['className'] = 'box rounded';
box.color = 'blue';

delete box.color;

const box1 = box;
const box2 = Object.assign({}, box);
const box3 = { ...box, borderRadius: 10 };
const box4 = JSON.parse(JSON.stringify(box));
