function add(a, b){
    return a + b 
}
add() // function invocation

function mult( a, b){
    console.log( a * b)
}
mult(2,10)

console.log("------------ adding values ----------")
console.log(add(40 , 20))

// local and gobal variables
// local variable has a limited scope(inside the function only)
// global variable - has a global scope (it can be accessed in the whole file)

// local variable example
function local(){
    let localvar1 = 1
    let localvar2 = 2
    let local2 = localvar1 + localvar2
    return local2
}

console.log("local var testing", local())

let globalvar1 = 3;
let globalvar2 = 4;

function global(){
   let globalv = globalvar1 + globalvar2
   return globalv 
}

console.log("Global var example",global())