//TC: worst & avg: O(log n), best: 0(1)

//sort() 
const numbers = [3, 5 , 7, 1, 2];
console.log(numbers.sort((a, b) => a - b));  //ascending oder
console.log(numbers.sort((a, b) => b - a));  //descending order

//divide and conquer

//function accepts a sorted arr and a val to search for
//create a left and right pointer 
//while the left pointer comes before the right pointer
  //create a middle pointer 
  //if the middle pointer is the val, return the index
  //if the val is too small, move the left pointer up
  //if the val is too big move the right pointer down
//if the val is not found return -1

//binary search
const sorted = [0, 3, 4, 5, 6, 8, 11, 22, 23, 35];

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (arr[mid] !== val && left <= right){
    if (val < arr[mid]){
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  
  return arr[mid] === val ? mid : -1;
}


console.log(binarySearch(sorted, 23)) // 8
console.log(binarySearch(sorted, 4))  // 2
console.log(binarySearch(sorted, 40)) // -1