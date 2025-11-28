

// browser -> this browser  e  windos boject 
// nodejs -> this global object return kore 


// function -> global or windos   boject retun kore

// method   -> this method er obje niye kaj kore


// let myObj ={
//     name:"shakil",
//     sayHello: function (){
//         console.log(` hello ${name}`) // kaj korbe na name ekhane key .. identyfier na
//     }
// }
// myObj.sayHello()

let myObj ={
    name:"shakil",
    sayHello: function (){
        console.log(` hello ${this.name}`) // object er key .. this.name or myObj.name dile kaj korbe
    }
}
myObj.sayHello()


let person ={
    name:"sahabuddin shakil",
    interset:["js","py","c+"],
    sayHello: function(){
        this.interset.forEach(function(e){
            console.log(` ${ this.name} love to ${e}`) // undefine  name  asbe 
        })
    }

}
person.sayHello()


let person2 ={
    name:"sahabuddin shakil",
    interset:["js","py","c+"],
    sayHello: function(){
        this.interset.forEach(function(e){
            console.log(` ${ this.name} love to ${e}`) 
        }, this) // foreach er parameter this or object dile name pabe
    }

}
person2.sayHello()


let person3 ={
    name:"sahabuddin shakil",
    interset:["js","py","c+"],
    sayHello: function(){
        this.interset.forEach((e=>{
            console.log(` ${ this.name} love to ${e}`)  // forEach e arrow function use korar jnno sora sori pabe
        })) // foreach er parameter this or object dile name pabe
    }

}
person3.sayHello()