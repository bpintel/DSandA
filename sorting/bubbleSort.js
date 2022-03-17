



const test1 = [1, 5, 2, 6, 4, 7, 3, 9, 8, 10];

//built in JS sort()
console.log(test1.sort((a, b) => a - b));  //ascending oder
console.log(test1.sort((a, b) => b - a));  //descending order


const test2 = [1, 5, 2, 6, 4, 7, 3, 9, 8, 10];

//bubble sort
const bubbleSortNaive = (arr) => {
  for (var i = 0; i < arr.length; i++){
    for (var j = 0; j < arr.length; j++){
      if ( arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr
}

//swapping function
const swap = (arr, idx1, idx2) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

const bubbleSortMod = (arr) => {
  for (let i = arr.length; i > 0; i--){
    for (let j = 0; j < i - 1; j++){
      if (arr[j] > arr[j + 1]){
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}


const bubbleSortOpt = (arr) => {
  let noSwaps;
  for (let i = arr.length; i > 0; i--){
    for (let j = 0; j < i - 1; j++){
      if (arr[j] > arr[j + 1]){
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}




console.log(bubbleSortNaive(test2));
console.log(bubbleSortMod(test2));
console.log(bubbleSortOpt(test2))