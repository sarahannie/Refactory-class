// object are collection of key value pairs
// object;s key are sting or symbols
//key: values

let person = {
    name : 'Annie',
    Age: 24,
    hobbies: ['Swimming', 'Gisting','Reading','Coding']
};

//Accessing Properties
person.name // dot notation

person['Age'] //bracket notation

//Adding new properties 
person.height = '5ft'

person['gender'] = 'Female'

console.log(person)

console.log(delete person.Age)

console.log(person)


// Object.freeze() static method freezes an object . a frozen object cant be change
let myObj = Object.freeze({foo:'bar', qux:'xyz', pi:3.142})
myObj.que = 'hello';
console.log(myObj)