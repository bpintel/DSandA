//TC: O(n log n)

//first learn how to merge two arrays


// needs to run in O(n+m) and not modify the input arrays

//first merge two sorted arrays

//create an empty array, take a look at the smallest values in each input array
//while there are still values we haven't looked at
  //if the value in the first array is smaller than the value in the second array, 
    //push the value in the second array into our results array 
      //and move on to the next value in the first array 
  //if the value in the first array is larger than the value in the second array, 
    //push the value in the second array into our results and
      //move on to the next value in the second array
  //once we exhaust one array, push in all remaining values from the other array

const merge = (arr1, arr2) => {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length){
    if (arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
        j++;
    }
  }
  while(i < arr1.length){
    results.push(arr1[i]);
    i++;
  }
  while(j < arr2.length){
    results.push(arr2[j]);
    j++;
  }
  return results;
}

const test1 = [1, 10, 50];
const test2 = [2, 14, 99, 100];


// console.log(merge(test1, test2)) // [1, 2, 10, 14, 50, 99, 100]


//merge sort 

//break up the array into halves until you have arrays that are empty or have one el
//then merge the smaller arrays into a sorted array with merge func.

const mergeSort = (arr) => {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length /2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left,right)
}

console.log(mergeSort([10,24,76,73,72,1,9])) //[1,9,10,24,72,73,76]