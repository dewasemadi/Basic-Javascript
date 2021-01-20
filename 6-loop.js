// cara primitif sintaks looping
let i;
for(i =0; i<5; i++)
    console.log(i);


const myArray = ["Harry", "Ron", "Hermione", "Tom"];
for(let i = 0; i < myArray.length; i++) 
    console.log(myArray[i]);

// sintaks modern ES6---
for(const arrayItem of myArray) {
    console.log(arrayItem)
}