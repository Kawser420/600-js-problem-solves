// problem solved--------------------------->222
function difference(num1, num2) {
  const total = num1 + num2;
  console.log(total);
}
const fatherAge = 48;
const sonAge = 24;
difference(fatherAge, sonAge);

// problem solved--------------------------->223
function makeCalculator(n, m) {
  const multiple = n * m;
  console.log(multiple);
}
const number = 20;
const number2 = 15;
makeCalculator(number, number2);

// problem solved--------------------------->224
function threeSubject(sub, sub2, sub3) {
  const total = sub + sub2 + sub3;
  const total2 = sub + sub2 + sub3;
  console.log(total);
  console.log(total2);
}
threeSubject(67, 90, 86);

// different way
function threeSubject(sub, sub2, sub3) {
  return sub + sub2 + sub3;
}
const subNumber = threeSubject(89, 56, 88);
console.log(subNumber);

// problem solved--------------------------->225
function age(year, birthday) {
  const currentAge = year - birthday;
  console.log(currentAge);
}
age(2025, 2001);

// problem solved--------------------------->226
function dukandarKeTakaDilam(law) {
  const lawPrice = 35;

  const totalLawHave = law / lawPrice;
  return totalLawHave;
}
const amiTotalLawPabo = dukandarKeTakaDilam(1000);
console.log(amiTotalLawPabo);

// problem solved--------------------------->227
function average(a, b, c, d) {
  const total = a + b + c + d;
  const avg = total / 4;
  return avg;
}

const totalAverage = average(5, 1, 44, 3);
console.log(totalAverage);

// problem solved--------------------------->228
function sellingPrice(price) {
  const gain = 250;
  const productPrice = price + gain;
  return productPrice;
}
const sellGain = sellingPrice(299);
console.log(sellGain);

// problem solved--------------------------->229
function myAge(birth) {
  const latter = 100;
  const totalMyAge = birth + latter;
  console.log(totalMyAge);
}
myAge(2001);

// problem solved--------------------------->230
function mobileUse(use) {
  let oneMonth = 30;
  oneMonth *= use;
  console.log(oneMonth);
}
mobileUse(4);
