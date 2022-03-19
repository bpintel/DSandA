class Student {
  constructor(firstName, lastName, year){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}!`;
  }
  markLate(){
    this.tardies += 1;
    if (this.tardies >= 3){
      return 'you are expelled!'
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }
  addScore(score){
    this.scores.push(score);
    return this.scores;
  }


}

let firstStudent = new Student('Ben', 'Pintel', 29);
let secondStudent = new Student("Benjamin'", 'Pintelz', 100);

console.log(firstStudent.grade) //29
console.log(secondStudent.firstName) //Benjamin'
console.log(secondStudent.fullName()) //Your full name is Benjamin' Pintelz!
console.log(firstStudent) //{tardies: 0}
console.log(firstStudent.markLate()); //Ben Pintel has been late 1 times
console.log(firstStudent.markLate()); //Ben Pintel has been late 1 times
console.log(firstStudent.markLate()); //Ben Pintel has been late 1 times
console.log(firstStudent) //{ tardies: 1}
secondStudent.addScore(93)
console.log(secondStudent.scores) // [93]