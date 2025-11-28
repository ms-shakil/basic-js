

// Property -> array.lenth lenth is property
// methods -> str.upparcase()

// value pass and Reference pass

let x; // valiable define
x=10; // value pass

let arr =[1,3,4,5,6]
let my_arr = arr   // reference pass .... 2 tai same location change o same hobe

myFun() // define korar upore call korai histing
function myFun(){
    console.log("Histing")
}

let add =(num1,num2)=>{

    return num1+num2
}

add(add(10,30),12) // High cityzen function ... function er modde function call and valble e fun rakha jai


accidentalVariable = 10 // accidental golobal variable


console.log(accidentalVariable) // etha kaj korbe

// function acFun(){
//      value =10   // function er modde caj korbe na
// } 



// function argument


function fun2(num1, num2){ // argument

     console.log(num1+num2)
     console.log(arguments) // argument e 30, 40 thakbe
}
fun2(10,20,30,40) // perametar onk gula deya jabe ...  setha argument e thakbe




// Rest pera-meter

function restFera(num1,num2, ...arr){ // rest perameter
     consol.log(arr) // 1,2,3,4 er array hobe
}
restFera(20, 40,1,2,3,4)


// sprade operator

// so use korar hy array etaration er jnno

let arr3 =[3,5,7,8,9,9]
function  spradeOp(a,b,...arr ){

}
spradeOp(...arr3) // ekta ekta kore element ettaration hobe


let my_arr4 =[2,4,5,6,7,8]

let new_arr =[...my_arr4] // ekta ekta element ettar hy new array te jacce


// object

let person ={
    name:"shakil", // proparty
    age:18,
    addres:{
        district:"comilla",
        village:"None",
        zip:3000,
        interst:["js","py","c"]
    },
    moreInfo: function(){ // methods
        console.log("this is sahab uddin shakil")
    }
}

person.moreInfo()
console.log(person.name)
console.log(person.addres.village)

let calculator ={
    add:(num1,num2)=> num1+num2,  //{} na diye ek line korle reurn kore  ...etha ke implicit return। bole
    minus:(num1,num2)=> num1-num2,
}
console.log(calculator.add(10,20))




function helloWorld (){
    console.log("say hello world")
}

let myObj ={
    Name:"shakil",
    hello:helloWorld,
}

myObj.age =20 // add new key value
delete myObj.Name // kono key value delete kora

myObj.name // value accesskora
myObj["name"]// value access kora

console.log(myObj.hello()) // object e value hisabe function dite pari


// object itteration
let car ={
    name:"BMW ",
    model:2020,
    madeIn:"japan",
    color:"red",
    move:()=>{
        console.log("run the cur")
    }
}

car.dor="4" // add new key and value
delete car.model

// console.log(car.name)
// console.log(car["name"]) // 2 type access value

// iteration  
// car.lenth use kora jai na its object

for(let key in car){
    console.log(key)
}
for(let key in car){
    console.log(car[key]) // only normal vule dibe funciton dibe na
}

for(let key in car){
    if(typeof car[key] == 'function'){
       car[key]()
    }else{
        console.log(car[key])
    }
}