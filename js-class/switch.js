// switch case
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

let game = "basketball"
switch (game) {
    case "fifa":
        console.log("Fifa starting soon")
        break;
    case"basketball":
        console.log("play faster")
        break;
    default:
        console.log(" cant play")
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
    case 1:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    default:
        console.log("no date of the week")
}