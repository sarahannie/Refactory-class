//this is a class from which a class inherite method or field from other class
//parenetclass-childclass
//Super -sub

class Car1{
    getName(){
        return this.name
    }
    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log('Engine started for '+ this.name)
    }
    stopEngine(){
        console.log('Engine stoppng for' + this.name)
    }
}

class Toyota extends Car1{
    topspeed(speed){
        console.log('Top speed for'+ this.name + ' is' + speed)
    }
}


// instance of cars

let myCar = new Toyota();
 myCar.setName('HighLander')
 console.log(myCar.getName())

myCar.startEngine();
myCar.stopEngine();
myCar.topspeed(180);


class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar1 = new Model("Ford", "Mustang");
  console.log(myCar1.show())