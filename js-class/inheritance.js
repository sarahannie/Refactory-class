//this is a class from which a class inherite method or field from other class
//parenetclass-childclass
//Super -sub

class Car{
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

class Toyota extends Car{
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