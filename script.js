console.log("Hello World");
// Take an array of numbers and return the sum.

let arrayOfNumbers = [31, 42, 50, 22, 96, 54, 5, 2, 10];

let returnSum = function(array){
    let sum = 0;
    for (let i = 1; i<array.length; i++){
        sum += array[i];
    }

    return sum
}

console.log(returnSum(arrayOfNumbers));

// Take an array of numbers and return the average.
let returnTheAverage = function(array){
    let average = returnSum(array) / array.length;
    return average;
}
console.log(returnTheAverage(arrayOfNumbers));

// Take an array of strings and return the longest string.
let phrasesArray = [
    "Eat an apple a day",
    "Bananas are great for energy",
    "Oranges are juicy and refreshing",
    "Grapes make a tasty snack",
    "Kiwi fruit is rich in vitamin C",
    "Strawberries are perfect for dessert",
    "Pineapple adds a tropical twist",
    "Blueberries are packed with antioxidants",
    "Watermelon is deliciously hydrating"
  ];

  let returnTheLongestString = function(array){
    let longestString = array[0];
    for (let i =1; i<array.length; i++){
        if(array[i].length>longestString.length){
            longestString = array[i];
        }
    }
    return longestString;
}

console.log(returnTheLongestString(phrasesArray))

// Take an array of strings, and a number and return an array of the 
// strings that are longer than the given number.

let comparStringsToNumbers = function(array, number){
    let longString = [];
    for (let i =0; i<array.length; i++){
        if(array[i].length>number){
            longString.push(array[i]);
        }
    }
    return longString;
}

console.log(comparStringsToNumbers(phrasesArray, 35));


// Take a number, n, and print every number between 1 and n without using loops. 
// Use recursion.

function printNumbers (n) {
    if (n >= 1) {
        printNumbers(n-1);
        console.log(n);
    }
}
printNumbers(7);

//Part 2
// Sort by age
const people =
[
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
    { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

people.sort((a,b) => {
    return b.age - a.age
});
console.log(people);

// Filter the array to remove entries with an age greater than 50.
const people2 = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
    { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

const filteredPeople = people2.filter(person => person.age <= 50);

console.log(filteredPeople);

// Map the array to change the “occupation” key to “job” and increment every age by 1.
const people3 = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
    { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

const mappedPeople = people3.map(person => (
    {
    id: person.id,
    name: person.name,
    job: person.occupation, // Change the key from "occupation" to "job"
    age: (Number(person.age) + 1) // Increment age by 1 and convert it back to string
}
));

console.log(mappedPeople);

// Use the reduce method to calculate the sum of the ages.
 
const sumOfAges = mappedPeople.reduce((acc, person) => acc + parseInt(person.age), 0); //acc is accumulator
console.log(sumOfAges);

// Then use the result to calculate the average age.
let averageAge = sumOfAges / people.length;
console.log("Average Age:", averageAge);

// Part 3
console.log("Part 3")
// It is important to remember that when working with objects in JavaScript, 
// we can either pass those objects into functions by value or by reference. 
// This important distinction changes the way that functions behave, 
// and can have large impacts on the way a program executes.

// For this section, develop functions that accomplish the following:
console.log("****Take an object and increment its age field.****");

let oneObject = mappedPeople[0];
console.log(oneObject);

const incrementAge = (oneObject)=> {
    oneObject.age =(parseInt(oneObject.age) +1).toString();
    return oneObject;
}

console.log(incrementAge(oneObject));



console.log("***Take an object, make a copy, and increment the age field of the copy. Return the copy.***");
// For each of the functions above, if the object does not yet contain an age field, 
// create one and set it to 0. 
// Also, add (or modify, as appropriate) an updated_at field that stores a Date 
// object with the current time.

const copiedObject = (person) =>{
    const newPerson = {...person};
    if(!('age' in newPerson)){
        newPerson.age = 0;
    } else {
        newPerson.age = parseInt(newPerson.age) + 1;
    }
    newPerson.update_at = new Date();
    return newPerson;
}

console.log(copiedObject(people[0]));
console.log(copiedObject(people[1]));



