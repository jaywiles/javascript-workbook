'use strict';

// 1. Use a do...while loop to console.log the numbers from 1 to 1000.

let text = "0";
let i = 0;
do {
    console.log("1. The number is " + i);
    i++
} while (i <= 1000);

// Used to create a space between different answers
console.log('')

// 2. Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"

const person = [{
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}]

// 3. Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.

for (person.birthDate in person) {
    for (let i = 0; i < person.length; i++) {
        let birthSplit = person[i].birthDate.split(' ');
        if (birthSplit[2] % 2 !== 0) {
            let birthReturn = birthSplit.join(' ');
            console.log("3. ", birthReturn);
        } else {
            console.log('false');
        }
    }
}

// Used to create a space between different answers
console.log('')

// 4. Create an arrayOfPersons that contains multiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

const personArray = [{
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
}, {
    firstName: "Jay",
    lastName: "Wiles",
    birthDate: "Aug 9, 1990",
    gender: "male"
}, {
    firstName: "Amanda",
    lastName: "Fonville",
    birthDate: "Jun 14, 1993",
    gender: "female"
}, {
    firstName: "Anna",
    lastName: "Wiles",
    birthDate: "Sep 22, 1991",
    gender: "female"
}]

// 5. Use .map() to map over the arrayOfPersons and console.log() their information.

let arrayOfPersons = personArray.map(element => {
    console.log("5. ", element);
})

// Used to create a space between different answers
console.log('')

// 6. Use .filter() to filter the persons array and console.log only males in the array.

const personsFilter = personArray.filter(persons => (persons.gender == "male")); 

console.log("6. ", personsFilter);

// Used to create a space between different answers
console.log('')

// 7. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

// const dateFilter = personArray.filter(persons => (persons.birthDate.length[-4] < 1990))

// function dateFilter(personArray) {
//     if (birthDate.length)
// }

// const dateFilter = personArray.substring(personArray["birthDate"].length - 4);

// console.log("7. ", personArray.filter(dateFilter))

let yearFilter = 0
const dateFilter = 






// for (person.birthDate in person) {
//     for (let i = 0; i < person.length; i++) {
//         let birthSplit = person[i].birthDate.split(' ');
//         if (birthSplit[2] % 2 !== 0) {
//             let birthReturn = birthSplit.join(' ');
//             console.log("3. ", birthReturn);
//         } else {
//             console.log('false');
//         }
//     }
// }