// problem solved------------------------------>267
// duplicate remove from array
function noDuplicate(array) {
  const unique = [];
  for (const number of array) {
    if (unique.includes(number) === false) {
      unique.push(number);
    }
  }
  return unique;
}

const number = [1, 5, 61, 5, 87, 5, 81, 61];
const uniqueArray = noDuplicate(number);
console.log(uniqueArray);
