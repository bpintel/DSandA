//TC: O__

//first learn how to merge two arrays


// needs to run in O(n+m) and not modify the input arrays
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
  let result = [];

  


  return result;
}

const test1 = [1, 10, 50];
const test2 = [2, 14, 99, 100];


console.log(merge(test1, test2)) // [1, 2, 10, 14, 50, 99, 100]