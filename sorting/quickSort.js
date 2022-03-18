//TC: O__

//split array into arrays of length 0 or 1 (already sorted)

//works by selecting one element (called the 'pivot')
  //and finding the index where the pivot should end up in the sorted array

//once the pivot is positioned appropriately, 
//quick sort can be applied on either side of the pivot

//pivot helper (partition)

//given an array, designate an el as the pivot point
//rearrange the elements in the array so that all values less than the pivot
  //are moved to the left of the pivot,
  //and all values greater than the pivot are moved to the right of the pivot
// the order of elements on either side of the pivot doesn't matter
//the helper should do this in place and not create a new array
//when the complete the helper returns the index of the pivot

//pivot should be as close to the median value for best results.
//we will chose the first element as the pivot for this example

//args: arr, start, end ( start can be first and end can be the last)
//grab pivot from the start
//store the pivot index in a var (to keep track of where the pivot should end up)
//loop through the array from start to end
  //if the pivot is greater than the current el, 
    //increment the  pivot index var and then swap the current el with the el at the pivot index
  //swap the starting el with the pivot index
  //return pivot index

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const pivot = (arr, start=0, end=arr.length-1) => {
  let pivot = arr[start];
  let swapIdx = start;
  
  for (let i = start; i <= end; i++) {
    if (pivot > arr[i]){
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}


// let test = [4,8,2,1,5,7,6,3];
// console.log(pivot(test)); //3 (returns the index where 4 should be placed)

//call pivot function on array
// when the helper return the updated pivot index;
  //recursively call quickSort on both sub arrays on the left and right side of pivot
  //base case is when you consider a subarray with less than 2 elements

const quickSort = (arr, left=0, right=arr.length-1) => {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIdx-1);
    //right
    quickSort(arr, pivotIdx+1, right);
  }
  return arr;
}

let test2 = [4,6,9,1,2,5,3];
console.log(quickSort(test2));  // [1, 2, 3, 4, 5, 6, 9]