const obj = {
  name: 'Min Tae',
  age: 40,
  getFamilyName: function () {
    return 'Kim';
  },
  getLastName: () => 'Kim',
  getBloodType() {
    return 'B';
  },
};

obj.name;
obj.age;
obj.getFamilyName();
obj.getLastName();
obj.getBloodType();

class Person {
  _bloodType: string;

  constructor(bloodType: string) {
    this._bloodType = bloodType;
  }

  set bloodType(btype: string) {
    if (btype === 'A' || btype === 'B' || btype === 'O' || btype === 'AB') {
      this._bloodType = btype;
    }
  }
}

const p1 = new Person('B');

p1.bloodType;
p1.bloodType = 'C';
