
// factory functon return a object

function person(name,age ,district){
    return{
        name,  // factory function e key value same hole ei vabe likleo hobe
        age:age,
        district:district,
        information: function (){
            console.log(`hello ${name}`)
        }
    }
}

let person1 = person("shakil",18,"comilla")
let person2 = person("asif",22, "Gazipur")
person2.country ="bangladesh"
console.log(person2)
person2.information()