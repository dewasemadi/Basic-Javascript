let myArray = ["Coklat", 2.5, 22, true,"Programming"];
console.log(myArray);

console.log(myArray[1]);
console.log("Panjang array: " + myArray.length);

// object, bisa juga implementasi table hash/map
// key, value
let user = {
    firstName : "Harry",
    lastName : "Potter",
    age : 20, 
    isMuggle : false, 
    stuff : ["Magic Wind", "Flying Car", "Owl"]
};

console.log(user.firstName);
console.log(user.age);

let objectDiDalamObject = {
    name:{
        first:"Harry",
        last:"Potter"
    },
    age : 20, 
    isMuggle : false, 
    stuff : ["Magic Wind", "Flying Car", "Owl"]
};

console.log(objectDiDalamObject.name.first);