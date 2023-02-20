let startRating = 2
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