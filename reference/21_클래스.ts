/* ------------------------------
  interface 에는 public 요소들만 입력하고
  private 요소는 class에 입력
------------------------------ */
interface Container {
  tagName: string;
  className: string;
  children?: string[];
  getTagName: () => string;
  getClassName: () => string;
}

/* ------------------------------
  # 속성 접근자 3가지
  - public : 인스턴스 객체에 그대로 드러나서 사용할 수 있게 만드는 것
  - private : 외부에는 등장하지 않고 클래스 안에서만 사용 (부모/자식 클래스에서 접근 안됨)
  - protected : 외부에는 등장하지 않지만 확장된 자식 클래스에서는 접근할 수 있는 요소
------------------------------ */
abstract class Shape {
  // 추상 클래스
  public static MIN_BORDER_WIDTH = 0;
  public static MAX_BORDER_WIDTH = 30;

  public readonly name: string = 'Shape';
  protected _borderWidth: number;
  private action!: string; // ! 는 값을 셋팅하지 않아도 된다는 지시어

  constructor(borderWidth: number = 0) {
    this._borderWidth = borderWidth;
  }

  abstract area: () => number; // 추상 메서드

  set borderWidth(width: number) {
    if (width >= Shape.MIN_BORDER_WIDTH && width <= Shape.MAX_BORDER_WIDTH) {
      this._borderWidth = width;
    } else {
      throw new Error('borderWidth 허용 범위를 벗어난 동작을 시도했습니다.');
    }
  }

  get borderWidth() {
    return this._borderWidth;
  }
}

/* ------------------------------
------------------------------ */
class Circle extends Shape {
  private _radius: number;
  public name: string = 'Circle';

  constructor(radius: number) {
    super();
    this._radius = radius;
  }

  get radius() {
    return this._radius;
  }

  area = () => this._radius * this._radius * Math.PI;
}

class Rect extends Shape {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    super();

    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  area = () => this._width * this._height;
}

const circle = new Circle(50);
const rect = new Rect(150, 200);

console.log(rect.borderWidth);
console.log(rect.name);
console.log(circle.name);

try {
  rect.borderWidth = 10;
} catch (e) {
  console.error(e);
}

/* ------------------------------
------------------------------ */
class MyContainer implements Container {
  tagName: string;
  className: string;

  constructor(tagName: string, className: string) {
    this.tagName = tagName;
    this.className = className;
  }

  getTagName = () => this.tagName;
  getClassName = () => this.className;
}

console.log('done');
