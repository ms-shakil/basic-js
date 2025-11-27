// construction functin retun object   update es6 it will class


// function CreateCar (name,brand, price){
//     this.name = name,
//     this.brand = brand,
//     this.price = price,
//     this.aboutCar = function (){
//         console.log(` this car name is ${this.name}`)
//     }
// }

// let car1 = new CreateCar("xyz","BMW",11)
// console.log(car1)
// car1.aboutCar()






class CreateCar {
    constructor(name, brand, price) { // this is constractin function
        this.name = name,
            this.brand = brand,
            this.price = price,
            this.aboutCar = function () {
                console.log(` this car name is ${this.name}`)
            }
    }
}

let car1 = new CreateCar("xyz","BMW",11)
console.log(car1)
car1.aboutCar()