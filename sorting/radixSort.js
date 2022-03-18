//TC: O(nk) where k is the number of digits. (k is almost always log n because of how computers store numbers)



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

//radix sort

//input: list of numbers
//output: sorted list of numbers
//find how many digits the largest number has
//loop from n=0 up to the largest number of digits
//for each iteration
  //create buckets for each digit (0 to 9)
  //place each number in the corresponding bucket based on its nth digit
  //replace our existing array with values in our buckets starting with 0 going up to 9
//return list

const radixSort = (numbers) => {
  let maxDigitCount = mostDigits(numbers);
  for (let k = 0; k < maxDigitCount; k++){
    let digitBuckets = Array.from({length:10}, () => []);
    for (let i = 0; i < numbers.length; i++) {
      let digit = getDigit(numbers[i], k);
      digitBuckets[digit].push(numbers[i]);
    }
    numbers = [].concat(...digitBuckets);
  }
  return numbers;
}


const test3 = [23,345,5467,12,2345,9852];
console.log('radixSort: ', radixSort(test3)) //[12, 23, 345, 2345, 5467, 9852]

