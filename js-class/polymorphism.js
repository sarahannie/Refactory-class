// Polymorphism is the ability to create a variable in different form.
class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(this.name + ' take milk')
    }
}

class Alligator extends Animal {
    eats(){
        super.eat()
        console.log(this.name +' eats fish')
    }
}

let sarah = new Alligator('Sarah');
sarah.eats()