//TC: O(n)
//SC: 

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//iterative
const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i; 
    }
  }
  return -1;
}

console.log('iterative: ', linearSearch(arr, 3)); //3
console.log('iterative: ', linearSearch(arr, 10)); //-1

//Array methods that use linear search:

//indexOf() => index
console.log('indexOf: ', arr.indexOf(4)); //4
console.log('indexOf: ', arr.indexOf(10)); //-1

//includes() => Bool
console.log('includes: ', arr.includes(4)); //true
console.log('includes: ', arr.includes(11)); //false

//find() => returns first element that passes testing function
console.log('find: ', arr.find(el => el > 1)); //2
console.log('find: ', arr.find(el => el > 11)); //undefined

//findIndex() => returns the index of the first element that passes testing function
console.log('findIndex: ', arr.findIndex(el => el > 1)); //2
console.log('findIndex: ', arr.findIndex(el => el > 11)); //-1

//some() =>
console.log('some: ', arr.some(el => el > 1)); //true
console.log('some: ', arr.some(el => el > 11)); //false

