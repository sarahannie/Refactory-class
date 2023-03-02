// abstraction  is way of hiding the implementation detail and showing only the functionality of the code

function Employee(name,age, baseSalery){
    this.name = name;
    this.age = age;
    this.baseSalery = baseSalery;
    this.monthlyBonus = 1000;

    // this method is exposed as a property
    this.calculateFinalSalery = function(){
        let finalSalary = this.baseSalery + this.monthlyBonus
        console.log('Final Salary is :' + finalSalary)
    }
    // this method is exposed as a property
    this.getEmpDetails = function(){
        console.log('Nme :' + this.name +'| Age : ' + this.age)
    }
}

// create an instance of 
let emp1 = new Employee('John',30,1000);


function Employee(name,age, baseSalery){
    this.name = name;
    this.age = age;
    this.baseSalery = baseSalery;
    // private variable / hidden varisble
    let monthlyBonus = 1000;

    // tAbstraction of this method. it is not exposed to the user
    let calculateFinalSalery = function(){
        let finalSalary = baseSalery + monthlyBonus
        console.log('Final Salary is :' + finalSalary)
    }
    // this method is exposed as a property
    this.getEmpDetails = function(){
        console.log('Name :' + this.name +'| Age : ' + this.age);
        calculateFinalSalery(); // Result of final salary is got when you call the function
    }
}


let emp = new Employee('peter',30,1000)
emp.getEmpDetails()