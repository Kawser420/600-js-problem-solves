// problem solved------------------------------>262
function evenAverage(numbers) {
  let evens = [];
  for (const number of numbers) {
    if (number % 2 !== 1) {
      evens.push(number);
    }
  }
  if (evens.length === 0) {
    return 0;
  }
  let sum = 0;
  for (const number of evens) {
    sum += number;
  }
  const avg = sum / evens.length;
  return avg;
}
const number = [12, 6, 9];
console.log(evenAverage(number));

// problem solved------------------------------>263
function oddArrayMultiple(numbers) {
  let odds = [];
  for (const number of numbers) {
    // console.log(number);
    if (number % 2 === 1) {
      odds.push(number * 2);
    }
  }
  if (odds.length === 0) {
    console.log("Array not have odds index element");
  } else {
    console.log(odds);
  }
}
const number1 = [12, 6, 5, 11, 50];
oddArrayMultiple(number1);

// problem solved------------------------------>264
function oddNumber(numbers) {
  let odd = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odd.push(number);
    }
  }
  if (odd.length === 0) {
    console.log("No odd numbers found");
  } else {
    console.log("Odd numbers found");
  }
}
const number2 = [10, 11, 9, 19, 4];
oddNumber(number2);
