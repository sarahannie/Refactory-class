let number = ["Volleyball","basket","Football", 1,2 ,3, true, false, null, undefined]
//array is a heterogenous meaning it can contain any data type
console.log(number[1])

let random =["Rome", "uganda","southAfrica","Nigeria",["Ghana", "Cameroon"]]
console.log(random[4][1])

//Replacing in the array
random[0] = "France"
console.log(random)

// using another approach

let cars = new Array("Ford", "Toyota", "Mercedes")
// console.log(cars)

// cars.push("Ferrari");

// console.log(cars);

// console.log(cars.concat(random));

// console.log( cars.pop())

// Array Methods
// splice called start and number
//console.log(cars.splice(1,2))
//Pop: last Item
// Remove the first items

let item = cars.shift()
console.log(cars)
console.log(item)

// unshift add at the beginning of the array

 cars.unshift("Camery")

console.log(cars)

// Push vs Unshift
//Pop vs shift
//delete , splice

delete cars[1]

console.log(cars)
