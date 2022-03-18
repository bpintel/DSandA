//TC: O(n^2); if data is almost all sorted, it can be much better

//insertion sort is good as an online algorithm (data coming in live in streams)


//builds the sort by gradually creating a larger left portion which is always sorted

//make a loop and start by picking the second element in the arr
//compare the second el with the one before it and swap if necessary
//continue to the next el and if it is in the incorrect order, iterate through the sorted portion
  //to place the element in the correct place
//repeat until the array is sorted



const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++){
      let current = arr[i];
      for (var j = i - 1; j >= 0 && arr[j] > current; j--){
        arr[j+1] = arr[j];
      }
      arr[j + 1] = current;
  }
  return arr;
}

const test = [1, 5, 2, 6, 4, 7, 3, 9, 8, 10];
console.log(insertionSort(test));