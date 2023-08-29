/* ------------------------------
  전통적 방법 (함수형)
------------------------------ */
function CartV1() {
  this.cart = [];
  this.currentId = 0;
}

CartV1.prototype.getNewId = function () {
  this.currentId++;
  return this.currentId;
};

CartV1.createItem = function (name, price) {
  return {
    name,
    price,
  };
};

CartV1.prototype.addItem = function (item) {
  this.cart.push({
    ...item,
    id: this.getNewId(),
  });
};

CartV1.prototype.clearCart = function (item) {
  this.cart = [];
  this.currentId = 0;
};

const shoppingCartV1 = new CartV1();

shoppingCartV1.addItem(CartV1.createItem('수박', 8000));
shoppingCartV1.addItem(CartV1.createItem('사과', 12000));
shoppingCartV1.addItem(CartV1.createItem('두부', 2000));

console.log(shoppingCartV1.cart);

/* ------------------------------
  현대적 방법 (클래스형)
------------------------------ */
class CartV2 {
  static createItem = (name, price) => ({
    name,
    price,
  });

  cart;
  currentId;

  constructor() {
    this.currentId = 0;
    this.cart = [];
  }

  getNewId = () => {
    this.currentId++;
    return this.currentId;
  };

  addItem = item => {
    this.cart.push({
      ...item,
      id: this.getNewId(),
    });
  };

  clearCart = () => {
    this.currentId = 0;
    this.cart = [];
  };
}

const shoppingCart2 = new CartV2();

shoppingCart2.addItem(CartV2.createItem('수박', 8000));
shoppingCart2.addItem(CartV2.createItem('사과', 12000));
shoppingCart2.addItem(CartV2.createItem('두부', 2000));
