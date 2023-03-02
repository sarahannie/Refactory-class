class Worker{
    constructor(){
        let name;
        let rating;
    }

    //getter method
    getName(){
        return this.name
    }
    //setter method
    setName(name){
        this.name = name
    }
    //getter method
    getRating(){
        return this.rating;
    }

    //setter method 
    setRating(rating){
        this.rating = rating
    }
}

//create instances of class worker
let worker = new Worker();
worker.setName("Sarah")
worker.setRating("10/10")

console.log(worker.getName())