const firstName = 'Lorenzo';

const lastName = 'Salti';

const hobbyOne = 'climbing';

const hobbyTwo = 'cycling';

const hobbyThree = 'hiking';

// imports from external files
const fullName = require("./names.js");

const hobbies = require('./hobbies.js');



// console.log(fullName(firstName, lastName));

// console.log(hobbies(hobbyOne, hobbyTwo, hobbyThree));

console.log(people());




function people() {
  return {
    fullName: fullName(firstName, lastName),
    hobbies: hobbies(hobbyOne, hobbyTwo, hobbyThree)
  }
}