/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function


// function Add2Numbers(a,b){

//     return a+b
// }

// let sum= Add2Numbers(11,9)
// console.log(sum)


// Arrow Function With Parameters

const Add2Numbers = (a, b) => {


    return a + b;
}

let sum = Add2Numbers(11, 9)
console.log(sum)

// Single Line Arrow Function With Parameters

const Add2Numbers2 = (a, b) => (a + b);


let sum2 = Add2Numbers2(100, 9)
console.log(sum2)
// Implicit Returns

const saysomthing = msg => console.log(msg);

saysomthing('Moin Leute');




// Returning Multiple Lines



const sayHello = () => console.log('hello');

sayHello();

// Returning Multiple Lines

const returnMultipleLines = () => (
  `  <p>
        This is a multiline string!
    </p>`
)

console.log(returnMultipleLines());


//  
let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'maths','english', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', english: 'Joan', art: 'Simon'},
        results: {science: 93, maths: 95, english: 80, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 63, maths: 79, art: 95},
    }
];

const averagePoints = (arr, subject) => {
    let allPoints = 0;
    let sum = 0;
    for(let itm of arr) {
      if(subject in itm.results) {
        allPoints += itm.results[subject];
        sum+=1;
      }
    }
    return allPoints / sum;
};

let averageMarks = averagePoints(students, 'english');
console.log(averageMarks);