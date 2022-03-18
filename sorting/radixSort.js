//TC: O__



//all previous sorts were comparison sorts
//radix sort is a integer based sort (no direct comparisons) (only works with numbers)

//exploits the fact that information about the size of the number is encoded in the number of digits


// getDigit takes in a number and a place
  //returns the digit in the number at the given place


const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10,i)) % 10;
}

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

const mostDigits = (numbers) => {
  let maxDigits = 0;
  for (let i = 0; i < numbers.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(numbers[i]))
  }
  return maxDigits;
}

const test = 1234;
const test2 = [1, 23, 455, 31234, 23];
console.log('getDigit: ', getDigit(test, 2)); //2
console.log('digitCount: ', digitCount(test));  //4
console.log('mostDigits: ', mostDigits(test2)); //5
