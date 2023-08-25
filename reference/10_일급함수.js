/* ------------------------------
  CASE_01
------------------------------ */
function salePrice(discountRate, price) {
  return price - price * (discountRate * 0.01);
}

console.log(salePrice(30, 567000));
console.log(salePrice(10, 567000));

/* ------------------------------
  CASE_02
------------------------------ */
function discountPrice(discountRate) {
  return function (price) {
    return price - price * (discountRate * 0.01);
  };
}

console.log(discountPrice(30)(567000));
console.log(discountPrice(10)(567000));

/* ------------------------------
  CASE_03 : 변수로 이름을 부여하면 코드 표현력이 좋아짐
------------------------------ */
let summerPrice = discountPrice(30);
let winterPrice = discountPrice(10);

console.log(summerPrice(567000));
console.log(summerPrice(567000));
