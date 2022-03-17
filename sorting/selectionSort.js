//TC: O__


//similar to bubble sort, but places smaller values first
//select smallest element and move it to the beginning


//store the first element as the smallest val seen so far
//compare this item to the next item until you find a smaller number
//if a smaller number is found, designate that smaller number to be the new min and continue to the end of the array
//if the min is not the value you initially began with => swap the two values
//repeat withe the next element until the array is sorted

//swapping function
const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

//selection sort
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++){
    let min = i;
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[min]){
        min = j;
      }
    }
    if ( i !== min){
      swap(arr, i, min)
    }
  }
  return arr;
}

const test = [1, 5, 2, 6, 4, 7, 3, 9, 8, 10];
console.log(selectionSort(test));