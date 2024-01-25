const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  }

person["Country"] ="Bangladesh" // add key and value
person.age = 33;// values change

console.log(person.Country)
console.log(person["Country"])


for(let key of Object.keys(person)){ // use loop in object
     console.log(person[key])
}
// use loop in object
for( let k in person){
  
    console.log(person[k])
}