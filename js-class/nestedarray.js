console.log("****** NESTED ARRAYS*******")
let hobbies = [["Swimming",4], ["Singing", 5, [3,5]], ["netball", 8], ['football',6]]
console.log("Print main array", hobbies)

console.log("print an element at specified index",hobbies[1][2][1] )

// adding element in the sub array
hobbies[1].push("she like singing pop song")

console.log(hobbies)

//