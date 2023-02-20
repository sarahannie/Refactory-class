// what are operands are variablename that are worked on
let x = 6
let y = 4
 //x and y are the operands


//Operator
//addition operator
 let result1 = x + y 
console.log("Addition is " + result1)

//subtraction
let result2 = x - y
console.log("Subtraction " + result2)

//multiplication
let result3 = x * y
console.log("multiplication is: " + result3)

// modules
let result4 = x % y
console.log("modules is " + result4)

// division
let result5 = x / y
console.log("division: "+ result5)

//exponential
let result6 = x ** y
console.log("exponential" + result6)


//increament ++
//preincrement
let a = 10;
let result7 = 2 + ++a
console.log("PreIncrement", result7)
//Post increment: any increment that happen to the valueName is not considered.
let b = 10;
let result8 = 2 + b++
console.log("postIncrement", result8)
console.log(b)
// Decrement --
//preDecrement
let c = 10;
let result9 = 2 + --c
console.log("PreDecrement" + result9)

//PostDecrement
let d = 10;
let result10 = 2 + d--
console.log("PreDecrement" + result10)


//Assignment Operators
//assign
 let p = 10
 // = is the assign symbol

 //add and assign
let result11 = p += 5
console.log("assign add" + result11)

//subtract and assign
let result12 = p -= 5
console.log("assign subtraction " + result12)

//comparison operator
//equal to
s=2
t=3
n="2"
console.log("equal to: " , s == t) 
console.log("equal to: " , n == s)

//equal type and equal value
console.log("Equal value and Equal data type: " , s === t) 
console.log("equal to: " , n === s)


//not equal to 
console.log(" not equal to: " , s != t) 
console.log("not equal to: " , n != s)


//not equal to data type and value
console.log(" not equal to: " , s !== t) 
console.log("not equal to: " , n !== s)


//greater than
console.log("greater than: ", s > t)


//greater than or equal to
console.log("greater than or equal to: ", s >= t)

//less than
console.log("less than: ", s < t)


// ternary operator
// this operator is like if else statement

let q = 10
let r = 15

let result14 = q > r ? q : r
// this equation means that if q is greater than r print q else print r
console.log("Ternary operator", result14)


//Logical operator
//&& and sign 
//|| or sign
//! not sign 
