// problem solved--------------------------->238
function numberEvenOrOdd(nums) {
  let num = nums.length;
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
const number = [12, 33, 444, 666, 22];
console.log(numberEvenOrOdd(number));

// problem solved--------------------------->239
function nameFirstLetterReturn(first) {
  return first[0];
}
const firstLetter = nameFirstLetterReturn("Raju");
console.log(firstLetter);

// problem solved--------------------------->240
function numberGutterOrLessThan(n) {
  if (n > 10) {
    return n / 10;
  } else {
    return n * 10;
  }
}
const gutterNumber = numberGutterOrLessThan(9);
console.log(gutterNumber);

// problem solved--------------------------->241
function rollNumber(roll) {
  return roll[0] + roll[1];
}
const allStudentRollNumber = [12, 56, 11, 44, 12, 89];
console.log(rollNumber(allStudentRollNumber));
