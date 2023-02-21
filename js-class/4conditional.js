let startRating = 1;
switch (startRating) {
    case 1:
        console.log("very bad")
        break;
    case 2:
        console.log("Bad")
         break;
    case 3:
        console.log("Average")
         break;
    case 4:
        console.log("Excellent")
        break;
    default:
        console.log("enter a valid number") 
        break;
}

switch( new Date().getDate()){
    case 0:
        console.log("Sunday")
        break;
    case 20:
        console.log("Monday")
        break;
    case 21:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    default:
        console.log("no date of the week")
}

//looping
//for loop
/*
for(initialization; condition; incrementing){
    //loop body
} */

let i;

for(i = 1; i <= 40; i++){
    console.log('value of i is:' +i)
}

let mary = 50

if(mary === 50){
    console.log("Mary is a girl")
}else{
    console.log("mary is a boy")
}

let john = 10

if( john <= 10){
    console.log("john is a boy")
}else{
    console.log("john is a girl")
}

let age = 18

if(age > 18){
    console.log("You can drive")
} else if ( age = 18){
    console.log(" you can learn how to start driving")
}
else {
    console.log("Not allowed to drive")
}



john <= 10 ? console.log("john is a boy") : console.log("john is a girl")

age >= 18 ? console.log("You can drink alcohol") : console.log("You cant drink alcohol")

age > 18 ? console.log("You can drive") : console.log("Not allowed to drive")


