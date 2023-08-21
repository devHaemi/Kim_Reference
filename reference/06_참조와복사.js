let a = 10;
let b = a; // 참조가 아닌 복사

b = 20;

let o = {
  isLoading: false,
};

function foo(o) {
  o.isLoading = true; // 객체는 복사가 아닌 참조되기 때문에 true로 변경됨
}

foo(o);

console.log('done');
