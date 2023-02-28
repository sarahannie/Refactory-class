//class is template for creating object
//class name always start with a captical letter
//every class must have a constructors
//this.name is use to reffer to the object.
// class are written in singular forms 
class Car{
        constructor(name, manufacturer, type, speed, color){
            this.name = name;
            this.manufacturer = manufacturer;
            this.type = type;
            this.speed = speed;
            this.color = color;
        }
}
console.log("Printing out this")
let sarah_car = new Car('ML', 'Germany', 'Benz','300', 'Black')
console.log(sarah_car)

let mary_car = new Car('Rt','Spain', 'Toyotal');
console.log(mary_car)

let paul = new Car("Acura","Itain")
console.log(paul.name)
console.log(paul.color)
