//TC: O(n^2)

//want to count the number of times a smaller string appears in a longer string

//loop over the longer sting
  //loop over the shorter string
    //if the chars dont match => break out of inner loop
    //if the chars match => keep going
    //if inner loop is completed and a match is found
      //increment the count of matches
// return count

const phrase = 'I am learning searching methods. se';

const stringSearch = (phrase, word) => {
  let count = 0;
  for (let i = 0; i < phrase.length; i++ ){
    for (let j = 0; j < word.length; j++){
      if (phrase[i + j] !== word[j]){
        break;
      } 
      if (j === word.length - 1) {
        count++;
      }
    }
  }
  return count;
}

console.log(stringSearch(phrase, 'searching'))  //1
console.log(stringSearch(phrase, 'random'))     //0
console.log(stringSearch(phrase, 'se'))         //2