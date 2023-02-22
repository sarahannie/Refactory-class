// For loop

for(let x = 1; x<= 5; x++){
    console.log("number of student", x)
}

let student;

for(student = 1; student <20;  student+=2){
    console.log("student present", student)
}

let fruits = ['Banana', 'Apple', 'Mango', 'Pea']
let fruit
console.log("******** FOR IN ******** */")
//will give index
    for(fruit in fruits){
        console.log(fruit);
        console.log(fruits[fruit])
    }
    console.log("********* FOR OF ********")
//for picking of values
    for(fruit of fruits){
        console.log(fruit)
    }

    console.log("********* While ********")
     john = 1;
    while(john <= 10){
        console.log("john's student OldNumber are:", john)
        john+=2;
    }

    console.log("********* While Do ********")
    john = 4
    do{
        console.log("while do loop check:", john)
        john++
    }while(john <= 10)

    do{
        console.log("while do loop checks:", john)
        john--
    }while(john >= -10)
