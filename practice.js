// ** for each // x is element , index is array index,and list is array
let myArray =[2,4,5,6,7,1,8]
// myArray.forEach(function(x,index,list){
//     console.log("Array element is ="+x+"for index="+index)
// })

// map function return new array
// let newArray = myArray.map(function(x){
//     return x+2
// })

// filter function filter element by condition and return new array
// let newArray2 = myArray.filter(function(x){
//     return x>5
// })

// console.log(newArray2)


// Arrow Function

const myFun =(x,y,operation)=>{
       if(operation =="+"){
        return x+y
       }else if(operation =="-"){
        return x-y
       } else if(operation =='*'){
        return x*y
       } else if(operation =="/"){
        return x/y
       }else{
        console.log("Error")
       }

}
console.log(myFun(10,20,"+"))