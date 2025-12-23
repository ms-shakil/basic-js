// person class

class Person {
    constructor(name,age,district){
        this.name = name,
        this.age = age,
        this.district = district
    }
    getInformation(){
        console.log(this.name+" "+ this.age + " "+this.district)
    }
}

let person1 = new Person("shakil",24,"comilla")

person1.getInformation()