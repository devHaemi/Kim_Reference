const person = {
  name: 'Kim Min Tae',
  age: 40,
  getAge() {
    return this.age;
  },
};

person.age;
person.getAge(); // 40

const age = person.getAge;

// age(); //undefined 나옴

age.call(person);

/* ------------------------------
  
------------------------------ */
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.getAge = this.getAge.bind(this);
  }

  getAge() {
    return this.age;
  }

  getName = () => this.name; // 화살표 함수를 사용하면 constructor에서 bind 하지 않아도 됨 (렉시컬 컨텍스트)
}

const p1 = new Person('Kim Min Tae', 30);

p1.getAge();

const myAge = p1.getAge;

myAge();

const x = p1.getName;

x();
