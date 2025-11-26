

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


