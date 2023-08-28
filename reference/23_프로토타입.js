const c1 = {
  name: 'C1',
  color: 'red',
};

const c2 = {
  name: 'C2',
  width: 300,
};

const c3 = {
  name: 'C3',
  height: 100,
};

c1.__proto__ = c3;
c2.__proto__ = c2;

console.log(c1); // { name: 'C1', color: 'red' }
console.log(c2); // { name: 'C2', width: 300 }
console.log(c3); // { name: 'C3', height: 100 }

console.log(c1.width); // 300

/* ------------------------------
  함수의 프로토타입 매커니즘
------------------------------ */
function Foo(name) {
  this.name = name;
}

Foo.prototype.lastName = 'WooWa';

const f = new Foo('Aemi');

console.log(f); // { name: 'Aemi' }
console.log(f.lastName); // 'WooWa'
